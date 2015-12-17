#!/usr/bin/env bash

REMOTE_PREFIX="ssh://g@gitlab.baidu.com:8022/tb-component"

# 检查git remote 分支
checkRemote () {
    local output=$(git remote | grep -wc "^$1$" )
    echo $output
}

# 添加 subtree
splitRemove () {
    git subtree split --prefix=lib/$1 $1 master
}

# 添加 remote 地址
addRemote () {
    git remote add $1 $REMOTE_PREFIX/$1.git
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

}


#if test `checkRemote $1` = 0; then
#    addRemote $1
#else
#    echo "success"
#fi

updateAll

#checkRemote $1

