#! /bin/bash

# Git STree -- A better Git subtree helper command.
#
# http://tdd.github.io/git-stree
# http://https://medium.com/@porteneuve/mastering-git-subtrees-943d29a798ec
#
# Copyright (c) 2014 Christophe Porteneuve <christophe@delicious-insights.com>
#
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
#
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[ -n "$STREE_DEBUG" ] && set -x

# Env/context-related flags so we know what extra commands can be called upon.
{ [ "cygwin" = "$TERM" ] || { tty -s <&1 && [[ "$TERM"=~"color" ]]; }; } && is_tty=true || is_tty=false
{ echo "foo" | iconv -t 'ASCII' &> /dev/null; } && has_iconv=true || has_iconv=false
{ echo "foo" | tr A-Z a-z &> /dev/null; } && has_tr=true || has_tr=false

# Color constants (VT100 ANSI codes)
CYAN=36
GRAY=37
GREEN=32
RED=31
YELLOW=33

# Symbols
if [ "cygwin" = "$TERM" ]; then
  CHECK="√"
  CROSS="X"
else
  CHECK="✔"
  CROSS="✖"
fi

# Grabbing CLI arguments and the main subcommand
args=("$@")
subcmd=${args[0]}
if [ -n "$subcmd" -a "--help" == "${args[1]}" ]; then
  args[0]=help
  args[1]="$subcmd"
  subcmd="${args[0]}"
fi

# Command: `git stree add name -P prefix url [branch]`
#
# Defines a subtree and performs the initial injection in the working directory.
# Does not create a commit out of it.  Some configuration is added to retain
# subtree information (e.g. prefix, url, branch and latest sync'd commit).
function add_subtree
{
  local name=$(require_name)
  require_arg 2 'Missing -P parameter' '-P' > /dev/null
  local prefix=$(require_arg 3 'Missing prefix')
  prefix=$(normalize_prefix "$prefix")
  local url=$(require_arg 4 'Missing URL')
  local branch=$(optional_arg 5 'master')

  local root_key=$(get_root_key "$name")
  local remote_name=$(get_remote_name "$name")
  if [ $(git config --local --get "remote.$remote_name.url") ]; then
    error false "A remote already exists for '$name' ($remote_name). Subtree already defined?"
  fi

  check_conflicting_strees "$prefix"

  ensure_attached_head
  ensure_no_stage

  { git remote add -t "$branch" "$remote_name" "$url" &&
    git fetch --quiet "$remote_name" &&
    git config --local "stree.$root_key.prefix" "$prefix" &&
    git config --local "stree.$root_key.branch" "$branch" &&
    git read-tree --prefix="$prefix" -u "$remote_name/$branch" &&
    git commit -m "[STree] Added stree '$root_key' in $prefix" &&
    git config --local "stree.$root_key.latest-sync" "$(git rev-parse --short HEAD)" &&
    echo '' &&
    yay "STree '$root_key' configured, 1st injection committed.";
  } || {
    echo '' &&
    git remote rm "$remote_name" &&
    git config --local --remove-section "stree.$root_key" &&
    error false "STree '$root_key' could not be configured.";
  }
}

# Helper: determines whether a branch exists
function branch_exists
{
  [ "refs/heads/$1" == "$(git rev-parse --symbolic-full-name --verify --quiet "$1")" ]
}

# Helper: maintains detected stree conflict state in a file, to work across subshell boundaries.
function has_conflicts
{
  local sentinel="$(git rev-parse --git-dir)/STREE_CONFLICTS"
  case "$1" in
    yes)   echo 'yes' > "$sentinel";;
    reset) rm -f "$sentinel" && false;;
    *)     [ -f "$sentinel" ] && [ "yes" = "$(cat "$sentinel")" ];;
  esac
}

