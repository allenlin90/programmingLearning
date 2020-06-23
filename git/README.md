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
### Understanding repository 
1. We can use `git init` to initiate and start a repository in a directory. At the directory, GIT will create a `.git` folder which is the repository that keeps all the logs and records of the project we are going to develop. In the repository, we can create "**branches**" 
1. "**objects**" are immutable, which usually have only additional data rather than deleteing or changing the contents. 
1. "**index**" is a mutable file that records the data and contetns which are going to be submitted in the next commit. 

### Objects 
1. "objects" are special files that named by SHA1 hashing. When using git version control, all folders/directories and files will be separated into "directory" (tree objects) and "contentes" (blob objects). These objects can't stand alone without each other and are kept in "objects" folder under `.git` directory, as "object storage". 
    1. "tree objects" are used to store what files and related "blob" files are kept in certain folder (directory). 
    1. "blob objects" use the original contents of a file and name it with a "hash id" which is created by SHA1 hashing. 

### Index 
1. "**index**" is a temporary storage file which is usually named "index" under `.git` folder. This file is to record what files are "**staged**" and going to be submitted in the next "**commit**". This "**index**" is as the medium between "**object storage**" and "**working directory**". There are several commands to work with the index file. 
    1. `git add` 
    1. `git mv` 
    1. `git rm` 
    1. `git status`
    1. `git commit`
    1. `git ls-files`
1. Note that "tree object" is similar to directory. Therefore, "working directory" sometimes is written as "working tree". 



## Day 6 - Investigating Git file and object structure 
### Object storage 
1. All files and directory will be stored in "objects" directory under `.git`. All objects are named with a hash value which is created by SHA1 hashing according to the contents of the file. Git will use the first 2 letters of the hash value as the name for directory and the rest as the name for the file. There are 4 types of objects in "object storage". 
    1. blob: the content of a file 
    1. tree: the directory info and records. We can understand this as a snapshot of a directory.
    1. commit: the record that which "tree objects" are in this "commit", timestamp, and activity logs.
    1. tag: a container that keeps metadata related to "commit object". 
1. GIT will create "blob" files for the submitted files in every commit. Therefore, we can resume files and their contents from different commit or branch. 
1. All objects will be compress by "**zlib**" algorithm and uses "**delta compression**" algorithm to increase efficiency and save storage space. The algorithm will find similar blobs and check the difference between them and keep the difference in a "packfile", which is located at `.git` > objects > pack. 
1. To check the contents in a blob file, we can use "**zlib**" to uncompress the file.

<img src="gitObjects.png">



## Day 7 - Investigating Git data structure - index structure 
`git status`, `git add`, `git commit`, `git status`, `git rm`, `git mv`
1. In short, index is used to record "what files will be submitted to the next commit". 
1. "Index" has several alias and similar names, such as the followings. Besides, `git diff --cached` and `git diff --staged` are the same. 
    1. "Cache" 
    1. "Directory cache" 
    1. "Current directory cache" 
    1. "Staging area" is the space that waiting to be committed. 
    1. "Staged files" are the files that waiting to be committed. 

    <img src="gitFileStatusLifecycle.png">

    1. "untracked" files are the files that are "not tracked" and not added to git repository. 
    1. "unmodified" files are added at the first time in the repository or file content is the same as the "HEAD" content in the repository (which means the file is not changed in any way).
    1. "modified" files are edited or changed and its "HEAD" content is not the same as it in the repository. 
    1. "staged" files are files waited to be committed. These files will be stored in the repository in the next git commit. 
1. We can use `git status` to check the changes and difference between indexed and latest files. There are 3 main categories. 
    1. "Changes to be committed", the files in this category are indexed, the file is the latest version, and will be committed in the next `git commit`. 
    1. "Changes not staged for commit", the files are changed but not added to be committed. Therefore, the latest version of the file will not be committed in the next `git commit`. 
    1. "Untracked files" means that the files are not indexed nor added to be tracked. Therefore, the files won't be stored in the git repository. 
1. `git add` is to add the changes of current working directory to the indexed files. 
1. `git rm filename` can remove the file **BOTH** in the "working directory" and the "git repository". Note that we can use `git rm --cached filename` to remove the file from the "git repository" but keep the file in the "working directory". 
1. `git mv` is simialr to `mv` in terminal command to either move or change the name of a file. 
1. `git commit` will check the difference between indexed and added files and submit the difference as a commit object to store in the repository. 



## Day 8 - Branch basics and usage 
1. 