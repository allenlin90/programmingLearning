Start Date: 2021-12-01

- [1. Version Management with Git - The Basics](#1-version-management-with-git---the-basics)
  - [1.1. Theory - How Git Works](#11-theory---how-git-works)
  - [1.2. Theory - Working Directory vs Repository](#12-theory---working-directory-vs-repository)
  - [1.3. Theory - Understanding Branches](#13-theory---understanding-branches)
  - [1.4. Understanding and Creating Branches](#14-understanding-and-creating-branches)
  - [1.5. Merging Branches - The Basics](#15-merging-branches---the-basics)
  - [Understanding the HEAD](#understanding-the-head)

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

## Understanding the HEAD
1. 