# Helper: checks that the passed path doesn't conflict with existing stree
# definitions.  If it does, lists them, and asks for confirmation.  Refusal
# stops the script.
function check_conflicting_strees()
{
  local path="$1"
  local list=$(get_subtree_list)
  has_conflicts reset

  echo "$list" | while read stree remoting prefix; do
    [ "$prefix" != "$path" ] && continue

    has_conflicts || message $YELLOW "Existing strees use that prefix already:"
    message $YELLOW "  • $stree ($remoting)"
    has_conflicts yes
  done

  has_conflicts || return
  has_conflicts reset

  confirm N "Do you want to proceed and setup another stree with that same prefix?"
}

# Command: `git stree clear`
function clear_subtrees
{
  if [ -n "${args[1]}" ]; then
    error false "This is not the command you're looking for.

git stree clear removes all subtrees defined for this repository.  You
specified a specific subtree (${args[1]}) on the command line, so you probably
want:

    git stree rm ${args[1]}"
  fi

  if [ "$subcmd" == "forget" ]; then
    message $CYAN "git stree forget has been deprecated: use git stree clear instead."
  fi

  for name in $(get_subtree_list simple); do
    rm_subtree "$name" && discreet "• Removed subtree '$name'"
  done
  yay 'Successfully cleared all subtree definitions.'
}

# Helper: confirms with a Y/N question and repeat until a proper answer is given.
# Arguments: color, default (Y or N), message
function confirm
{
  local question="Yn"
  local reply="$1"

  [ "N" = "$reply" ] && question="yN"

  while true; do
    $is_tty && echo -en "\033[0;${CYAN}m"
    read -r -n 1 -p "$2 [$question] " reply
    $is_tty && echo -en "\033[0m"

    reply=$(echo "$reply" | tr a-z A-Z)
    [ -z "$reply" ] && reply="$1"
    [ "Y" = "$reply" -o "N" = "$reply" ] && break
    echo ''
  done

  [ "N" = "$reply" ] && exit 42
}

# Helper: discreet info message.  This will show up in gray on STDOUT.
function discreet
{
  message $GRAY "$@"
}

# Helper: makes sure we're not on a detached HEAD
function ensure_attached_head
{
  [ 'HEAD' != "$(git rev-parse --abbrev-ref --symbolic HEAD)" ] && return
  error false "You are apparently on a detached HEAD.  This is not a good point to commit from.  Checkout a branch."
}

# Helper: makes sure we're in a Git repo.  Piggy-backs on `git config --local`
# to determine that, instead of traversing the filesystem upwards looking for `.git`.
function ensure_git_repo
{
  cmd=$(git rev-parse --is-inside-work-tree 2> /dev/null)
  [ "true" == "$cmd" ] || error false "You do not appear to be in a Git repository"
}

# Helper: makes sure there is nothing in the stage.
function ensure_no_stage
{
  git diff --cached --quiet || error false "You have staged changes already.  This should not get conflated with an upcoming STree commit.  Finalize your commit first or unstage your stuff."
}

# Helper: checks that the stree seems defined already.
function ensure_stree_defined
{
  local name="$1"
  local remote_name=$(get_remote_name "$name")
  local root_key=$(get_root_key "$name")

  for key in "remote.$remote_name.url" "stree.$root_key.prefix" "stree.$root_key.branch"; do
    git config --local --get "$key" &> /dev/null ||
      error false "STree '$root_key' does not seem (fully) defined: missing '$key' configuration."
  done
}

# Helper: error message.  This will show up in red on STDERR, followed by usage info,
# then exit the script with exit code 1.
function error
{
  show_usage=$1
  shift
  message $RED "︎$CROSS ""$@"$'\n' >&2
  $show_usage && usage
  kill -s ABRT $$
}

# Helper: computes a backport branch name based on the passed CLI name.
function get_branch_name
{
  echo "stree-backports-$(get_root_key "$1")"
}

# Helper: computes a remote name based on the passed CLI name.
function get_remote_name
{
  echo "stree-$(get_root_key "$1")"
}

