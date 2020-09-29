# Install Laravel framework
1. Ensure the followings are installed in WSL
    1. PHP 7.2 
    1. Apache2
    1. Composer
1. Ensure composer system-wide bin is in the path, so Laravel can use it to run install
    1. macOS: `$HOME/.composer/vendor/bin`
    1. Windows: `%USERPROFILE%\AppData\Roaming\Composer\vendor\bin`
1. At the time of learning, Laravel 8.x is released, so we can use `composer create-project --prefer-dist laravel/laravel:^7.0 blog` to install Laravel 7.x. 
1. If composer can't download dependencies or JSON file correctly, we can run `composer config -g repo.packagist composer https://packagist.org` to change the global link of git for composer to download the master repo.
1. One way to install composer is to use `sudo apt-get install composer` directly.
1. On the other hand, we may refer to [this post](https://dev.to/tylerwel/setting-up-laravel-and-react-in-wsl-1l42) to install Composer and Laravel in WSL. 
    ```shell
    # update all package on the machine
    sudo apt update && sudo apt upgrade
    # install apache2, git, and nodejs
    sudo apt install apache2 curl openssl zip unzip git libonig-dev nodejs npm
    # install php7.2
    sudo apt install php7.2 libapache2-mod-php php-cli php-cgi php-mbstring php-zip php7.2-gd php-xml php7.2-sqlite
    # install composer
    # download install package
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    # check and verify the package if it's safe
    php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
    # install after verifying the package
    php composer-setup.php --install-dir=~/.composer/vendor/bin/ --filename=composer
    # remove the installation package
    php -r "unlink('composer-setup.php');"
    ```

# Generate artisan app key
1. `env` is the local file which is used to keep sensitive and secret key such as token or API key.
1. Download `env` from server management page.
1. Rename the file to `.env` (ensure it's in .gitignore) in the root directory.
1. Run the following script to generate app key. Make sure the path is correct.
    ```shell
    php artisan key:generate
    php artisan config:clear
    php artisan cache:clear
    ```
1. Run XAMPP to start local server.

# Install MySQL and phpMyAdmin on WSL
### Reference
1. Instruction from [FreeCodeCamp](https://www.freecodecamp.org/news/setup-a-php-development-environment-on-windows-subsystem-for-linux-wsl-9193ff28ae83/)
1. Instruction on [Medium](https://medium.com/@harshityadav95/installing-mysql-in-ubuntu-linux-windows-subsystem-for-linux-from-scratch-d5771a4a2496)
1. [Set up environment variable on Apache2 server](https://stackoverflow.com/questions/23915066/why-is-getenv-only-returning-a-variable-when-run-from-the-terminal-not-via-we/23915175)

### Set up default route of the server
1. Create the directory which will be the root directory of the server.
1. Set up alias for `sudo ln -s /mnt/c/Users/YOUR WINDOWS USERNAME/Documents/server /var/www/devroot` 
1. Use `-sfn` flag to modify the symbol link if it's set up `sudo ln -sfn /mnt/c/Users/YOUR WINDOWS USERNAME/Documents/server /var/www/devroot`.
1. Modify the route setting file `sudo nano /etc/apache2/sites-enabled/000-default.conf`
    ```
    <VirtualHost *:80>
    ServerName localhost
    ServerAdmin webmaster@localhost        
    DocumentRoot  /var/www/devroot      
    <Directory /var/www/>        
    Options Indexes FollowSymLinks        
    AllowOverride All        
    Require all granted      
    </Directory>        
    ErrorLog ${APACHE_LOG_DIR}/error.log        
    CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
    ```
1. We can also set up environment variable in `/etc/apache2/sites-enabled/000-default.conf` by using `SetEnv` keyword. We then can use `getenv()` function, which parse the variables in configure file as an associative array. We then can use `getenv('Variable_Key')` to retrieve the value.
    ```
    <VirtualHost *:80>
    SetEnv Variable_Key "Variable_Value"
    </VirtualHost>
    ```

**Note that we should restart the server every time we have new configuration**

### Remove and clear current MySQL in the system
1. Uninstall current MySQL in WSL
    1. `sudo apt-get remove --purge *mysql*`
    1. `sudo rm -rf /etc/mysql /var/lib/mysql`
    1. `sudo apt-get remove --purge *mariadb*`
    1. `sudo apt-get autoremove`
    1. `sudo apt-get autoclean`
1. After removing mysql, use `dpkg -l | grep mysql` to check any file or directory left in OS. If all the files are removed, nothing should be listed. However, we may find some PHP related packages that we can just leave those files.
1. Use `sudo apt-get remove [packageName]` to remove packages and apps installed.
1. Use `dpkg --list |grep "^rc" | cut -d " " -f 3 | xargs sudo dpkg --purge` to remove the packages marked with `rc` when checking `dpkg`.

### Solving issues for connection and authentication problems
1. Open `mysqld.cnd` with Nano editor in Linux `sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf`. 
1. Add `skip-grant-tables` on the last line of `[mysqld]` in `mysql.conf.d`, then save and exit Nano editor. 
1. Use `mysql -u root -p` to access MySQL. We can press enter directly withour giving any input when the prompt asks for password. 
1. Use `sudo service mysql start` to start MySQL database. After entering MySQL we can use commands to manipulate the database system. Note that all commands should end with semi-column `;`. We can setup new password with the following 3 commands.
    1. `use mysql;` to change to `mysql` database in MySQL
    1. `update user set authentication_string=password("[password]") where user="root";`
    1. `flush privileges;` 
1. Use `quit` to leave MySQL database and use `sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf` and comment out `skip-grant-tables` with a pound sign `#`. We can use `mysql -u root -p` to access MySQL with the new password if there's no error.

### Handling erros
1. If system returns `ERROR 1524 (HY000): Plugin 'auth_socket' is not loaded`, we can use `sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf` and turn off the pound sign on `skip-grant-tables` and reaccess to the database again. 
    1. `use mysql;`
    1. `select user,plugin from user;`
    1. Use `update user set authentication_string=password("[password]"),plugin='mysql_native_password' where user='root';` to change plugin with new password. 
1. Comment `skip-grant-tables` in `mysqld.cnf` again with Nano editor. 
1. Use `mysql -u root -p` with new password to access database.
1. If we can't access PHPMyAdmin at localhost after installation, we can use Nano editor to edit `/etc/apache2/apache2.conf` and add `Include /etc/phpmyadmin/apache.conf` on the last line in the file. 

### Note
1. There are 2 types of MySQL can be used on WSL, one is MariaDB, and the other is the version from Ubuntu repository. [https://unix.stackexchange.com/questions/561454/ubuntu-18-04-mysql-installation-error-error-dpkg-dependency-problems-prevent](https://unix.stackexchange.com/questions/561454/ubuntu-18-04-mysql-installation-error-error-dpkg-dependency-problems-prevent)
1. Modify 2 files `/etc/apt/sources.list` and remove the file in `/etc/apt/sources.list.d/` folder of repository from MariaDB.

### Reference
1. Handling errors of installing MySQL [https://blog.csdn.net/weixin_43530726/article/details/91303898](https://blog.csdn.net/weixin_43530726/article/details/91303898)
1. Can't find PHPMyAdmin at localhost [https://stackoverflow.com/questions/26891721/phpmyadmin-not-found-after-install-on-apache-ubuntu](https://stackoverflow.com/questions/26891721/phpmyadmin-not-found-after-install-on-apache-ubuntu)
1. How to set up PHPMyAdmin [https://www.how2shout.com/how-to/how-to-install-apache-mysql-php-phpmyadmin-on-windows-10-wsl.html](https://www.how2shout.com/how-to/how-to-install-apache-mysql-php-phpmyadmin-on-windows-10-wsl.html)