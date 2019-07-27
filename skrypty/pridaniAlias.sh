#!/bin/bash
#pridani to znaczy przyznac
git config --global alias.ch checkout
echo "checkout as ch"
git config --global alias.br branch
echo "branch as br"
git config --global alias.co commit
echo "commit as commit"
git config --global alias.st status
echo "status as st"
git config --global alias.last 'log -1 HEAD'
echo "log -1 HEAD as last"
git config --global alias.r-- 'reset --'
echo "reset -- as r--"
git config --global alias.ch- 'checkout --'
echo "config checkout -- as ch-"
git config --global alias.fp 'fetch -p'
echo "fetch -p as fp"
git config --global alias.rbom 'rebase origin/master'
echo "rebase origin/master as rbom"
git config --global alias.coa 'commit --amend'
echo "commit --amend as coa"
git config --global alias.rbc 'rebase --continue'
echo "rebase --continue as rbc"
git config --global alias.rba 'rebase --abort'
echo "rebase --abort as rba"
git config --global alias.pforce 'push --force-with-lease origin'
echo "push --force-with-lease origin"
git config --global alias.brD 'branch -D'
echo "branch -D as brD"
git config --global alias.aA 'add -A'
echo "add -A as aA"
git config --global alias.lgs "log --stat"
echo "log --stat as lgs"
git config --global alias.lgp "log -p"
echo "log -p as lgp"
git config --global alias.lasts "log --stat -1"
echo "log --stat -1 as lasts"
git config --global alias.lastp "log -p -1"
echo "log -p -1 as lastp"
alias gitb="git branch | grep \* | cut -d ' ' -f2"
echo "gitb show actually branch"


