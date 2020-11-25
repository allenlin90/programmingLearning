Start Learning: 2020/11/24 
End Learning: 

1. [Creating Databases and Tables](#Creating-Databases-and-Tables)
    1. [Dropping Databases and Tables](#Dropping-Databases)
    1. [Using Databases](#Using-Databases)
    1. [The Basic Datatypes](#The-Basic-Datatypes)
    1. [Creating Your Own Tables](#Creating-Your-Own-Tables)
    1. [Dropping Tables](#Dropping-Tables)
1. [Inserting Data](#Inserting-Data)
    1. [MySQL Warning](#MySQL-Warning)
    1. [NULL and NOT_NULL](#null-and-not_null)
    1. [Setting Default Values](#Setting-Default-Values)
    1. [A Primer of Primary Key](#A-Primer-of-Primary-Key)
1. [CRUD Commands](#CRUD-commands)
    1. [Introduction to SELECT](#Introduction-to-SELECT)
    1. [Introduction to WHERE](#Introduction-to-WHERE)
    1. [Introduction to Aliases](#Introduction-to-Aliases)

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
1. Starting with `INSERT INTO`, we can give `table_name` in the database with "headers" (columns) then `VALUES` for the data that we want to insert. Note that the order of the data matters and should be alinged with the order of given columns.
    ```sql
    INSERT INTO table_name (column, column) VALUES ('VARCHAR', INT);
    ```
1. To check the data in a table, we use `SELECT <columns> FROM <table_name>;`.
    ```sql 
    SELECT * FROM table_name;
    ```
1. We can use comma `,` to separate multiple insert sets.
    ```sql
    INSERT INTO table_name (VARCHAR, INT)
    VALUES ('String', 11)
          ,('String', 5);
    ```

## MySQL Warning
1. If we give incorrect inputs such as exceeding the maximum length of `VARCHAR` or give text type data to a `INT` column, MySQL will return a warning back to the user for the issue. Note that if we have operate any command right after receiving the warning, the message will be removed and can't be checked again. 
1. In some cases, we can set up the default value for a column if the input is missing or incorrect. For exmaple, if a column takes `INT` datatype but receive a text string, it may give `0` as the default value to the input. 

## NULL and NOT_NULL
1. In SQL `NULL` simply means "the value is not known".
1. For example, in the inital schema setting for a table, we can configure that if the table accepts `NULL` as input. 
    ```sql
    CREATE TABLE table_name 
    (
        column1 VARCHAR(20) NOT NULL,
        column2 INT NOT NULL
    );
    ```
1. In this case, if we don't give any value to a column that can't be `NULL` through `INSERT INTO`, the data will be either empty string or 0 according to the default setting and the datatype. 
    ```sql
    INSERT INTO table_name (column1) VALUES ('test');

    /* This will return a warning as the default value of the table can't be default */
    ```

## Setting Default Values
1. We can use `NOT NULL` to specify that the column can't take `NULL` as input when creating the table. Note that 
    ```sql
    CREATE TABLE table_name
    (
        column1 VARCHAR(20) DEFAULT 'no name' NOT NULL,
        column2 INT NOT NULL DEFAULT 10
    );
    ```

## A Primer of Primary Key
1. "**Primary Keys**" are unique identifier for the data in a table. This can be use to differentiate the inputs if the data is exactly the same. For example, we have a table with `name` and `age` column that 2 inputs can have exactly the same name and age. With this "Primary Key", we can easily know the inputs are different and not duplicated. 
1. With `AUTO_INCREMENT`, we can avoid giving input for the column will the system will generate it automatically. 
    ```sql
    CREATE TABLE table_name 
    (
        cat_id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(20),
        age INT,
        PRIMARY KEY (cat_id)
    );
    ```
1. We can indicate a column as primary key when creating it.
    ```sql
    CREATE TABLE table_name
    (
        id NOT NULL AUTO_INCREMENT PRIMARY KEY
    );
    ```



# CRUD Commands
1. CRUD stands for "Create", "Read", "Update", and "Delete" (or Destroy). 

## Introduction to SELECT
1. In the previous section, we use `SELECT * FROM table_name` to read the data from a table. The asterisk `*` actually stands for the wild-card as to retrieve all the columns from the table.
    ```sql
    CREATE TABLE table_name (id INT PRIMARY KEY NOT NULL, name VARCHAR(50));

    SELECT * FROM table_name;

    SELECT name FROM table_name;
    ```

## Introduction to WHERE
1. When selecting data from a table, we can use `WHERE` to specify the condition of data to be read. 
1. We can also use the data in the column itself for the conditions. 
    ```sql
    SELECT * FROM table_name WHERE column >= 'condition';

    SELECT * FROM table_name WHERE column1 = column2;
    ```

## Aliases