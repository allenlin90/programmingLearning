# Linux OS 
from [Python-100-Days](https://github.com/jackfrued/Python-100-Days/blob/master/Day31-35/31-35.%E7%8E%A9%E8%BD%ACLinux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.md)

**Basic Linux commands** 
1. Regular Linux command - [_**commandName**_] [_**argument**_] [_**commandObject**_] 
1. Most of the Linux systems use **BASH** (Bourne Again Shell) as its default Shell. 
1. We can use `whereis` in bash to search the path of a **_filename_**. 
1. `clear` and (Ctrl + l) can clear all the showing info. in bash command line. 
1. `uname` to check system name (such as Linux) and `hostname` to check the hardware. 
1. `cal` to return the date in current monthly, and `date` for current date, time, and timezone. 
1. We can use `reboot` and `shutdown` to restart the OS or turn the equipment off. By using `-h` flag, we can set a time to turn `shutdown` the equipment automatically at the setup time. 
1. `exit` and `logout` to leave BASH or change user to the OS.
1. `history` to check all the commands executed since the OS starts. 

**Useful commands** 
1. `mkdir` to create an empty folder and `rmdir` to delete an empty folder. 
1. `touch` to create a file 
    1. `mtime` to change the time of editing contents. `touch -m filename`
    1. `ctime` to change the time of updating authorization. `touch -c filename`
    1. `atime` to change the time of last visit. `touch -a filename` 
1. `rm` to delete (remove) a file. Here are 3 essential parameters (flags) which we can use when delete a file. 
    1. `-i` will ask everytime a file is going to be deleted. 
    1. `-r` will delete a directory and all child file and directory in it. 
    1. `-f` will hard (force) detele the file without a promt. 
1. `cd` to change current directory to the given path, and `pwd` to check the current directory. 
1. `ls` is to check the list of the file(s) at the current directory. 
    1. `-l` will show the list of files with properties of each. 
    1. `-a` will show all files, including hidden files (files that start with dot "."). 
    1. `-R` will show the directory and its child directory recursively. 
    1. `-d` show only the directly. (Note, don't get what is this for.)
    1. `-S` order the list according to its size.
    1. `-t` order the list according to created time of the file. 
1. `cat`, `tac`, `head`, `tail`, `more`, `less`, `rev`, `od` filename to check content of the file. 
1. `cp` to copy a file to a certain path or duplicate the file with another name. `cp filename path/nameForDuplicate` 
1. `mv` to move a file to a certain path or change the file name. `mv filename path/newName`. 
1. `find` can check if a file is at the current directory (note that the file should have complete suffix). We can use `find -name "*.txt"` to search for all text file in the directory. 
1. `grep` can search the content of a file with given content. `grep content filename`. If we use `-n` flag, it will return the no. of line in the file. 
1. `gzip` and `gunzip` are used to compress a file with ".gz" as suffix and uncompress a file that is with ".gz" as suffix. `xz` is a single command that can compress/uncompress a file with another algorithm other than "gzip's". 
1. `xargs` can be used to combine different commands and actions. For example, we can use `find . -type f -name "*.html" | xargs rm -f ` to search all html files and delete them. 
1. `alias` is to set a name for a command file, directory, or path, as shortcut, and `unalias` is to delete the set alias. Note that the variable is followed with equal sign and the "action" without any space. The alias must be an action rather than a value. `alias pldir='cd /mnt/c/Users/****/Desktop/programmingLearning/'` 

**User accounts** 
1. `useradd` to create a user account, and `userdel` to delete a user account. 
1. `groupadd` to create a group of user, and `groupdel` to delete a group of users. 
1. `passwd` to change and update password. Note that if there is no user account after `passwd` command, it ask to change the passwrod of the current user. 
1. `-l` is to lock a user and `-u` to unlock a user. 
1. `-d` to clear password of a user. 
1. `-e` can force the password of a user to be expired, which means the user must change his/her password when login next time. 
1. `-i` to lock up a user after the user's password is expired. For example, with the commands above, we can set a user "hellokitty" must change her password. This will notice the user 15 days before the password expires and lock the user 15 days after the password expired. `chage -M 100 -W 15 -I 15 hellokitty`. 
1. `su` command is to switch the current user at the terminal `su username`. 

**VIM editor** 
1. `vim` in command line can invoke VIM editor. In the editor, there are 3 modes, "Normal mode" which to operate most of the commands, "Insert mode" (to edit content), and "Command mode" that can manipute commands that are not available in normal mode. 
1. To quit the edit, type `: q` if there's everything is saved or `:q!` to exit the editor without changing anything (nothing is saved). 
1. The editor is powerful that it can open and compare 2 documents at the same time and record macro as well. 
Check more information at [VIM](https://github.com/jackfrued/Python-100-Days/blob/master/Day31-35/31-35.%E7%8E%A9%E8%BD%ACLinux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.md#%E7%BC%96%E8%BE%91%E5%99%A8---vim). 

# Security
1. Environment variabls `ENV` and `alias` can be set in `~/.bashrc` file. We can use keyword `alias` to set up alias as shorthand or `export` for environment variabls.