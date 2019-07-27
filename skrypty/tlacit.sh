#!/bin/bash
echo "fetch -p"
git fetch -p
echo "rebase origin/master"
git rebase origin/master
echo "push -u origin gitb"
git push -u origin gitb
