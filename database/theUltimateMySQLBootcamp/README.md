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
    1. [The UPDATE command](#The-UPDATE-command)
    1. [Introduction to DELETE](#Introduction-to-DELETE)
1. [String Functions](#String-Functions)
    1. [Running SQL Files](#Running-SQL-Files)
    1. [Working with CONCAT](#Working-with-CONCAT)
    1. [Introducing REPLACE](#Introducing-REPLACE)
    1. [Using Reverse](#Using-Reverse)
    1. [Changing Case with UPPER and LOWER](#Changing-Case-with-UPPER-and-LOWER)
1. [Refining Selections](#Refining-Selections)
    1. [Seed Data](#Seed-Data)
    1. [Using DISTINCT](#Using-DISTINCT)
    1. [Sorting Data with ORDER BY](#Sorting-Data-with-ORDER-BY)
    1. [Using LIMIT](#Using-LIMIT)
    1. [Better Searches with LIKE](#Better-Searches-with-LIKE)
    1. [Selection Challenges](#Selection-Challenges)

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
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
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

## Introduction to Aliases
1. We can specify how the header names are shown. The main syntax is to use `AS` to give the name of a specify column to show.
    ```sql
    SELECT column_id AS id, column FROM table_name;
    ```

## The UPDATE command
1. Use `UPDATE` and `SET` keywords to edit the data in the table. 
    ```sql
    UPDATE table_name SET column1 = 'data1' WHERE column2 = 'data2';
    ```
1. To prevent accidents, always check the data before editing it. We can use `SELECT` to read and check if the data is the target one, then use `UPDATE` and `SET` to update it. 

## Introduction to DELETE
1. To delete data from database, we can use `DELETE FROM` to remove data. Note that if we don't use `WHERE` to specify the data to delete, all the data in the table will be removed. 
    ```sql
    DELETE FROM table_name WHERE column = 'data';

    DELETE FROM table_name;
    /* delete everything from the table */    
    ```



# String Functions
## Running SQL Files
1. In the termianl, we can mvoe the directory where we keep the SQL file, then start MySQL server at the directory. In the command prompt, we can use `source file_name.sql` to run SQL code. Therefore, we can run the preset script without worrying typo or syntax errors. 

## Working with CONCAT
1. `CONCAT` is to combine Data for cleaner output. The syntax is to use `CONCAT(col1, col2, col3...)`. Besides, this should be used with `SELECT FROM` which is to indicate the table which we get data from. 
1. We can use `CONCAT_WS` in case that we want separator in between all columns. In this case, "separator" should be put as the first argument. 
    ```sql
    SELECT CONCAT (col1, 'separator', col2) from table_name;

    SELECT col1 AS header1, col2 AS header2, CONCAT(col1, ' ', col2) AS full FROM table_name;
    /* This returns 3 columns */

    SELECT CONCAT_WS('-', col1, col2) from table_name;
    /* This will give separator in between all columns */
    ```

## Introducing SUBSTRING
1. To take part of a string value, we can use `SUBSTRING()` which takes the string value as the first argument which is followed with starting position and the ending position. Note that position of strings in SQL starts from 1 rather than 0. 
1. If we give only the 2nd argument, which is the starting position, it returns the string since the given starting position to the end.
1. The position index can negative that it starts backward from `-1`. 
1. `SUBSTR()` is a shorthand for `SUBSTRING()`. Both of these functions work exactly the same. 
    ```sql
    SELECT SUBSTRING('text_string', starting_position, ending_position);
    /* Note that position of SQL string starts from 1, not zero */

    SELECT SUBSTRING('text_string', 1, 4);
    /* text */

    SELECT SUBSTRING('text_string', 6);
    /* string */

    SELECT SUBSTRING('text_string', -3);
    /* ing */

    SELECT SUBSTR(col1, 1, 6) AS new_header FROM table_name;
    ```
1. We can combine multiple functions together to create a new table. For example, we use `SUBSTR` to get short title from the table, use `CONCAT` to add triple dots `...` after each substring, and use `AS` to change header name of the new column. 
    ```sql
    SELECT 
        CONCAT
        (
            SUBSTRING(title, 1, 10), 
            '...'
        ) AS 'short title' 
    FROM books;
    ```

## Introducing REPLACE
1. With `REPLACE`, we can replace the given character in the string value. Note that the function is case-sensitive.
1. Note that as most of the other string functions, `REPLACE()` only affects the query output and doesn't affect the actual data in the database.
    ```sql
    SELECT REPLACE('Hello World', 'l', '7');
    /* He77o World*/
    
    SELECT REPLACE('HellO World', 'o', '7');
    /* Hello W7rld*/

    SELECT 
        SUBSTRING(REPLACE(col, 'e', '3'),1,10)
    FROM books;
    /* return table that has only the first 10 characters of replaced data */
    ```

## Using Reverse
1. `REVERSE()` function is very straight forward that it reverse the sequence of the given string value. Besides, we can use it to use with other functions for different purposes. 
    ```sql
    SELECT REVERSE('string_text');
    /* txet_gnirts */

    SELECT CONCAT('woof', REVERSE('woof'));
    /* wooffoow */
    ```

## Working with CHAR LENGTH
1. `CHAR_LENGTH()` function is used to count the number of characters of a string value. 
    ```sql
    SELECT col1, CHAR_LENGTH(col1) AS header from table_name;

    SELECT CONCAT(col1, ' is ', CHAR_LENGTH(col1), ' characters long') FROM table_name;
    /* create a new table of results with text indication */
    ```

## Changing Case with UPPER and LOWER
1. `UPPER()` and `LOWER()` are functions to change case of string. 
    ```sql
    SELECT UPPER('hello world');
    /* HELLO WORLD */

    SELECT LOWER('HELLO WORLD');
    /* hello world */ 
    ```

## String Function Challenge
```sql
CREATE TABLE books 
	(
		book_id INT NOT NULL AUTO_INCREMENT,
		title VARCHAR(100),
		author_fname VARCHAR(100),
		author_lname VARCHAR(100),
		released_year INT,
		stock_quantity INT,
		pages INT,
		PRIMARY KEY(book_id)
	);

INSERT INTO books (title, author_fname, author_lname, released_year, stock_quantity, pages)
VALUES
('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),
("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181),
('Oblivion: Stories', 'David', 'Foster Wallace', 2004, 172, 329),
('Consider the Lobster', 'David', 'Foster Wallace', 2005, 92, 343);

/* Solutions for the challenge */
SELECT UPPER(REVERSE('Why does my cat look at me with such hatred'));

SELECT REPLACE(
    CONCAT('I', ' ', 'like', ' ', 'cats'),
    ' ',
    '_'
) AS 'replacement';

SELECT REPLACE(title, ' ', '->') FROM books;

SELECT author_lname AS forwards, REVERSE(author_lname) AS backwards FROM books;

SELECT UPPER(CONCAT(author_fname, ' ', author_lname)) AS 'full name in caps' FROM books;

SELECT CONCAT(title, ' was released in ', released_year) AS blurb FROM books;

SELECT title, CHAR_LENGTH(title) AS 'character count' FROM books;

SELECT CONCAT(SUBSTRING(title, 1, 10), '...') AS 'short title', 
    CONCAT(author_lname, ',', author_fname) AS author, 
    CONCAT(stock_quantity, ' in stock') AS quantity 
FROM books;
```



# Refining Selections
## Seed Data
1. We put more data to the `book_shop` database. 
    ```sql
    CREATE DATABASE book_shop;

    CREATE TABLE books 
	(
		book_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		title VARCHAR(100),
		author_fname VARCHAR(100),
		author_lname VARCHAR(100),
		released_year INT,
		stock_quantity INT,
		pages INT,		
	);

    INSERT INTO books (title, author_fname, author_lname, released_year, stock_quantity, pages)
    VALUES
    ('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
    ('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
    ('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
    ('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
    ('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
    ('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
    ('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
    ('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
    ('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
    ('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
    ('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),
    ("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
    ('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
    ('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181),
    ('Oblivion: Stories', 'David', 'Foster Wallace', 2004, 172, 329),
    ('Consider the Lobster', 'David', 'Foster Wallace', 2005, 92, 343);

    INSERT INTO books
        (title, author_fname, author_lname, released_year, stock_quantity, pages)
        VALUES ('10% Happier', 'Dan', 'Harris', 2014, 29, 256), 
            ('fake_book', 'Freida', 'Harris', 2001, 287, 428),
            ('Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367);
    ```

## Using DISTINCT
1. `DISTINCT` can provide us unique values and avoid duplicates. Note that `DISTINCT` should follow right after `SELECT` keyword. 
1. If we use DISTINCT to return multiple columns, MySQL will return only the rows that has unique data. Besides, we can use it with 
    ```sql
    SELECT DISTINCT col from table_name;
    ```

## Sorting Data with ORDER BY
1. The default ordering sequence for the result is ascending. We can use `DESC` for "**descending**" which can order the result reversely.
1. After `ORDER BY`, we can use number for the selected columns to order the result. Note that the position of columns starts at 1. 
1. We can give multiple columns as filter to order the result. The given columns will be in different tiers. The 1st one will be the very first filter to order the results. 
    ```sql
    SELECT col1 FROM table_name ORDER BY col1;

    SELECT col1 FROM table_name ORDER BY col1 DESC;
    /* list results in descending order */ 

    SELECT col1, col2 FROM table_name ORDER BY col3;
    /* result will be ordred by col3 though it's not selected */

    SELECT col1, col2, col3 FROM table_name ORDER BY 2;
    /* result will be ordered by col2 ascending */

    SELECT col1, col2 FROM table_name ORDER BY col1, col2;
    /* result will be ordered by col1 and then col2 */
    ```

## Using LIMIT
1. `LIMIT` allow us the limit the number of results returned. This function comes the last in the statement. 
1. `LIMIT` can take another arugment which is the starting point of the result. For example, if we have 10 results in total, we can use `LIMIT 3, 6` to get from the 4rd result to the 9th which are 6 results in total. Note that the starting position is `0` rather than `1`. 
1. There's no better way to select from a certain position till the last row in the database. We can only do it by hitting the limitation of a table in MySQL. We may give a random huge number which should be greater than the number of entities in the table. 
    ```sql
    SELECT col1, col2 FROM table_name ORDER BY col1 LIMIT 5;
    /* return only 5 results ordred by col1 */

    SELECT * FROM table_name LIMIT 1, 3;
    /* return 3 results since the 2nd entity */

    SELECT col1 FROM table_name LIMIT 1, 1;
    /* return only the 2nd entity from the table */

    SELECT * FROM table_name LIMIT 1, 999999999999999999999999999999999999;
    /* return the 2nd entity till the last in the table */ 
    ```

## Better Searches with LIKE
1. `LIKE` can be used for better searching to find similar entities in the table. 
1. `%` is similar to regular expression that is a wildcard to be used as placeholder in searching. It basically means that there has or doesn't have the given value in between. Therefore, if the given value is at the start or end position, it will match the search with `%`. 
1. Note that `LIKE` search is not case-sensitive.
1. Besides percentage, we can use underscores `_` to search. Underscores are the placeholder for the character. It only matches when there's really character as value. For example, if we'd like to check the quantity of stock, the range could be 2 to 5 digits. Therefore, we can use `__` to search for stock with quantity in 2 digits and `____` for stock with quantity in 4 digits.
1. We can use backslash `\` before `%` or `_` to secape the character, so we can search `%` as the character in the query. 
    ```sql
    WHERE col1 LIKE '%search%';
    /* find any entity in the table that includes 'search' */

    SELECT col1 FROM table_name WHERE col1 LIKE '__'; 
    /* return entities that has exactly 2 characters as value in col1 */
    ```

## Selection Challenges
```sql
SELECT title FROM books WHERE title LIKE '%stories%';

SELECT title, pages FROM books ORDER BY CHAR_LENGTH(title) DESC LIMIT 1;

SELECT CONCAT(title, ' - ', released_year) AS summary FROM books ORDER BY released_year DESC LIMIT 3;

SELECT title, author_lname FROM books WHERE author_lname LIKE '% %';

SELECT title, released_year, stock_quantity FROM books ORDER BY stock_quantity LIMIT 3;

SELECT title, author_lname FROM books ORDER BY author_lname, title;

SELECT UPPER(CONCAT('my favorite author is ', author_lname, '!')) AS yell FROM books ORDER BY author_lname;
```