# Helper: computes a root config key based on the passed CLI name.
function get_root_key
{
  local result="$1"
  $has_iconv && result=$(echo "$result" | iconv -t 'ASCII//TRANSLIT//IGNORE')
  $has_tr && result=$(echo "$result" | tr A-Z a-z)
  result=$(echo "$result" | sed 's/[^a-z0-9_ -]\+//g' | sed -e 's/^ \+\| \+$//g' -e 's/ \+/-/g')
  [ -z "$result" ] && error false "STree name '$1' does not yield a usable remote name.  Try using ASCII letters/numbers in it."
  echo "$result"
}

# Helper: returns a list of 3-tuples, one for each defined stree.  Tuples are
# three quoted strings: the stree’s name, its remoting (remote-name/remote-branch),
# and its WD prefix subdirectory.
function get_subtree_list
{
  git config --local --get-regexp 'remote\.stree.*\.url' | sort | while read key url; do
    local name="$(sed 's/remote\.stree-\|\.url//g' <<< "$key")"
    if [ 'simple' == "$1" ]; then
      echo "$name"
    else
      local branch="$(git config --local "stree.$name.branch")"
      local prefix="$(git config --local "stree.$name.prefix")"

      printf "%q %q %q\n" "$name" "$url@$branch" "$prefix"
    fi
  done
}

# Command: `git stree list [-v]`
function list_subtrees
{
  local list=$(get_subtree_list)
  local verbose=false
  [ "-v" == "${args[1]}" ] && verbose=true

  echo "$list" | while read stree remoting prefix; do
    [ -z "$stree" ] && continue
    local branch_name=$(get_branch_name "$stree")
    local backports=false
    local backporting=''
    branch_exists "$branch_name" && backports=true
    $backports && backporting=" (backports through $branch_name)"

    echo "• $stree [$prefix] <=> $remoting$backporting"
    if $verbose; then
      local latest_sha=$(git config --local "stree.$stree.latest-sync")
      local infix=''
      $backports && infix='    '
      echo ''
      git show -s --pretty=format:"  %C(auto)Latest sync:$infix %h - %ad - %s (%an)%n" "$latest_sha"

      if $backports; then
        git show -s --pretty=format:'  %C(auto)Latest backport: %h - %ad - %s (%an)%n' "$branch_name"
      fi
      echo ''
    fi
  done
}

# Helper: info/success message.  This will show up in cyan on STDOUT.
function meh
{
  message $CYAN '✔︎ '"$@"$'\n'
}

# Helper: message.  Takes a color code as first arg, then the message as remaining
# args.  Only injects VT100 ANSI codes if we're on a color-supporting TTY output
# (which is detected using STDOUT, by the way, so YMMV when redirecting to STDERR).
function message
{
  local color="$1"
  shift
  $is_tty && echo -en "\033[0;${color}m"
  echo -n "$@"
  $is_tty && echo -e "\033[0m" || echo ''
}

# Helper: normalizes a cwd-relative prefix so it starts from the root of the working directory.
function normalize_prefix
{
  local root=$(dirname $(git rev-parse --git-dir))

  if [ '.' == "$root" ]; then
    echo "$1"
    return
  fi

  local path="$(pwd -P)/$1"
  path="${path//\/.\//\/}"
  while [[ "$path"=~"([^/][^/]*/\.\./)" ]]; do
    path="${path/${BASH_REMATCH[0]}/}"
  done

  sed "s@$root/@@" <<< "$path"
}

# Helper: gets an argument from the CLI, if present, otherwise uses the default
# passed as $2
function optional_arg
{
  local result=${args[$1]}
  [ -n "$result" ] && echo "$result" || echo "$2"
}

