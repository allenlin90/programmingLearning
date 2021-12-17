Start Date: 2021-12-01

- [1. Version Management with Git - The Basics](#1-version-management-with-git---the-basics)
  - [1.1. Theory - How Git Works](#11-theory---how-git-works)
  - [1.2. Theory - Working Directory vs Repository](#12-theory---working-directory-vs-repository)
  - [1.3. Theory - Understanding Branches](#13-theory---understanding-branches)
  - [1.4. Understanding and Creating Branches](#14-understanding-and-creating-branches)
  - [1.5. Merging Branches - The Basics](#15-merging-branches---the-basics)
  - [1.6. Understanding the HEAD](#16-understanding-the-head)
  - [1.7. Detached HEAD](#17-detached-head)
  - [1.8. Branches and git switch (git 2.23)](#18-branches-and-git-switch-git-223)
  - [1.9. Deleting Data - An Overview](#19-deleting-data---an-overview)
  - [1.10. Deleting Working Directory Files](#110-deleting-working-directory-files)
  - [1.11. Undo Unstaged Changes](#111-undo-unstaged-changes)
  - [1.12. Undoing Staged Changes](#112-undoing-staged-changes)
  - [1.13. Deleting Commits with "git reset"](#113-deleting-commits-with-git-reset)
  - [1.14. Deleting Branches](#114-deleting-branches)
  - [1.15. Commiting "detached HEAD" changes](#115-commiting-detached-head-changes)
  - [1.16. Understanding .gitignore](#116-understanding-gitignore)
  - [1.17. Wrap up and Basic Commands Overview](#117-wrap-up-and-basic-commands-overview)

---

# 1. Version Management with Git - The Basics
## 1.1. Theory - How Git Works
1. When initiate a git to record code and files, it firstly creates a working directory.
2. When we want to "save" the code upon certain progerss, we can "commit" which is similar to "snap shot" the code in the working directory at the time git takes it.
3. Git focuses on the changes rather than storing the whole file entirely.
4. All the "commits" are store in a "branch" which is similar to a "folder".

## 1.2. Theory - Working Directory vs Repository
1. Under Git working directory, we have the repository which contain 2 areas, "staging area (Index File)" and "commits" (Objects Folder).
2. Staging area file is like drafts. When all the changes are staged, we can then "commit" to and snap shot the modified, staged files.

## 1.3. Theory - Understanding Branches
1. A working directory is like a tree which may have multiple "branches".
2. When developing new features, we can create a new branch which is totally separated from the "master" (main) branch.

## 1.4. Understanding and Creating Branches
1. To create a new branch, we can use `git branch [branch_name]`.
2. The command doesn't return anything while it creates a new branch with the given `[branch_name]` in the local repository.
3. After creating branches, we can use `git checkout [branch_name]` to switch between branches.
4. In addition, we can add `-b` flag to create and switch to the new branch with a single command. `git checkout -b [branch_name]`.

## 1.5. Merging Branches - The Basics
1. `git merge [branch_name]` is to merge the given branch to the current branch. 
2. For example, if the user is on `master` branch and merge `develop` branch. Git takes changes from `develop` and try to merge with the data on `master` branch.
3. Therefore, `master` branch where the user is at is the branch being updated.

## 1.6. Understanding the HEAD
1. When we checkout to a branch, Git will refer to the latest commit on the branch is the so called "HEAD".
2. Each branch has its own branch if they aren't merged. When change the branch by `git checkout [branch]` and print the logs `git log`, we may notice that the "HEAD" is on different commit of different branch.

## 1.7. Detached HEAD
1. We can use `git checkout [commit_hash]` to check a "snapshot" of the commit.
2. When we are on the commit, it's as the "detached HEAD".

## 1.8. Branches and git switch (git 2.23)
1. After git 2.23, we can use `git swtich` to change the branch.
2. With a `-c` flag, we can create and move to the new branch with a single command.

## 1.9. Deleting Data - An Overview
1. Deleting data from the followings
   1. Working Directory Files (already part of previous commit)
   2. Unstaged changes
   3. Staged Changes
   4. Latest Commit(s)
   5. Branches

## 1.10. Deleting Working Directory Files
1. We can use `git ls-files` to check what files are staged and in the current commit. This includes the files staged in the previous commits.
2. Simply deleting the file from the working directory doesn't remove the file from the commit.
3. We can use `git reset --hard` to reverse all the files back to the current commit.
4. After modifying the files in the working directory, we can use `git status` to check what files are modified. 
5. We can use either `git add` or `git rm` to stage the changes.
6. After staging the file, we can check the files again with `git ls-files` to know if the file has been removed from the directory.
7. We then can "commit" the change to confirm the file is removed from the repository.

## 1.11. Undo Unstaged Changes
1. To resume the changes back to the initial stage of the commit, we can use `git checkout [file_name]` on the modified file. The command is to check the file on the current branch and commit in the snapshot.
2. If we have modified multiple files, we can use `git checkout .` to resume all the files to the "HEAD" of the current branch. In addition, this command is equivalent to `git restore [filename]`.
3. If we don't want to track and stage a file in the working directory, besides using `.gitignore`, we can use `git clean -dn` (where `-d` stands for "delete" and `n` is to "list" the items) to check if the untracked file in the list. We then can use `git clean -df`. (where `-f` stands for "force").

## 1.12. Undoing Staged Changes
1. If we have staged files by using `git add`, we can't use `git checkout [filename]` to resume the file to its initial stage at the current commit.
2. We can firstly use `git reset [filename]` to unstage the file, then we can use `git checkout [filename]` to resume the file to its initial stage.
3. We can use `git restore --staged [filename]` as the equivalent.

## 1.13. Deleting Commits with "git reset"
1. After we staged and commit the current changes, we can use `git reset --soft HEAD~1` to resume to the commit that is 1 step before. 
2. We can change teh number after tild `~` which indicates the number of steps (commits) that we want to resume.
3. However, the files are still staged though we have "--soft" reset the commit which deletes the latest commit (HEAD).
4. We can make another commit and check with `git log` and notice that the other commit is removed from the log.
5. If we don't give `--soft` flag, the command will remove the modifeid files from the staging area as well.
6. The main difference between `git reset HEAD~1` and `git reset --soft HEAD~1` is that if the modified files are staged or not.
7. In addition, if we use `git reset --hard HEAD~1`, it will step back 1 commit earlier and resume to the initial stage of the commit. Note that all the modified files will be lost or added back.

## 1.14. Deleting Branches
1. To delete a branch, we can use `-d` or `-D` flag with `git branch`.
2. `-d` flag only removes the branch when it is merged with the other branch, while `-D` will simply remove the branch no matter what.
3. We can delete multiple branches in a single command as well. `git branch -D [branch_1] [branch_2]`.

## 1.15. Commiting "detached HEAD" changes
1. If we use detached-HEAD by switching to a commit in previous steps, we could revert to the previous stage and commit new changes.
2. However, the events affect directly to the main branches and the commits.
3. The commits in the detached HEAD will simply be lost if we don't take any action when we switch back to the main branches (such as master).
4. In this case, Git will remind and ask if we want to make a new branch based on the commit on the detached HEAD and provides a hashed ID.
5. We then can use the hashed ID and create a new branch with `git branch [new_branch] [hashed_id]`.
6. After creating the branch, we can switch back to the branch that we want to merge and use `git merge [branch_name]`.
7. On the other hand, we can create a new branch when making new commits on the detached HEAD and merge to the main branches.
8. The main difference for the approaches are the orders to execute the commands.
   1. Create branch "after" swtiching back to main branch
      1. `git checkout [hashed_id]`
      2. `git switch master`
      3. `git branch [new_branch_name] [hashed_id]`
      4. `git merge [new_branch_name]`
   2. Create branch "before" swtiching back to main branch
      1. `git checkout [hashed_id]`
      2. `git branch [new_branch_name]`
      3. `git switch master`
      4. `git merge [new_branch_name]`

## 1.16. Understanding .gitignore
1. If there's any file that is not requried to be stored in the repository but required to use in working directory, we can put the files in `.gitignore` in the root directory.
2. In `.gitignore` we can use dot `.` as the universal/catch-all character with certain files and suffix. For example, we can put `.env` or `*.env` for files storing environment variables which could be sensitive that should be stored only locally.
3. In addition, when using "catch-all" pattern, we can have certain files with exclamation mark `!` to have the file "included" and stored in the repository.
4. We can not only list files but folders in `.gitignore`. For example, we can put `[folder_to_ignore]/*` to prevent storing all the files under `folder_to_ignore` directory.

## 1.17. Wrap up and Basic Commands Overview
1. General commands
   1. `git --version` to check the version of Git install on the local machine
   2. `git init` to create an empty Git repository
   3. `git status` to check working directory and staging area status
   4. `git log` to display all commits of current branch
   5. `git ls-files` to list data in staging area
2. Commit creation and access
   1. `git add [filename]` and `git add .` to add single file or all working directory (WD) files to staging area
   2. `git commit -m "message"` to create new commit
   3. `git checkout commitid` to checkout commit (detached HEAD)
3. Branch creation and access
   1. `git branch [branchname]` or `git switch [branchname]` (for Git 2.23+) to create new branch
   2. `git checkout [branchname]` to go to the branch
   3. `git checkout -b [branchanme]` or `git switch -c [branchname]` to create and access new branch
   4. `git merge otherbranch` to bring other branch's changes to current branch
4. Deleting Data
   1. Files in working directory - Run command after file was deleted from working directory
      1. `git rm [filename]`
      2. `git add [filename]`
   2. Unstaged changes - Revert changes in tracked files
      1. `git checkout --` or `git checkout .`
      2. `git restore [filename]` or `git restore .`
      3. git clean -df to delete untracked files
   3. Staged changes - Remove files from staging area
      1. `git reset [filename]`
      2. `git checkout --filename`
      3. `git restore --staged filename` or `git restore --staged .`
   4. Latest commit(s) - Undo latest (~1) commit
      1. `git reset HEAD~1`
      2. `git reset --soft HEAD~1`
      3. `git reset --hard HEAD~1`
   5. Delete branch
      1. `git branch -D [branchname]`
