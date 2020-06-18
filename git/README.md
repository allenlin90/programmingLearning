# [Learn-Git-in-30-days (Chinese)](https://github.com/doggy8088/Learn-Git-in-30-days)
Note: Day 1 to Day 3 are skipped as I have learnt the part. This may be added in the future. 

## Day 4 - Common commands 
### Stagin files
1. After using `git init` to start a repository, we can use `git add .` to add all the files including hidden ones in the repository. Note that dot "." is a wild-card that matches all the possible files. After adding, we can check with `git status` for the conditions and check if there's any file that hasn't been added. 
1. The added files are "**staged**" which means the files are ready to "**commit**". We can cancel it if by `git reset`. 
1. We can add part of the files or a single certain files with `git add directory/filename`, so the command will stage only the given directory or file. Other commands such as using asterisk. For example, `git add .*` means to add any directory or files that starts with a dot ".". This is useful when we are trying to add all the hidden folders (folders start with dot is hidden in Linux). 

### Commit the update/change 
1. After staging all the files, we can use `git commit -m "message"` to commit the update/change. If the repository just created, it will create and direct us to a [**master**] branch. 

### Check records and versions 
1. After commit, it means we have submit and create a new version in the branch. We then can use `git log` to check previous versions. If the versions are many, we can limit the output by `git log -10` which means to show only the 10 most recent versions. 

### Remove file/directory
1. We can use `rm` in git which will take 2 actions. 
    1. Remove the file from staging and from record. It will show that the file is removed if we check from the records in the future. 
    1. Removed the file in the repository. 

### Change filename
1. `mv` is also available in git. For example, we can change 'text.txt' to 'text1.txt' in the same directory by `git mv text.txt text1.txt`. 

### Resume files
1. We can use `git reset --hard` to resume all the files from the last commit in the branch. 
1. If we make something wrong with a file and wants the previous verion in the record before commit, we can use `git checkout master filename` which will turn the file '**filename**' back from the last commit. In the command 'master' is the [master] branch. Note that if we don't put the file name but only branch, this command will direct us to the given branch. 

## Day 5 - Understanding relationship between repository, working directory, objects, and index 