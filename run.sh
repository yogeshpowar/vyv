#!/bin/bash
if [ $# -ne 1 ]
then
    echo "Usage: "
    echo "./run.sh 0 - list"
    echo "./run.sh 1 - start"
    echo "./run.sh 2 - stop"
    echo "./run.sh 3 - reload"
    echo "./run.sh 4 - delete"
    exit
fi

if [ $1 -eq 0 ]
then
   sudo  pm2 list
fi

if [ $1 -eq 1 ]
then
    git rebase master
    sudo pm2 start bin/www --name "vyv"
fi

if [ $1 -eq 2 ]
then
    sudo pm2 stop vyv
fi

if [ $1 -eq 3 ]
then
    git rebase master
    sudo pm2 reload vyv
fi
