#!/usr/bin/env bash

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
    echo "the first param is needed" && exit 1
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
            git subtree push --prefix=lib/$1 $1 master 2>/dev/null
            echo "subtree:$1 push success"
        else
            echo "There is no package.json file in `pwd`"
        fi
    else
        echo "no such file or directory `pwd`/lib/$1"
    fi
}

checkChange () {
    if git diff-index --quiet HEAD --; then
        echo "INFO:" "there no changes :)"
    else
        echo "ERROR:" "there are changes, please commit first" && exit 1
    fi
}

checkWhoami () {
    local knowami=1

    npm whoami > /dev/null 2>&1 || knowami=0

    if [ $knowami == 0 ]; then
        echo "You are not login..\n run npm login and login with tieba \n $TIEBAACCOUNT" && exit 1
    fi
}

checkChange
checkWhoami

if test `npm whoami` = tieba; then
    node webpack.publish.js $1
    echo "pack:$1 success"
    update $1
    rm -rf lib/$1/dist
    echo "remove lib/$1/dist"
else
    echo "You must login with tieba"
    echo "|---------------------------------------------"
    echo "|  Login Url:   $TIEBAACCOUNT                 "
    echo "|---------------------------------------------"
    login
    update $1
fi