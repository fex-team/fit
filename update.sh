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
    git subtree split -P lib/$1 -b $1
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
            git subtree pull --prefix=lib/$directory $directory master  --squash
            git subtree push --prefix=lib/$directory $directory master
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
            splitRemove $directory
       fi
    done
}

updateAll () {
    addExist
    updateSubtree
}

updateAll