# Command: `git stree pull name`
#
# Pulls remote updates for a properly-configured subtree, and squash-merges them
# as a single commit in the current branch.  This requires a non-detached HEAD and
# an empty stage, so we don't conflate our work with ongoing commit construction.
function pull_subtree
{
  local name=$(require_name)

  ensure_attached_head
  ensure_no_stage
  ensure_stree_defined "$name"

  local root_key=$(get_root_key "$name")
  local remote=$(get_remote_name "$name")
  local branch=$(git config --local "stree.$root_key.branch")
  local log_size=$(echo "${args[@]}" | sed -n 's/^.*--log=\([0-9]\+\).*$/\1/p')
  [ -z "$log_size" ] && log_size=20

  git fetch --quiet "$remote" &&
    git merge --quiet -s subtree --squash --log=$log_size "$remote/$branch" &> /dev/null || exit $?

  echo ''

  if git diff --cached --quiet; then
    meh "STree '$root_key' pulled, but no updates found."
  else
    local latest_sync=$(git config --local "stree.$root_key.latest-sync")
    [ -n "$latest_sync" ] || latest_sync='(use all)'

    local msg_file="$(git rev-parse --git-dir)/SQUASH_MSG"
    local msg="[STree] Pulled stree '$root_key'"$'\n\n'"$(sed "/^commit $latest_sync/,100000d" "$msg_file")"
    echo "$msg" > "$msg_file"
    local commits=$(grep --count '^commit ' "$msg_file")
    git commit -F "$msg_file" &&
    git config --local "stree.$root_key.latest-sync" "$(git rev-parse --short HEAD)"
    yay "STree '$root_key' pulled, $commits update(s) committed."
  fi
}

