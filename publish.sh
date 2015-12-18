#!/usr/bin/env bash

exec 3>&2 # logging stream (file descriptor 3) defaults to STDERR
verbosity=3 # default to show warnings
silent_lvl=0
crt_lvl=1
err_lvl=2
wrn_lvl=3
dbg_lvl=4
inf_lvl=5

notify() { log $silent_lvl "NOTE: $1"; } # Always prints
critical() { log $crt_lvl "CRITICAL: $2"; }
error() { log $err_lvl "ERROR: $1"; }
warn() { log $wrn_lvl "WARNING: $1"; }
debug() { log $dbg_lvl "DEBUG: $1"; }
inf() { log $inf_lvl "INFO: $1"; } # "info" is already a command
log() {
    if [ $verbosity -ge $1 ]; then
        datestring=`date +'%Y-%m-%d %H:%M:%S'`
        # Expand escaped characters, wrap at 70 chars, indent wrapped lines
        echo -e "$datestring $2" | fold -w70 -s | sed '2~1s/^/  /' >&3
    fi
}
view raw

ROOT=`pwd`
TIEBAACCOUNT="http://gitlab.baidu.com/tb-component/awesome/blob/master/doc/publish.md"

trap ctrl_c INT

function ctrl_c() {
    rm npm-debug.log > /dev/null 2>&1
    rm lib/$1/npm-debug.log > /dev/null 2>&1
    exit 1
}

## check first param
if [ -z "$1" ]; then
    error "the first param is needed" && exit 1
fi

## npm login
login() {
   npm logout
   npm login
}

update() {
    if test -d `pwd`/lib/$1; then
        cd ./lib/$1
        if test -f package.json; then
            npm version patch
            npm publish
            git add ./package.json
            git commit -m "upgrade package: $1"
            cd $ROOT
            git subtree pull --prefix=lib/$1 $1 master 2>/dev/null || exit 1
            git subtree push --prefix=lib/$1 $1 master 2>/dev/null
            notify "subtree:$1 push success"
        else
            error "There is no package.json file in `pwd`"
        fi
    else
        error "no such file or directory `pwd`/lib/$1"
    fi
}

checkChange () {
    if git diff-index --quiet HEAD --; then
        notify "INFO:" "there no changes :)"
    else
        error "ERROR:" "there are changes, please commit first" && exit 1
    fi
}

checkWhoami () {
    local knowami=1

    npm whoami > /dev/null 2>&1 || knowami=0

    if [ $knowami == 0 ]; then
        error "You are not login..\n run npm login and login with tieba \n $TIEBAACCOUNT" && exit 1
    fi
}

checkChange
checkWhoami

if test `npm whoami` = tieba; then
    node webpack.publish.js $1
    log "pack:$1 success"
    update $1
    rm -rf lib/$1/dist
    log "remove lib/$1/dist"
else
    warn "You must login with tieba"
    warn "|---------------------------------------------"
    warn "|  Login Url:   $TIEBAACCOUNT                 "
    warn "|---------------------------------------------"
    login
    update $1
fi