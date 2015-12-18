#!/usr/bin/env bash

REMOTE_PREFIX="ssh://g@gitlab.baidu.com:8022/tb-component"
ROOT=`pwd`


# 检查git remote 分支
checkRemote () {
    local output=$(git remote | grep -wc "^$1$" )
    echo $output
}

# 添加 subtree
splitRemove () {
    cd $ROOT
    git subtree split -P lib/$1 -b $1 2>/dev/null
}

# 添加 remote 地址
addRemote () {
    git remote add $1 $REMOTE_PREFIX/$1.git
}

updateSubtree () {
    cd $ROOT
    local directions=$(ls ./lib)

    for directory in ${directions[@]}; do
        if test `checkRemote $directory` = 1; then
            git subtree pull --prefix=lib/$directory $directory master 2>/dev/null
            echo "subtree:$directory pull success"
            git subtree push --prefix=lib/$directory $directory master 2>/dev/null
            echo "subtree:$directory push success"
            ./publish.sh $directory
       fi
    done
}
# 为现有文件夹添加 subtree和 remote 分支
addExist () {
    local directions=$(ls ./lib)

    for directory in ${directions[@]}; do
        if test `checkRemote $directory` = 0; then
            addRemote $directory
            echo "remote $directions added"
            splitRemove $directory
            echo "subtree:$directory splited"
       fi
    done
}

checkChange () {
    if git diff-index --quiet HEAD --; then
        echo "INFO:" "there no changes :)"
    else
        echo "ERROR:" "there are changes, please commit first" && exit 1
    fi
}

updateAll () {
    checkChange
    addExist
    updateSubtree
}

updateAll

