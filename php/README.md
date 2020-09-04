# Install MySQL and database on WSL
### Reference
1. Instruction from [FreeCodeCamp](https://www.freecodecamp.org/news/setup-a-php-development-environment-on-windows-subsystem-for-linux-wsl-9193ff28ae83/)
1. Instruction on [Medium](https://medium.com/@harshityadav95/installing-mysql-in-ubuntu-linux-windows-subsystem-for-linux-from-scratch-d5771a4a2496)

### Commands
1. Uninstall current MySQL in WSL
    1. `sudo apt-get remove --purge *mysql*`
    1. `sudo rm -rf /etc/mysql /var/lib/mysql`
    1. `sudo apt-get remove --purge *mariadb*`
    1. `sudo apt-get autoremove`
    1. `sudo apt-get autoclean`
1. After removing mysql, use `dpkg -l | grep mysql` to check any file or directory left in OS. If all the files are removed, nothing should be listed. However, we may find some PHP related packages that we can just leave those files.
1. Use `sudo apt-get remove [packageName]` to remove packages and apps installed.
1. Use `dpkg --list |grep "^rc" | cut -d " " -f 3 | xargs sudo dpkg --purge` to remove the packages marked with `rc` when checking `dpkg`.

### Note
1. There are 2 types of MySQL can be used on WSL, one is MariaDB, and the other is the version from Ubuntu repository. [https://unix.stackexchange.com/questions/561454/ubuntu-18-04-mysql-installation-error-error-dpkg-dependency-problems-prevent](https://unix.stackexchange.com/questions/561454/ubuntu-18-04-mysql-installation-error-error-dpkg-dependency-problems-prevent)
1. Modify 2 files `/etc/apt/sources.list` and remove the file in `/etc/apt/sources.list.d/` folder of repository from MariaDB.