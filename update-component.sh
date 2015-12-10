#!/usr/bin/env bash
#
login() {
   npm login
}

log () {
  printf "  \033[36m%10s\033[0m : \033[90m%s\033[0m\n" $1 $2
}

update() {
    cd ./lib/$1
    if test -f package.json; then
        npm version patch
        npm publish
        git subtree push --prefix=lib/$1 $1 master
    else
        echo "There is no package.json file in `pwd`"
    fi
}

checkChange () {
    if git diff-index --quiet HEAD --; then
        echo "INFO:" "there no changes :)"
    else
        echo "ERROR:" "there are changes, please commit first" && exit 1
    fi
}

checkChange

if test `npm whoami` = tieba; then
    update $1
else
    log "You must login with tieba"
    login
    update $1
fi