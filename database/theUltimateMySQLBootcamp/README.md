Start Learning: 2020/11/24 
End Learning: 2020/12/10

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
1. [Aggregate Functions](#Aggregate-Functions)
    1. [The COUNT function](#The-COUNT-function)
    1. [GROUP BY](#GROUP-BY)
    1. [Min and Max Basics](#Min-and-Max-Basics)
    1. [The Sum Function](#The-Sum-Function)
    1. [The Avg Function](#The-Avg-Function)
1. [Revisiting Datatypes](#Revisiting-Datatypes)
    1. [CHAR and VARCHAR](#CHAR-and-VARCHAR)
    1. [DECIMAL](#DECIMAL)
    1. [FLOAT and DOUBLE](#FLOAT-and-DOUBLE)
    1. [DATE, TIME, and DATETIME](#DATE,-TIME,-and-DATETIME)
    1. [Formatting DATE](#Formatting-DATE)
    1. [DATE math](#DATE-math)
    1. [Date Type Exercises](#Date-Type-Exercises)
1. [The Power of Logical Operators](#The-Power-of-Logical-Operators)
    1. [Not Equal](#Not-Equal)
    1. [Not Like](#Not-Like)
    1. [Greater Than](#Greater-Than)
    1. [Less Than](#Less-Than)
    1. [Logical OR](#Logical-OR)
    1. [Between](#Between)
    1. [Case Statement](#Case-Statement)
1. [One to Many](#One-to-Many)
    1. [Real World Data is Messy](#Real-World-Data-is-Messy)
    1. [Types of Data Relationship](#Types-of-Data-Relationship)
    1. [One to Many](#One-to-Many)
    1. [Working with Foreign Keys](#Working-with-Foreign-Keys)
    1. [Cross Join](#Cross-Join)
    1. [Inner Join](#Inner-Join)
    1. [Left Join](#Left-Join)
    1. [Right Joins](#Right-Joins)
    1. [Join exercises](#Join-exercises)
1. [Many to Many](#Many-to-Many)
    1. [Many to Many Basics](#Many-to-Many-Basics)
    1. [TV Join Challenges](#TV-Join-Challenges)
1. [Instagram Database Clone](#Instagram-Database-Clone)
    1. [Introduction to Instagram Clone Schema](#Introduction-to-Instagram-Clone-Schema)
    1. [Cloning Instagram's DB: Users Schema](#Cloning-Instagram's-DB:-Users-Schema)
    1. [Cloning Instagram's DB: Photos Schema](#Cloning-Instagram's-DB:-Photos-Schema)
    1. [Cloning Instagram's DB: Comments Schema](#Cloning-Instagram's-DB:-Comments-Schema)
    1. [Cloning Instagram's DB: Likes Schema](#Cloning-Instagram's-DB:-Likes-Schema)
    1. [Cloning Instagram's DB: Followers Schema](#Cloning-Instagram's-DB:-Followers-Schema)
1. [Introducing Node](#Introducing-Node)
    1. [Introduction to JOIN US app](#Introduction-to-JOIN-US-app)
    1. [Introduction to NPM and Faker](#Introduction-to-NPM-and-Faker)
    1. [Connecting Node to MySQL](#Connecting-Node-to-MySQL)
    1. [Creating Our User Table](#Creating-Our-User-Table)
    1. [Some MySQL/Node Magic](#Some-MySQL/Node-Magic)
    1. [Bulk Inserting 500 users](#Bulk-Inserting-500-users)
    1. [500 Users Exercises](#500-Users-Exercises)
1. [Building Our Web App](#Building-Our-Web-App)
    1. [Introduction to Database Triggers](#Introduction-to-Database-Triggers)
    1. [Preventing Instagram Self-Follows with Triggers](#Preventing-Instagram-Self-Follows-with-Triggers)
    1. [Managing Triggers and a Warning](#Managing-Triggers-and-a-Warning)

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



# Aggregate Functions
## The COUNT function
1. `COUNT()` function is to calculate the number of entities in the same row. 
    ```sql
    SELECT COUNT(*) FROM table_name;
    /* return the number of rows in the table */

    SELECT COUNT(DISTINCT col1, col2) FROM table_name;
    /* return all unqiue values combined by col1 and col2 */

    SELECT COUNT(*) FROM table_name WHERE col1 LIKE '%search%';
    ```
## GROUP BY
1. `GROUP BY` summarize or aggregates identical data into single rows. In this case, if multiple entities have the same value in a field and is grouped, it will be returned as a row. This function is useful when counting the number of a certain type of entity in the table.
    ```sql
    SELECT col1, COUNT(*) FROM table_name GROUP BY col1; 
    ```
1. We can query data from the `books` table in `book_shop` database.
    ```sql
    SELECT 
        CONCAT(
            'In ', 
            released_year, 
            ' ', 
            COUNT(*), 
            ' book(s) released'
        ) AS year 
    FROM 
        books 
    GROUP BY 
        released_year;
    ```

## Min and Max Basics
1. `MAX()` can return the maximum entity from the query results. However, when using with other functions, we should be careful that the row and the entity may not match.
    ```sql
    SELECT Max(col1) FROM table_name;

    SELECT Max(col1), col2 FROM table_name;
    /* col1 and col2 could be from different row!!! */
    ```
1. In the `book_shop` case, we can query for the book that has the most pages in the dataset with its title.
1. One of the solutions is to use sub-query, which is an inner query for the case. The 2nd query, which is in the parenthesis will be executed first. However, this method is executing 2 queries which is slower than regular methods.
1. The other way is to use `ORDER BY` with `LIMIT`.
    ```sql
    SELECT title,pages FROM books WHERE pages = (SELECT Max(pages) FROM books);
    /*  */

    SELECT title, pages FROM books ORDER BY pages ASC LIMIT 1;
    ```
1. In the other example, if we'd like to find the year each author published their first book. 
1. Find the longest page count for each author in the dataset. 
    ```sql
    SELECT author_fname, author_lname, MIN(released_year) FROM books GROUP BY author_lname;

    SELECT author_fname, author_lname, MAX(pages) FROM books GROUP BY author_lname ORDER BY MAX(pages);

    SELECT CONCAT(author_fname, author_lname) AS author, MAX(pages) AS 'longest book' FROM books GROUP BY author_lname, author_fname;
    ```

## The Sum Function
1. `SUM()` can be used to sum up the numbers of a given columns. This function can be useful when using with `GROUP BY`. For example, we can get the total pages of a author in the `book_shop` database. 
    ```sql
    SELECT CONCAT(author_fname, ' ', author_lname) AS author, SUM(pages) FROM books GROUP BY author ORDER BY author;
    /* sum of pages that each author has written */

    SELECT CONCAT(author_fname, ' ', author_lname) AS author, SUM(pages) FROM books GROUP BY author_lname, author_fname ORDER BY author;
    /* This gives identical results as the query above */
    ```

## The Avg Function
1. `Avg()` can be used to calculate the average number of a given column. In the example, we can calculate the average stock quantity for books released in the same year.
1. Note that by default, the averaged nubmer will have 4 digits though the remainder is zero.
    ```sql
    SELECT AVG(col1) FROM table_name GROUP BY col1;

    SELECT released_year, AVG(stock_quantity) FROM books GROUP BY released_year;
    ```

## Aggregate Functions Challenges
1. Tentative solutions
    ```sql
    /* print the number of books in the database */
    SELECT COUNT(DISTINCT title) FROM books;

    /* print out how many books were released in each yaer */
    SELECT released_year, COUNT(released_year) FROM books GROUP BY released_year;

    /* print out the total number of books in stock */
    SELECT SUM(stock_quantity) FROM books; 

    /* Find the average released_year for each author */
    SELECT AVG(released_year) FROM books GROUP BY author_lname, author_fname;

    /* Find the full name of the author who wrote the longest book */
    SELECT CONCAT(author_fname, ' ', author_lname) AS author, MAX(pages) FROM books GROUP BY author ORDER BY MAX(pages) DESC LIMIT 1;

    SELECT released_year AS year, COUNT(released_year) AS '# books', AVG(pages) AS 'avg pages' FROM books GROUP BY released_year;
    ```
1. Solutions from the lecture
    1. The last tentative answers is not correct, as it should be grouped by `released_year` rather than the author because we want the years to be distinctive rather than aggregated. 
    ```sql
    SELECT released_year AS year, COUNT(released_year) AS '# books', AVG(pages) AS 'avg pages' FROM books GROUP BY released_year;
    ```



# Revisiting Datatypes
## CHAR and VARCHAR
1. The main difference between `CHAR` and `VARCHAR` is that `CHAR` type has fixed length for its values. The main point is that every value of `CHAR` type has the same size.
1. If the given value is more than limitation, the exceeding characters will be truncated. On the other hand, if the characters haven't reached the limit, the database will give white spaces to fill the empty characters.
1. `CHAR` is faster for fixed length text. It can be used as abbreviation system such as states in the USA.

## DECIMAL
1. We can declare a decimal number with 2 arguments such as `DECIMAL(5, 2)` which indicates that the number has 5 digits in total which has 2 numbers after decimal.
1. If we insert a number that is greater than the limitation, the system will put the largest number that the column can store to it. 
1. If we put digits over the limitation after decimal, the digits after limitation will be rounded to the closest digit.
    ```sql
    DECIMAL(5, 2);
    /* 999.99 has 5 digits in total with 2 digits after decimal */
    INSERT INTO table_name (col1) VALUE (7);
    INSERT INTO table_name (col1) VALUE (123456789);
    INSERT INTO table_name (col1) VALUE (34.88);
    INSERT INTO table_name (col1) VALUE (298.9999);
    INSERT INTO table_name (col1) VALUE (1.9999);
    INSERT INTO table_name (col1) VALUE (1.991);

    /*
    7.00
    999.99
    34.88
    299.00
    2.00
    1.99
    */
    ```

## FLOAT and DOUBLE
1. `FLOAT` and `DOUBLE` can store larger numbers using less space. However, the constraint of using both of these are that the stored numbers will be precise.
1. `FLOAT` takes 4 bytes to store the data in memory and has precision issues around 7 digits, while `DOUBLE` takes 8 bytes and has precision issues around 15 digits. A `DOUBLE` is larger and more precise than `FLOAT`. 
1. Therefore, we should use `DECIMAL` most of the time. We can use `FLOAT` or `DOUBLE` only if we know that precision doesn't matter to the dataset. 
    ```sql
    USE new_testing_db;
    CREATE TABLE thingies (price FLOAT);
    INSERT INTO thingies (price) VALUES (8877665544.485);

    SELECT * FROM thingies;
    /* 8877670000 */
    /* 8877665544.485 becomes 8877670000 which are very different */
    ```

## DATE, TIME, and DATETIME
1. We can use `sudo dpkg-reconfigure tzdata` to configure the timezone of the server or the Linux OS we are using. Note that the default timezone is the UTC. 
1. `DATE` are values with a date but no time. The format is `'YYYY-MM-DD'`.
1. `TIME` are values with tmie but no date. The format is `'HH:MM:SS'`. However, in practice, this type of data is rarely used. 
1. `DATETIME` are values with a `DATE` and `TIME`. The format is `'YYYY-MM-DD HH:MM:SS'`.
    ```sql
    USE new_testing_db;
    CREATE TABLE people (name VARCHAR(100), birthdate DATE, birthtime TIME, birthdt DATETIME);
    INSERT INTO people (name, birthdate, birthtime, birthdt) VALUES ('Padma', '1983-11-11', '10:07:35', '1983-11-11 10:07:35');
    ```

## CURDATE, CURTIME, and NOW
1. `CURDATE` gives the current date (today); `CURTIME` gives current time (now); and `NOW` gives current date and time. This can be useful to give timestamp automatically when the data is created. 
1. DATE and TIME are useful when checking time difference and calculate it for various of purposes. 
    ```sql
    USE new_testing_db;
    SELECT CURDATE(), CURTIME(), NOW();
    INSERT INTO people (name, birthdate, birthtime, birthdt) VALUES ('Microwave', CURDATE(), CURTIME(), NOW());
    ```

## Formatting DATE
1. There are several functions for `DATE` that can be useful when querying data. 
    1. `DAY()` can extract the day of the date. For example, `DAY('1990-01-01')` is `1`.
    1. `DAYNAME()` gives the day of a week in text. For example, `DAYNAME('1990-01-01')` is `Monday`.
    1. `DAYOFWEEK()` gives the day of a week like `DAYNAME()` but in number. Note that the number is from 1 to 7 which is from Sunday to Saturday.
    1. `DAYOFYEAR()` gives the day of the year. For example, `DAYOFYEAR('1990-01-01')` is `1`, and `DAYOFYEAR('1990-02-01')` is `32`.
1. If the function can't parse the date or time, it returns `NULL` rather than reporting an error. 
    ```sql
    USE new_testing_db;
    SELECT name, birthdate, DAYNAME(birthdate) FROM people;
    SELECT DAYNAME('1990-01-01'); /* Monday */
    SELECT DAYOFWEEK('1990-01-01'); /* 2 */
    SELECT DAYOFYEAR('1990-02-01'); /* 32 */
    ```
1. In addition, we can use [`DATE_FORMAT()`](https://www.w3schools.com/sql/func_mysql_date_format.asp) to change the format of the date and time. 
    ```sql
    SELECT DATE_FORMAT("2017-01-05", "%d/%M/%Y %r");
    /* 05/January/2017 12:00:00 AM */
    SELECT DATE_FORMAT(NOW(), "The time now is %D-%M-%Y %r");
    /* The time now is 3rd-December-2020 10:54:20 PM */
    ```

## DATE math
1. `DATEDIFF(date1, date2)` can be used to calculate the difference between 2 given dates. 
1. `DATE_ADD(date, INTERVAL 1 MONTH)` can be use to add seconds to years according to the given unit.
1. Besides the functions above, we can simply use `+/-` plus or minus sign with `INTERVAL` to add or subtract numbers.
    ```sql
    SELECT DATEDIFF('2020-01-31', '2020-01-01'); /* 30 */
    
    USE new_testing_db;
    SELECT birthdt, DATE_ADD(birthdt, INTERVAL 1 MONTH) FROM people;
    /* add a month to the date */

    SELECT birthdt, birthdt + INTERVAL 15 MONTH + INTERVAL 10 HOUR FROM people;
    ```

## Working with TIMESTAMP
1. Though `DATETIME` and `TIMESTAMP` are mostly identical, `DATETIME` supports range from `1000-01-01 00:00:00` to `9999-12-31 23:59:59`. On the other hand, `TIMESTAMP` supports from `1970-01-01 00:00:00` to `2038-01-19 03:14:07.999999`.
1. Therefore, `TIMESTAMP` is useful when we want to capture the current date and time, such as recording activity logs, as when a data is inserted to the database. 
    ```sql
    USE new_testing_db;
    CREATE TABLE comments (
        content VARCHAR(100),
        created_at TIMESTAMP DEFAULT NOW();
    );

    INSERT INTO comments (content) VALUE('lol what a funny article');
    INSERT INTO comments (content) VALUE('I found this offensive');
    INSERT INTO comments (content) VALUE('abcdefghijklmnopqrstuvwxyz');
    ```
1. We can use `ON UPDATE` with `CURRENT_TIMESTAMP` to update the column when the row is updated. 
    ```sql
    CREATE TABLE comments2 (
        content VARCHAR(100),
        changed_at TIMESTAMP DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
    );

    INSERT INTO comments2 (content) VALUE ('abcdefghijklmnopqrstuvwxyz');
    UPDATE comments2 SET content = 'THIS IS NOT GIBBERISH' WHERE content = 'abcdefghijklmnopqrstuvwxyz';
    /* changed at of content will be updated when it is changed from abcdefghijklmnopqrstuvwxyz to THIS IS NOT GIBBERISH */
    ```

## Date Type Exercises
1. Create a case using `CHAR`
1. Create a table for inventory 
    ```sql
    CREATE TABLE inventory (
        item_name VARCHAR(100),
        price DECIMAL(8, 2),
        quantity INT
    );
    ```
1. What's the difference between `DATETIME` and `TIMESTAMP`?
1. Print out the currnet time in MySQL.
1. Print out the current date but without time.
1. Print out the current day of the week. 
1. Print out the current day of the week in day name, such as `Monday`. 
1. Print out the current day and time using `mm/dd/yyyy`.
1. Print out the current day and time using the following format `January 2nd at 3:15` and `April 1st at 10:18`.
1. Create a tweets table that stores `Tweet content`, `Username`, and `Time` is created. 
    ```sql
    /* Print out current time */
    SELECT CURRENT_TIME();
    SELECT NOW();

    /* print out date without time */
    SELECT CURRENT_DATE(NOW());

    /* print out the current day of a week in number*/
    SELECT DAYOFWEEK(NOW());
    /* the following starts from Sunday which is 0 to Saturday which is 6 */
    SELECT DATE_FORMAT(NOW(), "%w");

    /* print out current day of a week in text*/
    SELECT DAYNAME(NOW());
    SELECT DATE_FORMAT(NOW(), "%W");

    /* print out current day and time in mm/dd/yyyy */
    SELECT DATE_FORMAT(NOW(), "%m/%d/%Y");

    /* print out current day and time as January 2nd at 3:15 */
    SELECT DATE_FORMAT(NOW(), "%M %D at %T");

    CREATE TABLE tweets (
        content VARCHAR(140),
        username VARCHAR(20),
        created_at TIMESTAMP DEFAULT NOW()
    );
    ```



# The Power of Logical Operators
## Not Equal
1. Not equal `!=` is a logical operator that can be useful to work on different queries such as 
    1. Select all books NOT published in 2017
    1. Select all birthdays between 1990 and 1992
    1. Select all items that are in stock AND priced below $19.99
    ```sql
    USE book_shop;

    /* select all the books from the books table which are not released in 2017 */
    SELECT title, released_year FROM books WHERE released_year != 2017;
    ```

## Not Like
1. This works in the opposite way of using `LIKE` with placeholder. It works by simply put `NOT` right before `LIKE`.
    ```sql
    USE book_shop;

    /* find all the book titles which has 'w' */
    SELECT title FROM books WHERE title LIKE '%W%';

    /* find all the book titles which does not have 'w' */
    SELECT title FROM books WHERE title NOT LIKE '%W%';
    ```

## Greater Than
1. `>` works as the regular math operator `greater than` which means the number should be greater and not include the given number. 
1. In addition, we can use greater than sign with an equal sign, so the operations can be inclusive.
1. In SQL, the boolean value is presented as `0` (false) and `1` (true).
1. Besides, SQL is not case-sensitive in its query, which shows `'A'` is equal to `'a'`.
    ```sql
    USE book_shop;
    SELECT * FROM books WHERE released_year >= 2000;

    SELECT 100 > 5;
    /* 1 */
    
    SELECT -15 > 15;
    /* 0 */

    SELECT 9 > -10;
    /* 1 */

    SELECT 1 > 1;
    /* 0 */

    SELECT 'a' > 'b';
    /* 0 */

    SELECT 'A' > 'a';
    /* 0 */

    SELECT 'A' = 'a';
    /* 1 */
    ```

## Less Than
1. `<` works similar to greater than but in the opposite way. 

## Logical AND
1. We can use `AND` operator `&&` to combine filters on queries. For example, from the book shop, we can select books written by certain author and is published in a certain year.
1. By using `AND`, the `SELECT` only returns the data that is 
    ```sql
    USE book_shop;
    SELECT * FROM books WHERE author_lname = 'Eggers' AND released_year > 2010;
    SELECT * FROM books WHERE author_lname = 'Eggers' && released_year < 2010;
    SELECT * FROM books WHERE author_lname = 'Eggers' AND released_year > 2010 AND title LIKE '%novel%';
    ```

## Logical OR
1. OR operator can be used with `OR` or `||`. 
    ```sql
    USE book_shop;
    SELECT * FROM books WHERE author_lname = 'Eggers' OR released_year > 2010;
    SELECT title, author_lname, released_year, stock_quantity FROM books WHERE 
    author_lname = 'Eggers' || 
    released_year > 2010 OR 
    stock_quantity > 100;

    SELECT 40 <= 100 || -2 > 0;
    SELECT 10 > 5 || 5 = 5;
    SELECT 'a' = 5 || 3000 > 2000;
    ```

## Between
1. Between allow us to search something in between 2 values. For example, select all books published between 2004 and 2015. However, this can also be achieved by using `AND` and `OR` logical operators. 
1. Besides regular between, we can use `NOT BETWEEN val1 AND val2`
    ```sql
    USE book_shop;
    SELECT title, released_year FROM books WHERE released_year BETWEEN 2004 AND 2015;
    SELECT title, released_year FROM books WHERE released_year >= 2004 AND released_year <= 2015;

    SELECT title, released_year FROM books WHERE released_year NOT BETWEEN 2004 AND 2015;
    ``` 
1. When comparing `DATE` values, we can use `CAST()` to convert the values to be compared in the same data type. 
    ```sql
    SELECT CAST('2017-05-02' AS DATETIME);

    USE new_testing_db;
    SELECT name, birthdt FROM people WHERE birthdt BETWEEN '1980-01-01' AND '2000-01-01';
    /* Though MySQL engine can handle the query, it's still better to convert the data into the same datatype */
    SELECT name, birthdt FROM people WHERE birthdt BETWEEN CAST('1980-01-01' AS DATETIME) AND CAST('2000-01-01' AS DATETIME);
    ```

## In and Not In
1. In the previous lectures, we can use `OR` operator. However, the code is redudant and repetitive. Therefore, we can use `IN` and pass multiple filters as giving an array of values. 
1. `IN` can use with `NOT` to work in the opposite way.
    ```sql
    USE book_shop;

    SELECT title, author_lname FROM books
    WHERE author_lname = 'Carver' OR
          author_lname = 'Lahiri' OR
          author_lname = 'Smith';

    SELECT title, author_lname FROM books
    WHERE author_lname IN ('Carver', 'Lahiri', 'Smith');

    SELECT title, released_year FROM books
    WHERE released_year >= 2000 
    AND released_year NOT IN 
    (2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016)
    ORDER BY released_year;
    ```
1. In the previous query, we have all the even years from 2000 to 2016. In this case, rather than giving the years repetitively, we can use `%` to check if the remainder of the year to know if the year is even. 
    ```sql
    SELECT title, released_year FROM books
    WHERE released_year >= 2000 AND released_year % 2 != 0;
    ```

## Case Statement
1. We can give statements (values) as in a new column (which is not stored in the DB) and give conditions for the values.  
1. For logical operators, we can use `>`, `<`, `=`, or `BETWEEN AND` for the condition, Besides, as it works similr to regualr `IF/ELSE` statement, we can use multiple `WHEN` for different conditions.
1. In the following case, we give the condition that if the `released_year` of a books is equal to or greater than year 2000, it is a `Modern Lit`. Otherwise, it will be `20th Century Lit`.
1. The 2nd case is to show book in `STOCK` with single asterisk `*` if the `stock_quantity` is less than 50. Note that there's no comma `,` to separate each statement inline.
1. In addition, the conditions works from top to down which is similar to inside out filter that the conditions on the top will be executed first. However, each of the syntax has benefits, as the regular `BETWEEN AND` syntax can be more readable.
1. Note that we have to put comma `,` right after `SELECT` in the beginning of the statement. 
    ```sql
    USE book_shop;
    SELECT title, released_year,
        CASE
            WHEN released_year >= 2000 THEN 'Modern Lit'
            ELSE '20th Century Lit'
        END AS GENRE
    FROM books;

    SELECT title, stock_quantity,
        CASE
            WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
            WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
            ELSE '***'
        END AS STOCK
    FROM books;

    SELECT title, stock_quantity,
        CASE
            WHEN stock_quantity <= 50 THEN '*' /* if this condition is put after less or eqaul to 100, this will not be executed due to order of sequence */
            WHEN stock_quantity <= 100 THEN '**' 
            ELSE '***'
        END AS STOCK
    FROM books;
    ```

## Logical Opeartors Exericse
1. Evaluate the following statements to be true or false. 
1. Select all books written before 1980 (non-inclusive).
1. Select all books written by `'Eggers'` or `'Chabon'`.
1. Select all books written by `'Lahiri'`, published after `2000`.
1. Select all books with page counts between `100` and `200`.
1. Select all books where `author_lname` starts with a `C` or a `S`.
1. If title contains `'stories'` -> Short Stories, `'Just kids'` and `'A heartbreaking Work'` -> Memoir, and everything else will be `'Novel'`.
    ```sql
    /* evaluate the following */
    SELECT 10 != 10; /* 0 */
    SELECT 15 > 14 && 99 - 5 <= 94; /* 1 */
    SELECT 1 IN (5, 3) || 9 BETWEEN 8 AND 10; /* 1 */

    /* select all books written before 1980 (non-inclusive) */
    SELECT * FROM books WHERE released_year < 1980;

    /* select all books written by `'Eggers'` or `'Chabon'` */
    SELECT * FROM books WHERE author_lname IN ('Eggers', 'Chabon');

    /* Select all books written by `'Lahiri'`, published after `2000` */
    SELECT * FROM books WHERE author_lname = 'lahiri' && released_year > 2000;

    /* Select all books with page counts between `100` and `200` */
    SELECT * FROM books WHERE pages BETWEEN 100 AND 200;

    /* Select all books where `author_lname` starts with a `C` or a `S` */
    SELECT * FROM books WHERE author_lname LIKE 'C%' OR author_lname LIKE 'S%';

    /* If title contains `'stories'` -> Short Stories, `'Just kids'` and `'A heartbreaking Work'` -> Memoir, and everything else will be `'Novel'` */
    SELECT *, 
        CASE
            WHEN title LIKE '%stories%' THEN 'Short Stories'
            WHEN title LIKE '%just kids%' OR title LIKE '%a hearbreaking work%' THEN 'Memoir'
            ELSE 'Novel'
        END AS genre
    FROM books;

    SELECT title, author_lname,
    CASE 
        WHEN COUNT(author_lname) = 1 THEN CONCAT(COUNT(author_lname), ' ', 'book')
        ELSE CONCAT(COUNT(author_lname), ' ', 'books')
    END AS 'COUNT'
    FROM books GROUP BY CONCAT(author_lname, author_fname);
    ```

## Solution to exercises
1. There some different solutions for 
    1. Select all books where `author_lname` starts with a `C` or a `S`.    
    ```sql
    SELECT title, author_lname FROM books WHERE 
    SUBSTR(author_lname, 1, 1) = 'c' OR
    SUBSTR(author_lname, 1, 1) = 's';

    SELECT title, author_lname FROM books
    WHERE SUBSTR(author_lname, 1, 1) IN ('C', 'S');
    ```
    1. If title contains `'stories'` -> Short Stories, `'Just kids'` and `'A heartbreaking Work'` -> Memoir, and everything else will be `'Novel'`.
    ```sql
    SELECT author_fname, author_lname,
        CASE 
            WHEN COUNT(*) = 1 THEN '1 book'
            ELSE CONCAT(COUNT(*), 'books')
        END AS COUNT
    FROM books GROUP BY author_lname, author_fname;
    ```

# One to Many
## Real World Data is Messy
1. Real world data is messy and interrelated
1. For example, we may have much more scenarios for the books in the previous sections. Considering the conditions for Amazon or real book shops, we may have other factors such as 
    1. Authors
    1. Orders
    1. Versions
    1. Reviews
    1. Customers

## Types of Data Relationship
1. There are several types of data relationships. According to the book shop example, we can have 
    1. One to One Relationship as reviews and customers that each review belongs to a single user in the usual case.
    1. One to Many Relationship as revies and books that each book can have multiple reviews. 
    1. Many to Many Relationship as authors and books that each author can write multiple books, while a book can be written by multiple authors.
1. Though "one to one" relationship can happen sometimes, "one to many" type relationship is the most common one in databases.

## One to Many
1. In order to show and manipulate the case for one to many, we can use the relationship between `orders` and `customers`. A customer can have multiple orders, while an order can be owned by a single customer (in a usual case).
1. In this case, we can set the schema as the followings
    1. A customer's first and last name
    1. A customer's email
    1. The date of the purchase (without time)
    1. The price of the order
1. For customer and order scenario, we can put all the data in a single table. However, it will be very redundant because a customer can have multiple orders and the same data can show in multiple rows as different orders. Therefore, we can try to separate the data into different tables. 
    1. Customers
        1. customer_id
        1. first_name
        1. last_name
        1. email
    1. Orders
        1. order_id
        1. order_date
        1. amount
        1. customer_id
1. In the previous tables and their relationship, `customer_id` and `order_id` is the primary key of the table which stores each of them. 
1. We can refer the `customer_id` from `customer` table to the `customer_id` in `orders` table. In this case, `customer_id` is the primary key in `customer` table and foreign key in `orders` table.
1. The main purpose for `foreign key` in the schema is to prevent dumb or intended hack of data on certain column, as if the data should be related to the other table. 

## Working with Foreign Keys
1. Similar to primary key, we can indicate a column to relate it to other column in the other table that is in the same database. 
1. The syntax to create foreign key is `FOREIGN KEY('column_in_this_table') REFERENCES table_name('column_name')`. Note that the convention to name the foreign key column in a table is to use the `table_name` with the column we are going to refer. 
    ```sql
    CREATE DATABASE orders_and_customers;
    USE orders_and_customers;

    CREATE TABLE customers (
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(100)
    )

    CREATE TABLE orders (
        id INT PRIMARY KEY AUTO_INCREMENT,
        oreder_date DATE,
        amount DECIMAL (8, 2),
        customer_id INT, 
        FOREIGN KEY(customer_id) REFERENCES customers(id)
    )
    ```

## Cross Join
1. Without using `JOIN` and other fitler clause or simply using `SELECT FROM` on all tables, the we can join tables as "cross join" which is not very useful in most of the cases. "Cross Join" basically works as multiplying the rows from each table. 
    ```sql
    USE customers_and_orders;
    /* Finding Orders Placed By George: 2 Step Process */
    SELECT id FROM customers WHERE last_name = 'George';
    SELECT * FROM orders WHERE customer_id = 1;
    
    /* Finding Orders Placed By George: Using a subquery */
    SELECT * FROM orders WHERE customer_id = (SELECT id FROM customers WHERE last_name = 'George');

    /* cross join all the rows from the tables */
    SELECT * FROM customers, orders;
    SELECT * FROM customers JOIN orders;
    ```

## Inner Join
1. When joining table, we can use **"implicit inner join"** to join the table. 
1. Note that we need to indicate the name of table as the prefix. The table name and column can be combined with dot `.`.
1. "Inner Join" is to select all the entities from tables where teh join condition is met. 
    ```sql
    /* by indicating the id is from which table, we can */
    /* implicit inner join */
    SELECT * FROM customers, orders WHERE customers.id = customer_id;

    /* explicit inner join */
    SELECT * FROM customers 
    INNER JOIN orders
        ON customers.id = customer_id;
    ```
1. In addition, we can also do arbitrary join such as matching `customers.id` and `orders.id`. However, this is not very useful in most of the cases.
    ```sql
    SELECT * FROM customers
        JOIN orders customers.id = orders.id;
    ```
    <img src="./images/sql-joins.png">

## Left Join
1. "Left Join" allows us to select all the data from a table after joining it to the other. 
1. This can be useful in certain scenarios.
    1. Check the customers if each of them has made an order. If not, it shows `NULL` on the columns joined from the other table. 
    ```sql
    /* for customers who don't make any order yet, the columns joined from orders table will show NULL */
    SELECT * FROM customers
    LEFT JOIN orders
        ON customers.id = orders.customer_id;
    ```
1. After joining the table, we can check which customer hasn't made any order yet. We can simply find those who has `NULl` in their `amount` column which is related from `order` table. 
    ```sql
    SELECT 
        first_name,
        last_name,
        SUM(amount)
    FROM customers
    LEFT JOIN orders
        ON customers.id = orders.customer_id
    GROUP BY customers.id;

    /* replace NULL to be 0 */
    SELECT 
        first_name,
        last_name,
        IFNULL(SUM(amount), 0) AS total_spent
    FROM customers
    LEFT JOIN orders
        ON customers.id = orders.customer_id
    GROUP BY customers.id
    ORDER BY total_spent;
    ```

## Right Joins
1. In the given example and dataset, we can't see any difference between `INNER JOIN` and `RIGHT JOIN`. Therefore, we can only see the difference between 2 `JOIN` tables when there are data in `orders` (which is the right table) that can't be matched with those in `customers`.
    ```sql
    USE customers_and_orders;
    SELECT * FROM customers
    RIGHT JOIN orders
        ON customers.id = orders.customer_id
    ```
1. In addition, if we try to delete any row in `customers`, MySQL will prevent the removal of related data because when we created `orders` table, `customer_id` is set to be related to the `id` in `customers`. Therefore, we can use `DELETE FROM` to delete an entity from the table directly, and we can neither `DROP TABLE customers`.
1. If we create a new dataset without referring foreign key and relate the tables, we can use `RIGHT JOIN` to check the dataset and see the issues. This could be happend in the datasets are from 2 different sources or are not designed in the same stage.
    ```sql
    SELECT 
        IFNULL(first_name, 'Missing') AS first,
        IFNULL(last_name, 'Missing') AS last,
        order_date,
        SUM(amount)
    FROM customers
    RIGHT JOIN orders
        ON customers.id = orders.customer_id
    GROUP BY first_name, last_name;
    ```
1. When creating tables and referring for foreign key, we can also indicate to delete the related data when one is removed with `ON DELETE CASCADE`. 
    ```sql
    CREATE TABLE customers(
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        email VARCHAR(100)
    );

    CREATE TABLE orders(
        id INT AUTO_INCREMENT PRIMARY KEY,
        order_date DATE,
        amount DECIMAL(8,2),
        customer_id INT,
        FOREIGN KEY(customer_id) 
            REFERENCES customers(id)
            ON DELETE CASCADE
    );

    INSERT INTO customers (first_name, last_name, email) 
    VALUES ('Boy', 'George', 'george@gmail.com'),
        ('George', 'Michael', 'gm@gmail.com'),
        ('David', 'Bowie', 'david@gmail.com'),
        ('Blue', 'Steele', 'blue@gmail.com'),
        ('Bette', 'Davis', 'bette@aol.com');
        
    INSERT INTO orders (order_date, amount, customer_id)
    VALUES ('2016/02/10', 99.99, 1),
        ('2017/11/11', 35.50, 1),
        ('2014/12/12', 800.67, 2),
        ('2015/01/03', 12.50, 2),
        ('1999/04/11', 450.25, 5);
    ```
1. `LEFT JOIN` and `RIGHT JOIN` are actually reversely identical to each other. By changing the order of joined tables, we can have the data presented in the same joined table with only different sequence of columns. Note that some systems even allows only `LEFT JOIN` without being able to use `RIGHT JOIN`.

## Join exercises
1. Create a table with the following schema. Note that `student_id` in `papers` table is related to `id` in `students`.
    1. Students - id, first_name
    1. Papers - title, grade, student_id
    ```sql
    CREATE TABLE students (
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(100)
    );

    CREATE TABLE papers (
        title VARCHAR(100),
        grade INT,
        student_id INT,
        FOREIGN KEY (student_id)
            REFERENCES students(id)
            ON DELETE CASCADE
    );

    INSERT INTO students (first_name) VALUES 
    ('Caleb'), 
    ('Samantha'), 
    ('Raj'), 
    ('Carlos'), 
    ('Lisa');
    
    INSERT INTO papers (student_id, title, grade ) VALUES
    (1, 'My First Book Report', 60),
    (1, 'My Second Book Report', 75),
    (2, 'Russian Lit Through The Ages', 94),
    (2, 'De Montaigne and The Art of The Essay', 98),
    (4, 'Borges and Magical Realism', 89);
    ```
1. After getting the datasets ready 
    1. Print a table that is with `first_name`, `title`, and `grade`. All the data in this sets should be related without any `NULL`.
    1. Print a table that is with `first_name`, `title`, and `grade`. While in this case, we should show all the students if the names are in the database though no data can be related in `papers`. 
    1. As the preveious version, change the `NULL` grade into `0` and `title` of `paper` to `MISSING` if there's no paper.
    1. Print a table with `first_name` and `average` of the grade of the student. Note that all students should be shown in the able though they get `0` on their grades. 
    1. Subjected to the previous table, add another column `passing_status`. If the average score of the student is over `75`, show `PASSING`. Otherwise, the student is `FAILING`. 
    ```sql
    /* join tables without showing unrelated dataset */
    SELECT first_name, title, grade 
    FROM students 
    JOIN papers 
        ON students.id = papers.student_id;

    /* join tables showing all students */
    SELECT first_name, title, grade 
    FROM students 
    LEFT JOIN papers 
        ON students.id = papers.student_id;

    /* turn NULL title into 'MISSING' and NULL grade into '0' */
    SELECT first_name, 
        IFNULL(title, 'MISSING'), 
        IFNULL(grade, 0) 
    FROM students 
    LEFT JOIN papers 
        ON students.id = papers.student_id;

    /* show average grade of each student */
    SELECT first_name, 
        IFNULL(AVG(grade), 0) AS average 
    FROM students 
    LEFT JOIN papers 
        ON students.id = papers.student_id 
    GROUP BY first_name /* we can also use student.id to group the data */
    ORDER BY average DESC;

    /* show passing status of each student if each of their grade is greater than 75 */
    SELECT first_name, 
        IFNULL(AVG(grade), 0) AS average
        CASE
            WHEN AVG(grade) >= 75 THEN 'PASSING'
            WHEN AVG(grade) IS NULL THEN 'FAILING' /* this is to prevent the edge case */
            ELSE 'FAILING'
        END AS 'passing_status'
    FROM students 
    LEFT JOIN papers 
        ON students.id = papers.student_id 
    GROUP BY first_name
    ORDER BY AVG(grade) DESC;
    ```



# Many to Many
## Many to Many Basics
1. Some example can well describe many to many relationship, such as 
    1. Books and authors
    1. Blog posts and tags
    1. Students and classes
1. In this case, we are trying to build the database for tv show reviewing application. We can have the data separated into 2 main tables, `series` and `reviewers`. The join table of the two can be the `review` table.
    1. Series (TV shows)
    1. Reviewers
    <img src="./images/tv_show_review_tables.png">
    ```sql
    CREATE DATABASE tv_review_app;

    CREATE TABLE reviewers (
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(100),
        last_name VARCHAR(100)
    );

    CREATE TABLE series (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(100),
        released_year YEAR(4),
        genre VARCHAR(100)
    );

    INSERT INTO series (title, released_year, genre) VALUES
        ('Archer', 2009, 'Animation'),
        ('Arrested Development', 2003, 'Comedy'),
        ("Bob's Burgers", 2011, 'Animation'),
        ('Bojack Horseman', 2014, 'Animation'),
        ("Breaking Bad", 2008, 'Drama'),
        ('Curb Your Enthusiasm', 2000, 'Comedy'),
        ("Fargo", 2014, 'Drama'),
        ('Freaks and Geeks', 1999, 'Comedy'),
        ('General Hospital', 1963, 'Drama'),
        ('Halt and Catch Fire', 2014, 'Drama'),
        ('Malcolm In The Middle', 2000, 'Comedy'),
        ('Pushing Daisies', 2007, 'Comedy'),
        ('Seinfeld', 1989, 'Comedy'),
        ('Stranger Things', 2016, 'Drama');    
    
    INSERT INTO reviewers (first_name, last_name) VALUES
        ('Thomas', 'Stoneman'),
        ('Wyatt', 'Skaggs'),
        ('Kimbra', 'Masters'),
        ('Domingo', 'Cortes'),
        ('Colt', 'Steele'),
        ('Pinkie', 'Petit'),
        ('Marlon', 'Crafford');

    CREATE TABLE reviews (
        id INT PRIMARY KEY AUTO_INCREMENT,
        rating DECIMAL(2,1),
        series_id INT,
        reviewer_id INT,
        FOREIGN KEY series_id REFERENCES reviewers(id)
            ON DELETE CASCADE,
        FOREIGN KEY reviewer_id REFERENCES series(id)
            ON DELETE CASCADE;
    );

    INSERT INTO reviews(series_id, reviewer_id, rating) VALUES
        (1,1,8.0),(1,2,7.5),(1,3,8.5),(1,4,7.7),(1,5,8.9),
        (2,1,8.1),(2,4,6.0),(2,3,8.0),(2,6,8.4),(2,5,9.9),
        (3,1,7.0),(3,6,7.5),(3,4,8.0),(3,3,7.1),(3,5,8.0),
        (4,1,7.5),(4,3,7.8),(4,4,8.3),(4,2,7.6),(4,5,8.5),
        (5,1,9.5),(5,3,9.0),(5,4,9.1),(5,2,9.3),(5,5,9.9),
        (6,2,6.5),(6,3,7.8),(6,4,8.8),(6,2,8.4),(6,5,9.1),
        (7,2,9.1),(7,5,9.7),
        (8,4,8.5),(8,2,7.8),(8,6,8.8),(8,5,9.3),
        (9,2,5.5),(9,3,6.8),(9,4,5.8),(9,6,4.3),(9,5,4.5),
        (10,5,9.9),
        (13,3,8.0),(13,4,7.2),
        (14,2,8.5),(14,3,8.9),(14,4,8.9);
    ```

## TV Join Challenges
1. Show a table with `title` of tv series and its `rating`.
    ```sql
    SELECT 
        title, 
        rating 
    FROM series 
    JOIN reviews 
        ON reviews.series_id = series.id;
    ```
1. Show a table with `title` and the average of its `rating` and order by the average rating.
    ```sql
    SELECT 
        title, 
        AVG(rating) AS rating
    FROM series 
    JOIN reviews 
        ON reviews.series_id = series.id
    GROUP BY series.id,
    ORDER BY rating;
    ```
1. Show a table with reviewer's `first_name` and `last_name` and the rating from the reviewer.
    ```sql
    SELECT 
        first_name,
        last_name,
        rating
    FROM reviewers
    JOIN reviews
        ON reviews.reviewer_id = reviewers.id;
    ```
1. Show a table that includes only "unreviewed" series. The main point here is to use "IS NULL" to check if the row has NULL and `LEFT JOIN` to include all the titles from `series` table.
    ```sql
    SELECT 
        title AS 'unreviewed_series'
    FROM series
    LEFT JOIN reviews 
        ON reviews.series_id = series.id
    WHERE rating IS NULL;
    ```
1. Show a table that has the `genre` and its `average score`. In this case, we can use `ROUND(number, digits after decimal)` to truncate the numbers after decimal.
    ```sql
    SELECT 
        genre,
        ROUND(
            AVG(rating),
            2
        ) AS 'average_score'
    FROM series
    JOIN reviews
        ON reviews.series_id = series.id
    GROUP BY genre;
    ```
1. Show a table that has `first_name`, `last_name`, `COUNT`, `MIN`, `MAX`, `AVG`, and `STATUS` to show the analysis of the reviewers. In this case, besides using `CASE`, we can use `IF` statement as other programming languages.
    ```sql
    SELECT 
        first_name,
        last_name,
        COUNT(rating),
        MIN(rating),
        MAX(rating),
        AVG(rating),
        CASE
            WHEN COUNT(rating) >= 10 THEN 'POWER USER'
            WHEN COUNT(rating) > 0 THEN 'ACTIVE'
            ELSE 'INACTIVE'
        END AS 'STATUS'
    FROM reviewers
    JOIN reviews
        ON reviews.reviewer_id = reviewers.id
    GROUP BY reviewers.id;
    
    /* using if statement */
    SELECT 
        first_name,
        last_name,
        COUNT(rating),
        MIN(rating),
        MAX(rating),
        AVG(rating),
        IF(COUNT(rating) > 0, 'ACTIVE', 'INACTIVE') AS 'STATUS'
    FROM reviewers
    JOIN reviews
        ON reviews.reviewer_id = reviewers.id
    GROUP BY reviewers.id;
    ```
1. Show a table of `title` from `series` table, `rating` from `reviews` table, and `reviewer` (in full name) from `reviewers` table.
    ```sql
    SELECT 
        title,
        rating,
        CONCAT(first_name, ' ', last_name) AS 'reviewer'
    FROM reviewers
    JOIN reviews
        ON reviews.reviewer_id = reviewers.id 
    JOIN series
        ON reviews.series_id = series.id;
    ```

# Instagram Database Clone
## Introduction to Instagram Clone Schema
1. In a Instagram post, we can have several components. Each of them will be separated into an individual table.
    1. Image URL
    1. Users
    1. Likes
    1. Hash tags
    1. Comments
    1. Followers and followees

## Cloning Instagram's DB: Users Schema
1. We will have `id`, `username`, and `created_at` in this case.
    ```sql
    CREATE DATABASE ig_clone;
    USE ig_clone;

    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    );

    INSERT INTO users (username) VALUES
    ('BlueTheCat'),
    ('CharlieBrown'),
    ('AllenLin');
    ```

## Cloning Instagram's DB: Photos Schema
1. This `photos` table is related to `users` because each images in the dataset is owned by a user in the application. 
1. In `photos` table, we have `id`, `image_url`, `user_id`, and `created_at`.
    ```sql
    CREATE TABLE photos (
        id INT PRIMARY KEY AUTO_INCREMENT,
        image_url VARCHAR(255) NOT NULL,
        user_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY (user_id) REFERENCES users(id)
            ON DELETE CASCADE;
    );
    ```

## Cloning Instagram's DB: Comments Schema
1. For comments, we have `id`, `comment_text`, `user_id`, `photo_id`, and `created_at`.
    ```sql

    ```

## Cloning Instagram's DB: Likes Schema
1. To track on the likes on each post, we may skip the unique id of each data, as it is combined by both `user_id` and `photo_id`. However, we have to ensure that a user can only like a photo once rather than multiple times.
1. We can use `PRIMARY KEY (col1, col2)` that is combined by values from 2 columns to ensure the combination will always be unique. Therefore, we can skip setting and giving unique id to each entity.
    ```sql
    CREATE TABLE likes (
        user_id INT NOT NULL,
        photo_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(photo_id) REFERENCES photos(id),
        PRIMARY KEY (user_id, photo_id)
    );
    ```

## Cloning Instagram's DB: Followers Schema
1. In this case, we have 3 columns `follower_id`, `followee_id`, and `created_at`. However, we have to prevent a user follows him/herself. That is `follower_id` and `followee_id` on the same row can't be the same. 
    ```sql
    CREATE TABLE followers (
        follower_id INT NOT NULL,
        followee_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY (follower_id) REFERENCES users(id),
        FOREIGN KEY (followee_id) REFERENCES users(id),
        PRIMARY KEY (follower_id, followee_id)
    );
    ```

## Cloning Instagram's DB: Hashtags Schema
1. For the case, we may have several solutions along with their pros and cons. 
    1. `id`, `image_url`, and `tags`. In this case, tags are all concatenated and presented as a long string, such as `#tag1#tag2#tag3`.
        1. This table is very easy to implement.
        1. Limited number of tags can be stored. As tags data type can be `VARCHAR(225)` which is limited to only 255 characters, the tags that a post has can be only few.
        1. We can't store additional information to the post, such as the meta data of each tag. For example, we don't know when and which user firstly used a certain tag.
        1. We have to be careful when searching the post. For example, as all hashtags are concatenated with `#` as the delimeter, we may have a substring of a certain tag when using `LIKE`. `SELECT * FROM posts WHERE hashtags LIKE '%food%'` can also find posts tagged with `seafood`.
    1. We can have 2 tables `photos` with `id` and `image_url` and `tags` with `tag_name` and `photo_id`.
        1. We can have unlimited number of tags on each photo. A single `tag_name` can be assigned to multiple `photo_id`. 
        1. However, the query can be much slower than the previous solution.
    1. We can separate the data into 3 tables, as `id` and `image_url` in `photos`, `id` and `tag_name` in `tags`, and `photo_id` and `tag_id` in `photo_tags`.
        1. In this case, we can also add unlimited numbers of tags to a photo.
        1. We can have additional info for each data, as for `photos` and `tags`.
        1. However, we will have more work when inserting or updating data to the tables. 
1. After all, we choose to use the 3rd version.
    ```sql
    CREATE TABLE tags (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tag_name VARCHAR(255) UNIQUE,
        created_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE photo_tags (
        photo_id INT NOT NULL,
        tag_id INT NOT NULL,
        FOREIGN KEY (photo_id) REFERENCES photos(id),
        FOREIGN KEY (tag_id) REFERENCES tags(id),
        PRIMARY KEY(photo_id, tag_id)
    );
    ```



# Working with Lots of Instagram Data
## Instagram Challenges
1. We can use `source` in MySQL DBMS to create the database and import the dataset from `ig_clone_data.sql`.
1. We want to reward our users who have been around the longest. In this case, we'd like to find the 5 oldest users.
    ```sql
    SELECT username 
    FROM users 
    ORDER BY created_at 
    LIMIT 5;
    ```
1. What day of the week do most users register on? We need to figure out when to schedule an ad campaign.
    ```sql
    SELECT 
        DAYNAME(created_at) AS day, 
        COUNT(*) AS registered_users 
    FROM users 
    GROUP BY day 
    ORDER BY COUNT(*) DESC;
    ```
1. We want to target our inactive users with an email campaign. Find the users who have never posted a photo.
    ```sql
    SELECT username 
    FROM users 
    LEFT JOIN photos 
        ON photos.user_id = users.id 
    WHERE photos.user_id IS NULL 
    GROUP BY username;
    ```
1. We're running a new contest to see who can get the most likes on a single photo. Who won the competition. 
1. The purpose of this case is to find the image and its owner who gets the most likes in the dataset. 
    ```sql
    SELECT username FROM users JOIN photos ON photos.user_id = users.id JOIN (SELECT photo_id, COUNT(user_id) AS likes FROM likes GROUP BY photo_id ORDER BY likes DESC LIMIT 1) AS joined WHERE photos.id = joined.photo_id;

    /* solution from the course */
    SELECT 
        username,
        COUNT(*) AS total
    FROM photos
    JOIN likes 
        ON likes.photo_id = photos.id
    JOIN users 
        ON photos.user_id = users.id
    GROUP BY photos.id
    ORDER BY total DESC
    LIMIT 1;
    ```
1. Our investors want to know how many times does the average user post?
    ```sql
    SELECT COUNT(id) / users.total AS average FROM photos JOIN (SELECT COUNT(id) AS total FROM users) AS users;
    
    /* solution from the course */
    SELECT (SELECT Count(*) FROM photos) / (SELECT Count(*) FROM users) AS avg;
    ```
1. A brand wants to know which hashtags to use in a post. What are the top 5 most commonly used hashtags?
    ```sql  
    SELECT
        tag_id,
        tag_name,
        count(*) AS total
    FROM photo_tags 
    JOIN tags
        ON tags.id = photo_tags.tag_id
    GROUP BY tag_id 
    ORDER BY total DESC 
    LIMIT 5;
    ```
1. We have a small problem with bots on our site. Find users who have liked every single photo on the site.
1. We'd like to check which user has liked all the photos in the database, which is `257` in this case. However, `WHERE` statement should be placed before `GROUP BY`, so we can't use it.
1. Therefore, we can use `HAVING` which works similar to `WHERE`, but can be used after `GROUP BY`. 
    ```sql
    /* tentative solution */
    SELECT photo_id, COUNT(*) FROM likes GROUP BY photo_id;
    SELECT user_id FROM likes JOIN (SELECT COUNT(photo_id) AS all_photos FROM likes) AS total WHERE count(*) > total.all_photos GROUP BY user_id;

    /* solution from course */
    SELECT 
        username, 
        Count(*) AS num_likes
    FROM users 
    INNER JOIN likes 
        ON users.id = likes.user_id 
    GROUP BY likes.user_id 
    HAVING num_likes >= (SELECT Count(*) FROM photos);
    ```

# Introducing Node
## Introduction to JOIN US app
1. The application has some simple features which are based on `NodeJS` and `MySQL`.
    1. Receiving emails from users.
    1. Counting the number of total users who provide their emails.
1. The table to store the data is simple that it only has `email` and `created_at`.

## Introduction to NPM and Faker
1. We use `npm` and `faker` package to create dummy data in the case.
1. Use `npm init -y` to initiate the new app and use `npm i faker` to install `faker` package.
    ```js
    const faker = requrie('faker');

    console.log(faker.internet.email()); // random email
    console.log(faker.date.past()); // random timestamp in the past
    console.log(faker.adderss.city()); // random city name
    ```

## Connecting Node to MySQL
1. After installing `mysql` package through npm, we can require the package and connect our NodeJS app to the database. Note that database and the server can be at the same place.
1. On Goorm IDE, our default user is `root`. Note that this container on Goorm IDE is builder by the shortcut which has skipped many process to configure and setup the environment. Besides, we can skip giving password to connect NodeJS app to MySQL.
    ```js
    var mysql = require('mysql');
 
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        database : 'join_us'
    });
    ```
1. We can use `mysql-ctl start` to start MySQL on the server in the background, so we can free out the terminal for other purposes.
1. Before we start the app, we should go to MySQL DBMS to create a new database `join_us`.
1. The connection from the NodeJS app will be kept connecting until we use <kbd>Ctrl + c</kbd> to stop the app, or we can use `connection.end()` in the app to stop the connection at the end of the script.
    ```js
    const mysql = require('mysql');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'join_us'
    });

    connection.query('SELECT CURDATE()', function(error, results, fields){
        if (error) throw error;
        console.log('The solution is: ', results);
    })

    connection.end();
    ```
1. With the concept of OOP, we can manipulate the data retreived from SQL query.
    ```js
    connection.query('SELECT 1 + 5 AS answer', function(error, results, fields){
        if (error) throw error;
        console.log(results);
        console.log(results[0].answer);
    });

    let query = 'SELECT CURTIME() AS time, CURDATE() AS date, NOW() AS now';
    connection.query(query, function(error, results, fields){
        if (error) throw error;
        console.log(results);
        console.log(results[0].time);
        console.log(results[0].date);
        console.log(results[0].now);
    });

    connection.end();
    ``` 

## Creating Our User Table
1. We create a table in the database through `mysql-ctl cli` directly. 
    ```sql
    CREATE TABLE users (
        email VARCHAR(255) PRIMARY KEY,
        created_at TIMESTAMP DEFAULT NOW()
    );
    ```

## Selecting Using Node
1. We can use `mysql` to connect and retreive and read the data from the database.
    ```js
    const mysql = requrie('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'join_us'
    });

    let q = 'SELECT * FROM users';
    connection.query(q, function(error, results, fields) {
        if (error) throw error;
        console.log(results);
    });

    connection.end();
    ```

## Inserting Using Node
1. We can use regular `INSERT INTO` syntax to have new data insert into the database. However, the data to be input is static
    ```js
    const mysql = requrie('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'join_us'
    });

    let q = 'INSERT INTO users (email) VALUES ("wyatt_the_dog@gmail.com")';
    connection.query(q, function(error, results, fields) {
        if (error) throw error;
        console.log(results);
    });

    connection.end();
    ```
1. On the other hand, we can end the SQL query string with a question mark `?` and give another variable between the query statement and the callback function. The SQL query statement is simple that `INSERT INTO users SET ?` with given objects that has `key` as column and `value` to insert into the database.
    ```js
    let person = {email: 'jenny467@gmail.com'};
    connection.query('INSERT INTO users SET ?', person, function(error, results, fields) {
        if (error) throw error;
        console.log(results);
    });
    ```
1. We then can use `faker` to create random data and insert them into the database.
    ```js
    const faker = require('faker');

    let person = {email: faker.internet.email()};
    connection.query('INSERT INTO users SET ?', person, function(error, results, fields){
        if (error) throw error;
        console.log(results);
    });
    ```

## Some MySQL/Node Magic
1. We can't directly insert a JavaScript date object into MySQL database directly. However, `mysql` npm package can help convert the date object into SQL format.
1. We can keep the `connection.query` object in a variable and check the whole SQL statements with `connection.query.sql`.
    ```js
    const mysql = require('mysql');
    const faker = require('faker');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'join_us'
    });

    let person = {
        email: faker.internet.email(),
        created_at: faker.date.past()
        }

    let end_result = connection.query('INSERT INTO users SET ?', person, function(error, results, field){
        if (error) throw error;
        console.log(results);
    });

    console.log(end_result.sql);
    connection.end();
    ```

## Bulk Inserting 500 users
1. Though we can use loops to create queries and insert data to database multiple times, the process will be much light weighted and efficient by inserting dataset at once with bulk insert. 
    ```js
    const mysql = require('mysql');
    const faker = require('faker');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'join_us'
    });

    let data = [
        [faker.internet.email(), faker.date.past()],
        [faker.internet.email(), faker.date.past()],
        [faker.internet.email(), faker.date.past()]
    ];

    let q = 'INSERT INTO users (email, created_at) VALUES ?';
    connection.query(q, [data], function(error, results, field){
        if (error) throw error;
        console.log(results);
    });

    connection.end();
    ```
1. To create 500 instances from `faker`, we can use for loop to create the dataset.
    ```js
    let data = [];
    for (let i = 0; i < 500; i++) {
        data.push([faker.internet.email(), faker.date.past()]);
    }
    ```

## 500 Users Exercises
1. Find the earliest date a user joined.
1. Find Email Of The First Earliest User.
1. Users according to the month they joined.
1. Count number of users with yahoo emails.
1. Calculate total number of users for each email host.
    ```js
    const mysql = require('mysql');

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'join_us'
    });
    
    let q = `SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY created_at LIMIT 1`;
    /* solution from the lecture */
    q = `SELECT DATE_FORMAT(MIN(created_at), "%M %D %Y") AS earliest_date FROM users`;
    connection.query(q, function(error, results, field){
        if (error) throw error;
        console.log('Time when the earliest joined user registered: ', results[0].created_at);
    });

    q = `SELECT email, DATE_FORMAT(created_at, '%Y-%m-%d %T') AS created_at FROM users ORDER BY created_at LIMIT 1`;
    /* solution from the lecture */
    q = `SELECT * FROM users WHERE created_at = (SELECT MIN(created_at) FROM users)`;
    connection.query(q, function(error, results, field){
        if (error) throw error;
        console.log('Email of the earliest joined user: ', results[0].email);
    });

    q = `SELECT MONTHNAME(created_at) as month, COUNT(*) as count FROM users GROUP BY month ORDER BY MONTH(created_at)`;
    /* solution from the lecture */
    q = `SELECT MONTHNAME(created_at) as month, COUNT(*) as count FROM users GROUP BY month ORDER BY count DESC`;
    connection.query(q, function(error, results, field){
        if (error) throw error;
        console.log('Users registered in each month: ', results);
    });

    q = `SELECT COUNT(email) AS yahoo_users FROM users WHERE email LIKE '%yahoo%'`;
    connection.query(q, function(error, results, field){
        if (error) throw error;
        console.log('Users with Yahoo Email:', results);
    });

    q = `
    SELECT 
        CASE 
            WHEN email LIKE '%yahoo%' THEN 'yahoo'
            WHEN email LIKE '%gmail%' THEN 'gmail'
            WHEN email LIKE '%hotmail%' THEN 'hotmail'
            ELSE 'others'
        END AS 'provider',
        COUNT(*) AS 'total_users'
    FROM users
    GROUP BY provider
    `;
    connection.query(q, function(error, results, field){
        if (error) throw error;
        console.log('Users with Yahoo Email:', results);
    });
    
    connection.end();
    ```

# Building Our Web App
1. This section is skipped as the part is over simplified and much more details and info. are required to understand the topics. 

# Database Triggers
## Introduction to Database Triggers
1. Database triggers are SQL statements that are automtically run when a specific table is changed.
    ```sql
    CREATE TRIGGER trigger_name
        trigger_time trigger_event ON table_name FOR EACH ROW 
        BEGIN
        ...
        END;
    ```
1. The syntax of the statements above have 3 main parts, `trigger_time`, `trigger_event`, and `table_name`.
    1. `trigger_time` indicates that when should the code run. There are only 2 choices to have the code run before or after the event happens.
        1. `BEFORE`
        1. `AFTER`
    1. `trigger_event` indicates that what event will the code do to the rows in the table.
        1. `INSERT`
        1. `UPDATE`
        1. `DELETE`
    1. `table_name` is the table in the database that we want the triggers to work on.
1. These triggers can be useful to handle different scenarios. For example, in the Instagram case, when a user unlike a post from the other user, not only the related date is updated but also if there's a table count and store the number of likes of users in advance can be udpated.
1. On the other hand, this trigger can also check the data to be inserted into tables as filters and give warning.
1. However, in practice, it is better to use frontend code to prevent invalid input when the user giving data at the UI such as the website to enhance user experience. 

## Writing our First Trigger
1. In this case, we create a table `users` which has `username` and the `age`. We can put a trigger 
    1. `CREATE TRIGGER` is to give a name to the trigger.
    1. We can then use `BEFORE` or `AFTER` on the `table_name` to execute the trigger before or after the following event. 
    1. We then put SQL statements for the trigger between `BEGING` and `END`.
    1. `NEW` is a placeholder which pointing to the new input (new entity) that will be inserted to the table to be in the additinoal row. After dot `.`, we put the column name that we want to filter from the table. 
    1. We then can use `SIGNAL SQLSTATE` to indicate the types of error that should be returned when the value meets certain conditions. In MySQL errors, there are 3 main components
        1. A numeric `error code` (which is MySQL-specific that is different from the other DBMS). We can refer to [MySQL](https://dev.mysql.com/doc/mysql-errors/8.0/en/server-error-reference.html) for more info. For example, [ERROR 1146 (42S02)](https://dev.mysql.com/doc/mysql-errors/8.0/en/server-error-reference.html#error_er_no_such_table) means the table doesn't exist.
        1. A five-character `SQLSTATE` value. The value are taken from ANSI SQL and ODBC and are more standardized.
        1. A message string - textual description of the error. 
    1. In this case, as we have multiple lines ended with semi-column and should indicate to MySQL that it's not the end of the code. Therefore, we can change `DELIMITER` from `;` to `$$` and put double dollar signs at the end of the code and then change `DELIMITER` back to semi-column.
    ```sql
    USE trigger_demo;

    DROP TABLE users;

    CREATE TABLE users (
        username VARCHAR(100),
        age INT
    );

    DELIMITER $$

    CREATE TRIGGER must_be_adult
        BEFORE INSERT ON users FOR EACH ROW
        BEGIN
            IF NEW.age < 18
            THEN
                SIGNAL SQLSTATE '45000'
                        SET MESSAGE_TEXT = 'Must be an adult!';
            END IF;
        END;
    $$

    DELIMITER ;

    INSERT INTO users(username, age) VALUES ('Bobby', 23);

    SELECT * FROM users; 

    INSERT INTO users(username, age) VALUES ('Sue', 54);
    INSERT INTO users(username, age) VALUES ('Yang', 14);
    ```

## Preventing Instagram Self-Follows with Triggers
1. In this case, we will use the users from instagram clone. We are trying to prevent users to follow themselves on the database side.
    ```sql
    USE ig_clons;

    DELIMITER $$
    CREATE TRIGGER prevent_self_follows
        BEFORE INSERT ON follows FOR EACH ROW
        BEGIN
            IF NEW.follower_id = NEW.followee_id
            THEN
                SIGNAL SQLSTATE '45000'
                SET MESSAGE_TEXT = 'You cannot follow yourself';
            END IF;
        END;
    $$

    DELIMITER ;

    INSERT INTO follows (follower_id, followee_id) VALUES (2, 2);
    ```

## Creating Logger Triggers
1. In this case, we are trying to record the unlike log when users unfollow the other user. This info can be useful for business and marketing analysis to check if there's any problem for certain events or simply reveal the performance of an user. 
    ```sql
    USE ig_clone;

    CREATE TABLE unfollows (
        follower_id INT NOT NULL,
        followee_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
        FOREIGN KEY(follower_id) REFERENCES (users.id),
        FOREIGN KEY(followee_id) REFERENCES (users.id),
        PRIMARY KEY (follower_id, followee_id)
    );

    DELIMITER $$
    CREATE TRIGGER create_unfollow
        AFTER DELETE ON follows FOR EACH ROW
        BEGIN
            INSERT INTO unfollows(follower_id, followee_id)
            VALUES (OLD.follower_id, OLD.followee_id)
        END;
    $$

    /* use SET syntax
    DELIMITER $$
    CREATE TRIGGER trigger_name
        AFTER DELETE ON follows FOR EACH ROW
        BEGIN
            INSERT INTO unfollows
            SET follower_id = OLD.follower_id,
                followee_id = OLD.followee_id,
        END;
    $$
    */

    DELIMITER ;

    DELETE FROM follows WHERE follower_id = 2 && followee_id = 1;

    SELECT * FROM unfollows;
    ```

## Managing Triggers and a Warning
1. We can use several commands to manage the triggers for tables. This is the main reason why we give all triggers a specific name.
1. A note that using triggers can make debugging harder. As the tables are related with more logical actions, it will be more difficult to idenity what is the source of an issue or problem.
    ```sql
    /* list all the triggers on a table */
    SHOW TRIGGERS;

    /* remove trigger */
    DROP TRIGGER trigger_name;
    ```