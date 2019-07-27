#!/bin/bash
echo "fetch -p"
git fetch -p
echo "rebase origin/master"
git rebase origin/master
