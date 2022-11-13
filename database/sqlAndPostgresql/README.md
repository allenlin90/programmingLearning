- [1. SQL Statements](#1-sql-statements)
  - [1.1. Analyzing CREATE TABLE](#11-analyzing-create-table)
  - [Insert data into a table](#insert-data-into-a-table)
  - [Retrieving data with SELECT](#retrieving-data-with-select)
  - [Calculated columns](#calculated-columns)
  - [String operators and functions](#string-operators-and-functions)

---
# 1. SQL Statements
## 1.1. Analyzing CREATE TABLE
1. To create a table we can use `CREATE TABLE` "keyword" following with "identifiers" and given schema.
   1. keywords - Tell the database that we want to do something. Always written out in capital letters.
   2. Identifiers - Tell the database what thing we want to act on. Always written out in lower case letters.

  ```SQL
  CREATE TABLE cities (
    name VARCHAR(50),
    country VARCHAR(50),
    population INTEGER,
    area INTEGER  
  );
  ```
2. `VARCHAR(50)` stands for variable length character, Text! If we put in a string longer than **50** characters, we will get an error. 
3. `INTEGER` is a number without a decimal and in between "-2,147,483,647" and "2,147,483,647". Anything larger or smaller will prompt an error. 

## Insert data into a table
```SQL
INSERT INTO cities (name, country, population, area)
VALUES 
  ('Tokyo', 'Japan', 38505000, 8223),
  ('Delhi', 'India', 28125000, 2240),
  ('Shanghai', 'China', 22125000, 4015),
  ('Sao Paulo', 'Brazil', 20935000, 3043);
```

## Retrieving data with SELECT
```sql
SELECT * FROM cities;
SELECT name, country FROM cities;
SELECT name, population FROM cities;
SELECT name, name, name FROM cities;
```

## Calculated columns
1. We can use `AS` keyword to create a custom column name. 
    ```sql
    SELECT name, population / area AS population_density FROM cities;
    ```

## String operators and functions
1. `||` join 2 strings
2. `CONCAT()` join 2 strings
3. `LOWER()` gives a lowercase string
3. `UPPER()` gives an upper case string
4. `LENGTH()` gives number of characters in a string
```sql
SELECT name || country FROM cities;
SELECT name || ', ' || country AS location FROM cities;
SELECT CONCAT(name, country) AS location from cities;
SELECT CONCAT(name, ', ', country) AS location from cities;
```