# Command: `git stree push name [commits...]`
#
# Pushes local commits for a properly-configured subtree on its upstream.
# This can either take a series of specific commits, or will auto-determine
# a list of commits to be used since the last sync.  These commits are
# cherry-picked on a special integration branch that first rebase-pulls
# from upstream, then the new set is pushed back.
function push_subtree
{
  local name=$(require_name)

  ensure_no_stage
  ensure_stree_defined "$name"

  local root_key=$(get_root_key "$name")
  local prefix=$(git config --local "stree.$root_key.prefix")

  local -a commits=(${args[@]:2})
  if [ ${#commits[@]} -eq 0 ]; then
    local latest=$(git config --local "stree.$root_key.latest-sync")
    if [ -z "$latest" ]; then
      error false "Cannot find the most recent sync point for this subtree :-("
    fi

    latest=$(git rev-parse --short "$latest")
    local root_dir="$(dirname $(git rev-parse --git-dir))"
    cd "$root_dir"
    commits=($(git rev-list --reverse --abbrev-commit "$latest".. -- "$prefix"))
    cd - > /dev/null
    if [ ${#commits[@]} -eq 0 ]; then
      meh "No local commits found for subtree '$name' since latest sync ($latest)"
      return
    fi
  else
    local parsed_ref
    for ((i = 0; i < ${#commits[@]}; ++i)); do
      parsed_ref=$(git rev-parse --short "${commits[$i]}" 2> /dev/null)
      if [ 0 = $? ]; then
        commits[$i]=$parsed_ref
      else
        error false "Cannot resolve commit: ${commits[$i]}"
      fi
    done
  fi

  local latest_head=$(git rev-parse --symbolic --abbrev-ref HEAD)

  local remote_name=$(get_remote_name "$name")
  local branch=$(git config --local "stree.$root_key.branch")
  local branch_name=$(get_branch_name "$name")

  if branch_exists "$branch_name"; then
    git checkout --quiet --merge "$branch_name" &&
      git fetch "$remote_name" &&
      git rebase --preserve-merges --autostash --quiet "$remote_name/$branch" &> /dev/null
  else
    git checkout --quiet --track -b "$branch_name" "$remote_name/$branch"
  fi

  for commit in "${commits[@]}"; do
    git cherry-pick -x -X subtree="$prefix" "$commit" > /dev/null &&
      git config --local "stree.$root_key.latest-sync" "$commit" &&
      discreet "• $(git show -s --oneline "$commit")" ||
      error false "Could not cherry-pick $(git show -s --oneline "$commit")"
  done

  git push --quiet "$remote_name" "$branch_name":"$branch" &&
  git checkout --quiet --merge "$latest_head" &&
  yay "STree '$name' successfully backported local changes to its remote"
}

# Helper: require that an argument still be available in the list provided on the CLI
# and consume it, possibly verifying it is a given fixed string (then passed as $2).
#
# An error message *must* be provided as $1 should the argument be missing or incorrect.
# In such a case, it's passed to `error`, thereby stopping the script.
function require_arg
{
  local result="${args[$1]}"
  [ -n "$3" -a "$3" != "$result" ] && result=''
  if [ "$result" ]; then
    echo "$result"
    return
  fi

  error true "$2"
}

# Helper: just a comfort wrapper over `require_arg` for the most common use case.
function require_name
{
  require_arg 1 'Missing subtree name'
}

# Command: `git stree rm name`
#
# Removes all definitions (configuration entries) and backport branch for the given
# subtree, but leaves the subdirectory contents in place.
function rm_subtree
{
  local name="$1"
  [ -z "$name" ] && name=$(require_name)
  local root_key=$(get_root_key "$name")
  local remote_name=$(get_remote_name "$name")
  local branch_name=$(get_branch_name "$name")

  git config --local --remove-section "stree.$root_key" &> /dev/null
  git remote rm "$remote_name" &> /dev/null
  git branch -D "$branch_name" &> /dev/null
  [ -z "$1" ] && yay "All settings removed for STree '$root_key'."
  true
}

# Command: `git stree split name -P path url [branch]`
#
# Creates a proper subtree branch from a subdirectory's contents and history.
# Then the subtree's backport branch is configured and pushed (to either `master`
# or the specified branch).
function split_subtree
{
  local name=$(require_name)
  require_arg 2 'Missing -P parameter' '-P' > /dev/null
  local prefix=$(require_arg 3 'Missing prefix')
  prefix=$(normalize_prefix "$prefix")
  local url=$(require_arg 4 'Missing URL')
  local branch=$(optional_arg 5 'master')

  local root_key=$(get_root_key "$name")
  local remote_name=$(get_remote_name "$name")
  if [ $(git config --local --get "remote.$remote_name.url") ]; then
    error false "A remote already exists for '$name' ($remote_name). Subtree already defined?"
  fi

  ensure_attached_head
  ensure_no_stage

  local latest_head=$(git rev-parse --symbolic --abbrev-ref HEAD)
  local branch_name=$(get_branch_name "$name")

  if branch_exists "$branch_name"; then
    error false "A subtree backport branch already exists for '$name' ($branch_name).  Subtree already defined/split?"
  fi

  git remote add -t "$branch" "$remote_name" "$url" &&
    git config --local "stree.$root_key.prefix" "$prefix" &&
    git config --local "stree.$root_key.branch" "$branch" &&
    git checkout -b "$branch_name" --quiet &&
    git filter-branch -f --subdirectory-filter "$prefix" > /dev/null &&
    git push --quiet -u "$remote_name" "$branch_name":"$branch" > /dev/null &&
    git config --local "stree.$root_key.latest-sync" "$(git rev-parse HEAD)" &&
    git checkout --quiet --merge "$latest_head" &&
    yay "STree '$root_key' configured, split and pushed."
}

# Helper: usage display on STDERR.  Used when an error occurs or when the CLI
# args don't start with a valid command.
function usage
{
  local cmd="$subcmd"

  if [ "help" == "$cmd" -a -n "${args[1]}" ]; then
    cmd="${args[1]}"
  elif [ "help" == "$cmd" ]; then
    cmd=""
  fi

  if ! [[ "@add@clear@forget@help@list@pull@push@rm@split@"=~"@$cmd@" ]]; then
    cmd=""
  fi

  if [ -z "$cmd" ]; then
    cat >&2 <<-EOT
Usage: $0 sub-command [options...]

 Sub-commands:

EOT
  else
    cat >&2 <<-EOT
Usage: $0 $cmd [options…]

EOT
  fi

  if [ -z "$cmd" -o "add" == "$cmd" ]; then
    cat >&2 <<-EOT
    add name -P prefix url [branch]

      Defines a new subtree and performs its initial fetch and prefixed
      (subdirectory) checkout.  You can specify a custom branch to track,
      otherwise it will use \`master\`.  This creates a few local configuration
      entries that will be needed later.

EOT
  fi
  if [ -z "$cmd" -o "forget" == "$cmd" -o "clear" == "$cmd" ]; then
    cat >&2 <<-EOT
    clear (formerly "forget")

      "Forgets" all subtrees if no identifiers are passed.  This essentially
      does \`git stree rm\` over each subtree in turn.

EOT
  fi
  if [ -z "$cmd" -o "list" == "$cmd" ]; then
    cat >&2 <<-EOT
    list [-v]

      Lists all defined subtrees.  If the \`-v\` option is set, displays their
      latest sync (central -> subtree) commit and latest backport (subtree -> central)
      with their timestamps.

EOT
  fi
  if [ -z "$cmd" -o "pull" == "$cmd" ]; then
    cat >&2 <<-EOT
    pull name [--log=20]

      Attempts to pull remote updates for a subtree you already defined.
      This is a no-rebase, squash-commit update that will not create any
      extra line in your history graph, but result in a single update commit
      on your current branch.

      If you wish to change the maximum number of merged commits info in the
      resulting squash commit, use the --log= option.  Defaults to 20.

EOT
  fi
  if [ -z "$cmd" -o "push" == "$cmd" ]; then
    cat >&2 <<-EOT
    push name [commits...]

      Pushes your local work on the subtree to its defined remote.  If you
      specify commits, only these will be cherry-picked. Otherwise, it will
      cherry-pick all commits related to the subtree that occurred since the
      latest \`add\`/\`pull\`.  This creates/maintains a subtree-specific
      backport branch that you should not manually touch.

EOT
  fi
  if [ -z "$cmd" -o "rm" == "$cmd" ]; then
    cat >&2 <<-EOT
    rm name

      Removes all definitions for the given subtree (but leaves the subdirectory
      contents in place).

EOT
  fi
  if [ -z "$cmd" -o "split" == "$cmd" ]; then
    cat >&2 <<-EOT
    stree split name -P path url [branch]

      Creates a proper subtree branch from a subdirectory's contents and history.
      Then the subtree's backport branch is configured and pushed (to either \`master\`
      or the specified branch).

EOT
  fi
  if [ -z "$cmd" -o "help" == "$cmd" ]; then
    cat >&2 <<-EOT
    help [command]

      Displays this usage information, or the command’s usage information.
EOT
  fi
}

# Helper: success message.  This will show up in green on STDOUT.
function yay {
  message $GREEN "$CHECK ""$@"$'\n'
}

# Allow subshells (such as functions called within a `$(…)` subshell)
# to exit the parent script (the main `git-stree` script) by sending it
# an ABRT (6) signal.  See `error` for the trigger side of this.
function exit1 {
  exit 1
}
trap exit1 ABRT

## MAIN ENTRY POINT ##

[[ "$subcmd"=~"he?l?p?" ]] || ensure_git_repo

case "$subcmd" in
  a|ad|add)
    add_subtree;;
  c|cl|cle|clea|clear|f|fo|for|forg|forge|forget)
    clear_subtrees;;
  l|li|lis|list)
    list_subtrees;;
  pul|pull)
    pull_subtree;;
  pus|push)
    push_subtree;;
  r|rm)
    rm_subtree;;
  s|sp|spl|spli|split)
    split_subtree;;
  ""|*)
    usage;;
esac