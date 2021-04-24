# Table of Contents
1. [Common Used Formulas](#Common-Used-Formulas)
1. [Expression](#Expression)
    1. [Expression Learning Reference](#Expression-Learning-Reference)
    1. [Expressions Topics](#Expressions-Topics)
1. [Reference](#Reference)

# Common Used Formulas
1. UNIQUEID() = DEC2HEX(RANDBETWEEN(0, 4294967295), 8)

# Expressions
## Expression Learning Reference
1. [Deep-Dive Webinar: Expressions Part 1](https://youtu.be/NoKMn28BYUM)

## Expressions Topics
1. What expressions can do?
    1. Do Math with columns in a Row
    1. Skip Questions
    1. Format Fields
    1. Use Data from Another table
    1. Send Notifications Based on Conditons
    1. Filter Data Out For Specific Conditions
1. Types of Expresssions
    1. YES/NO Expresssions
    1. Math Expressions
    1. Date and Time Expressions
    1. List Expressions and Aggregates
1. Built-in Functions
    1. Time based 
        1. NOW()
        1. TODAY()
        1. TIMENOW()
    1. Useflow based 
        1. HERE() - current location of the user from device GPS (require app permission)
        1. USERNAME() - current username
        1. USEREMAIL() - current user email
        1. UNIQUEID() - a randoom string created as unique value
    1. Function based 
        1. ISBLANK()
        1. CONCATENATE()
        1. LEN()
        1. IF()
1. Use Cases 
    1. Fetch data from other tables with `Look Up`
    1. Create a Dropdown with `Valid_If`
    1. Fun with App formulas
    1. Skip a question with `Show_If`
    1. Change the color of a row with Conditional Formatting

# Reference 
1. Overall 
    1. [Create Business Applications with AppSheet](https://www.udemy.com/course/create-business-applications-with-appsheet/)
1. Sepcific Features
    1. [App Navigation / Custom Menu Page with Advanced Deep Link Expressions](https://youtu.be/zrM1_gzsBl4)
    1. [Automated Document Generation in AppSheet](https://youtu.be/dDyO9f9wEeo)

OR(IN(USEREMAIL(), SELECT(warehouse_operator[email], [eridu_staff] = true)), IN(product_sku_code, SELECT(vendor_product_access[access_products], [email] = USEREMAIL())))