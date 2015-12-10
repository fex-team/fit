#!/usr/bin/env bash

ROOT=`pwd`
TIEBAACCOUNT="http://gitlab.baidu.com/tb-component/awesome/blob/master/doc/publish.md"

trap ctrl_c INT

function ctrl_c() {
    expect rm npm-debug.log
    expect rm lib/$1/npm-debug.log
    exit 1
}


## check first param
if [ -z "$1" ]; then
    echo "the first param is needed" && exit 1
fi

## npm login
login() {
   npm login
}

update() {
    cd ./lib/$1
    if test -f package.json; then
        npm version patch
        npm publish
        git add ./package.json
        git commit -m "upgrade package: $1"
        cd $ROOT
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
    echo "You must login with tieba"
    echo "|---------------------------------------------"
    echo "|  Login Url:   $TIEBAACCOUNT                 "
    echo "|---------------------------------------------"
    login
    update $1
fi