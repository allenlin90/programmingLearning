Start Learning: 2020/11/24 
End Learning: 

1. [Creating Databases and Tables](#Creating-Databases-and-Tables)
    1. [Dropping Databases and Tables](#Dropping-Databases)
    1. [Using Databases](#Using-Databases)
    1. [The Basic Datatypes](#The-Basic-Datatypes)
    1. [Creating Your Own Tables](#Creating-Your-Own-Tables)
    1. [Dropping Tables](#Dropping-Tables)
    1. [Inserting Data](#Inserting-Data)

# Creating Databases and Tables
## Creating Databases
1. We can use Groom IDE to set up mysql server and databases in it. We can follow the instructions at [https://gist.github.com/nax3t/2773378c4d1bada8d66d12f4d5210248](https://gist.github.com/nax3t/2773378c4d1bada8d66d12f4d5210248). Note that though I have installed mysql server locally for PHP and Laravel development, it can't be accessed locally after starting `sudo service mysql start`, as it will be deined to access. Further investigation is requried. 
1. After installing we can use `mysql-ctl cli` to start mysql server in the IDE. Note that SQL commands end with semi-column `;`.
    1. In CLI, we can use `show databases` to show all the databases in the MySQL server. 
    1. Use `CREATE DATABASE <database_name>;` to create a new database. The convention for naming is to use underscore `_` as spaces in between. Though we can use whitesapce or camelCase, we can stick on single naming style to avoid confusion. 

## Dropping Databases
1. It's simple that we can sue `DROP DATABSE <database_name>;` to remove a database from DBMS. 

## Using Databases
1. To use an existing database, we can use `USE <database_name>;` to switch to use the database. 
1. We can use `SELECT database();` to check the current using database. 
1. However, if we drop a using database, we can find that we are using `NULL` database rather than any database in the system. 

## Introduction to Tables
1. A database is made of single or multiple tables. This similar to regular 2-dimensional tables in Excel. 
1. Columns are headers, while the Rows are actual data. 

## The Basic Datatypes
1. In SQL databases, we set up schema to ensure the data in the same column has the same datatype. 
1. Numeric Types
    1. INT
    1. SMALLINT
    1. TINYINT
    1. MEDIUMINT
    1. BIGINT
    1. DECIMAL
    1. NUMERIC
    1. FLOAT
    1. DOUBLE 
    1. BIT
1. String Types
    1. CHAR
    1. VARCHAR
    1. BINARY
    1. VARBINARY
    1. BLOB
    1. TINYBLOB
    1. MEDIUMBLOB
    1. LONGBLOB
    1. TEXT
    1. TINYTEXT
    1. MEDIUMTEXT
    1. LONGTEXT
    1. ENUM
1. Date Types
    1. DATE
    1. DATETIME
    1. TIMESTAMP
    1. TIME
    1. YEAR
1. Though there are many types of data, the most common we can use is `INT` and `VARCHAR`. 
    1. `INT` is a whole number.
    1. `VARCHAR` is a variable-length string, unlike `CHAR` which has fixed length for each data. Besides, when using `VARCAHR`, we should specify the maximum length. 

## Creating Your Own Tables
1. We can use `CREATE TABLE <tablename> (column_name datatype);`
    ```sql
    CREATE TABLE tablename 
        (
            name VARCHAR(100),
            age INT
        );
    ```
1. After creating tables, we can use `SHOW TABLES` to check tables in the database. However, this only shows the list of existing tables in the database. 
1. We can use `SHOW COLUMNS FROM <table_name>;` to check the headers (field) and datatypes. `DESC <table_name>;` is the shorthand for the same purpose.

## Dropping Tables
1. To delete a table, we use `DROP TABLE <table_name>`, which is a similar command to drop (remove) a database.



# Inserting Data
## Inserting Data