#!/usr/bin/env bash

login() {
   npm login
}

log() {
  printf "  \033[36m%10s\033[0m : \033[90m%s\033[0m\n" $1 $2
}

update() {
    cd ./lib/$1 && npm version patch && npm publish && git subtree push --prefix=lib/$1 $1 master
}

#if [npm whoami = tieba]; then
#    update $1
#else
#    log "You must login with tieba!, please login"
#    login
#fi

update