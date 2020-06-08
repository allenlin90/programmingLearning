# HTML Basics 
### Meta tags and search engines
1. We have `<meta>` tags to declare the HTML file that it is responsive to the device, as the content attribute is set up to `content="width=device-width, initial-scale=1.0"`. Besides, there are several meta data we can put in the `<head>` tag for search engine to parse, such as "discription" and "keyword".
    ```html
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    ```

### Heading, paragraphs, and typography 
1. In convention, we put only 1 `<h1>` tag on a page. 
1. `<strong>` tag is to make text bold, and `<em>` tag (emphasis) is to make the text italic. 
1. `<br>` tag is to have a "**line break**" (a new line between paragraphs). One `<br>` tag is like a new line character `\n`. To have a line between 2 paragraphs, we need 2 `<br>` tags to fulfill. 
1. `<hr>` tag is "horizontal rule" to have a horizontal line on the page. 
1. After HTML5, the language becomes more semantic and use `<strong>` tag rather than `<b>` tag for bold feature. However, styling features should be separated and use with CSS. The point to have `<strong>` tag is to indicate that the text is import and should stand out. 

### Links, images, and attributes 
1. Anchor tags `<a>`
    1. We put "href" attribute in `<a>` anchor tag to direct the user to the given URL after clicking. 
    1. We can put both "<ins>**URL**</ins>" (remote) and "<ins>**file path**</ins>" (local) to "href" attribute to direct to the HTML file. 
1. Image tags `<img>` 
    1. These tags are similar to anchor tags that they can take both "<ins>**URL**</ins>" (remote) and "<ins>**file path**</ins>" to their "<ins>**src**</ins>" (local) attribute. 
    1. Besides, `<img>` tags have another attribute `alt` which is the "<ins>**alternative text**</ns>" when the image doesn't show up. The tag shows the image's original size in default. 

### Lists and tables 
1. **Lists** 
    1. "**Unordered list**" - We have `<li>` tags wrapped by `<ul>` tags. Besides, there are several styles of unordered list bullet-symbols that we can use inner style or CSS to change it, such as `square`, `disk`(default), `circle` (unfilled circle, empty inside), and `none`. 
    ```html
    <ul style="list-style: square">
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
    </ul>
    ``` 
    1. "**Ordered list**" - Ordered list are wrapped by `<ol>` tags and use `<li>` tags as unordered list does. However, it uses attribute as "**type**" to change the style, such as "1" for numerals (default type), "i" and "I" for roman numerals in lower and uppercase, and "a" and "A" for alphabets in lower and uppercase. 
    ```html
    <ol type="A">
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
        <li>Item4</li>
    </ol>
    ```
    1. We can also have `<ul>` or `<ol>` nested in the `<li>` for nested tags. 
1. **Tables** 
    1. Tables are usually just used for tabular data. For table like layout on the page, it's better to use CSS flexbox or grid for the feature. We use `<table>` tags to create a table with following elements. 
    1. `<thead>` is the header section of the table. 
        1. `<tr>` is for the row.
        1. `<th>` is for each column in the row.
    1. After header, we can include the main data with `<tbody>`. 
        1. `<tr>` is for the row in the body part. 
        1. `<td>` for the data in the body part, while `<th>` is for the header only. 
    ```html
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>jdoe@gmail.com</td>
            </tr>
            <tr>
                <td>Kate</td>
                <td>Smith</td>
                <td>kate@gmail.com</td>
            </tr>
            <tr>
                <td>Jeff</td>
                <td>Wilson</td>
                <td>wilson@gmail.com</td>
            </tr>
        </tbody>
    </table>
    ```

### Forms and input 
1. We use `<form>` tag which has attribute as `action` that can manipulate the data collected from the form elements with backend program, such as `process.js` or `process.py`. 
1. In the form, we can use `<div>` tag to create a division for the section of an input. 
1. All `<input>` tags have an attribute `value` which we can set a default value in the textbox or be selected when the page is loaded. 
1. We can use `placeholder` attribute of `<input>` tags to give hint of the type of the data requested to the user. The text is in grey by default and will disappear when any value or character is given to the `<input>` tag. 
    1. In the division, we use `<label>` with attribute `for` which will link to the `<input>` tag that has the an `id` which is the same value as the value for `for` and the name for the input tag. 
    1. After the `<label>` tag, we have an `<input>` tag to collect data from users. We can set up `type` for the type of data to collect of the input element, `name` as the variable which can be parsed and retrieved by backend programs, and `id` of which has the same value as the `for` in `<label>` tag can link them together. 
    1. We can set the `type` of `<input>` tag as "**text**", "**password**" (which input will be masked), and "**email**" that has a simple validation of data pattern on the client side (We can use other mechanism or program to validate email addresses on the backend side). 
    1. We can use `<textarea>` to have a large input section for multiple lines on the page. The element has similar attributes and have `cols` as columns to modify the width of the textbox and `rows` as rows to modify the height of the textbox. 
    1. `<select>` tag is a dropdown menu which we can have multiple `<option>` tags as the items in the selective list. Note that we should set up the attribute `value` for the value of the `<option>` tag. Besides, we can have one of the `<option>` has attribute `selected`, so the option will be in default when the page is loaded. 
    1. If the `type` of `<input>` tag is number as `type="number"` the tag takes only numbers and can be adjusted with a side button. 
    1. With `type="date"`, we can have a "**date selector**" to ensure the user gives a valid date format. 
    1. With `type="radio"`, we can have a single option selector with different values. Note that the radio button itself is an `<input>` tag, while the option is just a pure text in HTML. Therefore, we can have several `<input>` tags to have multiple options as radio buttons to select. Besides, if we set `<input>` tag attribute `checked`, the option will be selecgted when the page is loaded as default value. 
    1. With `type="checkbox"`, we can have checkboxes as multiple selections that is similar to radio buttons. 
    1. To create a "**submit**" button, there are several ways to do so. For example: 
        1. Use input tag - `<input type="submit" value="Submit">` 
        1. Use button tag - `<button type="submit">Submit</button>` 
    1. We can use `<button type="reset">Reset</button>` to clear all the inputs in the same form as default value when the page is loaded. 
    ```html
    <form action="#">
        <!-- text -->
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="First and Lastname">
        </div>
        <br>
        <!-- email -->
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>
        <br>
        <!-- textarea -->
        <div>
            <label for="message">Message</label>
            <textarea name="message" id="message" cols= "20" rows="5"></textarea>
        </div>
        <br>
        <!-- select -->
        <div>
            <label for="sex">Sex</label>
            <select name="sex" id="sex">
                <option value="male" selected>Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
        <br>
        <!-- number -->
        <div>
            <label for="age">Age</label>
            <input type="number" name="age" id="age">
        </div>
        <br>
        <!-- date -->
        <div>
            <label for="birthdate">Birthdate</label>
            <input type="date" name="birthdate" id="birthdate">
        </div>
        <!-- radio -->
        <div>
            <label for="membership">Membership</label>
            <input type="radio" name="membership" id="membership" value="simple"> Simple 
            <input type="radio" name="membership" id="membership" value="standard" checked> Standard 
            <input type="radio" name="membership" id="membership" value="super"> Super 
        </div>
        <!-- checkbox -->
        <div>
            <label for="membership">I Like...</label>
            <input type="checkbox" name="likes"  value="bike"> Bike 
            <input type="checkbox" name="likes" value="car" checked> Car 
            <input type="checkbox" name="likes" value="boat"> Boat 
        </div>
        <!-- buttons -->
        <input type="submit" value="Submit">
        <!-- <button type="submit">Submit</button> -->
        <button type="reset">Rest</button>
    </form>
    ```
1. Note that after clicking the submit button, an action is trigerred that all the input will be submitted or hanlded by a backend program if there's any. It means both "submit" and "reset" to a format works the same that it wipes out all the inputs, while "submit" can have an action to send the data to other programs. 

### Block and inline level elements 
1. We can check the overview at [w3school](https://www.w3schools.com/html/html_blocks.asp)
1. The main difference between "block" and "inline" elements is that block elements will separate themselves into a "block" as a section or paragraph of an article. This makes the element fills the whole width of the screen according to the size fo the monitor. For example, `<p>` tags and `<ul>` and `<li>` tags. 
1. "inline" element, on the other hand, follow each other as a concatenated chain in the same line. For example, `<a>` anchor tags and `<strong>` tags. 
1. We can use CSS to change the attribute to make an element appears as a "block" or "inline" element. 

### Divs and spans, classes, and IDs
1. We can have `<div>` tags to wrap elements in the same block. `<span>` is to group elements in the same line. 
1. "`id`" should be set to a single element in HTML file, while a "`class`" can be assigned to multiple elements at the same time. In convention, an "`id`" shouldn't repeat. 
1. `&copy;` is the © (copyright) symbol in HTML that we can call. There are other symbols we can use as well. 
    ```html
    <div id="main-header" class="card">
        <h1>My Website</h1>
        <p>A site about me</p>
    </div>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <div id="about" class="card">
        <h3>About</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span class="enhance">Nesciunt deleniti rem nobis dolor unde maiores perferendis molestiae saepe libero </span> suscipit beatae dicta a voluptas, <div class="enhance">obcaecati reprehenderit corporis</div> eaque impedit ad!</p>
    </div>

    <div id="contact" class="card">
        <h3>Contract Me</h3>
        <ul>
            <li>Address: 50 Main st, Boston MA</li>
            <li>Phone: 123-456-7890</li>
            <li>Email: apple@gmail.com</li>
        </ul>
    </div>

    <div id="footer">
        <p>Copyright &copy; 2020</p>
    </div>
    ```

### HTML entities 
1. We can check the list of HTML entities at [w3school](https://www.w3schools.com/html/html_entities.asp). The entities can called by its "**entity name**" or "**numer**". For example, a non-breaking space can be called by `&nbsp` and `&#160` in HTML. 
1. **Non-breaking space** - `&nbsp;` is non-breaking space in HTML that it's a character to represent whitespace in HTML. In default, if we have several white space between text in a `<p>` tag for example, there no different between `<p>I'm happy</p>` and `<p>I'm               happy</p>`, as the browser consider these 2 tags are the same. To have the feature as multiple whitespaces between words, we can use `&nbsp;` such as `<p>I'm &nbsp; &nbsp; &nbsp; &nbsp; happy</p>`. The result will be "I'm     happy" on the page. 
1. **Greater than and Less than** - `&gt;` is the "greater than" sign `>` in HTML, as if we put the character in line directly, so browsers may get confused and rendered wrong result. We can use `&lt;` for "less than" character `<`. 
    ```html
    call HTML entity by entity name 
    5 &gt; 2 
    1 &lt; 3
    call HTML entity by entity number 
    5 &#62; 2 
    1 &#60; 3
    ```
1. `&copy;` for © copyright 
1. `&reg;` for ® trademark 
1. Currency and dollar signs 
    1. `&cent;` for ¢ dollar cents 
    1. `&yen;` for ¥ Japanese Yen 
    1. `&euro;` for € Euros
1. Suit of playing cards 
    1. `&spades;`♠ BLACK SPADE SUIT
    1. `&clubs;` ♣ BLACK CLUB SUIT
    1. `&hearts;`♥ BLACK HEART SUIT
    1. `&diams;` ♦ BLACK DIAMOND SUIT
1. Inline element, computer code tags `<code>`, such as `<code>Hello World!</code>`
1. Inline element, keyboard instructions `<kbd>`, such as `<kbd>Ctrl + S</kbd>` for <kbd>Ctrl + S</kbd>

### HTML Semantic Tags 
1. Each of them represents a section of the webpage. The tags also help search engine and disabled people to understand what's the purpose and part on the page rather than a simple `<div>` tag which has no meaning. 
    1. `<header>` is on the top that has a search bar or other generic buttons. 
    1. `<footer>` is a the bottom that contains copyright, trademark or other information or links of the page. 
    1. `<nav>` is the navigation bar on the top or on the side for users to easier access the services or pages on the website. 
    1. `<main>` is usually the main body and content of the page. However, we can skip this tag and use `<section>` directly. 
    1. `<section>` is similar to `<div>` tag to use to separate elements into section or group elements. 
    1. `<article>` is used for textful elements such as showing part of a blog post rather than using `<p>` tag. 
    1. `<aside>` is the tag to hold elemetns aside the main contents such as advertisemetns or other trivial functions on the page. 
```html
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        * {
          box-sizing: border-box;
        }
  
        ul {
          padding: 0;
          list-style: none;
        }
  
        body {
          font-family: Arial, Helvetica, sans-serif;
          color: #333;
          line-height: 1.4;
        }
  
        #header {
          margin-bottom: 15px;
          background: #333;
          color: #fff;
          padding: 10px;
        }
  
        #main {
          float: left;
          width: 69%;
        }
  
        #sidebar {
          float: right;
          width: 29%;
        }
  
        .clr {
          clear: both;
        }
  
        #footer {
          background: #333;
          color: #fff;
          padding: 10px;
        }
  
        .text-center {
          display: block;
          text-align: center;
        }
  
        .card {
          border: 1px solid #ddd;
          background: #f4f4f4;
          padding: 20px;
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <div id="header" class="card">
        <h1>My Website</h1>
        <p>Just Another Website</p>
      </div>
  
      <!-- Main Content (left) -->
      <div id="main">
        <!-- Welcome Section -->
        <div id="welcome" class="card">
          <h2>Welcome To Our Website</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            cupiditate itaque possimus numquam corporis odit deserunt voluptas
            repellat ad ex earum magnam mollitia magni eaque nisi, excepturi nam
            temporibus! Sed. <br />
            <a href="#" class="text-center">Click For More</a>
          </p>
        </div>
        <!-- Blog Section -->
        <div id="blog">
          <h2>From Our Blog</h2>
          <!-- Article One -->
          <div class="article">
            <h3>Article One</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia
              totam accusantium officiis!
            </p>
          </div>
          <!-- Article Two -->
          <div class="article">
            <h3>Article Two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia
              totam accusantium officiis!
            </p>
          </div>
        </div>
      </div>
  
      <!-- Sidebar (right) -->
      <div id="sidebar" class="card">
        <h3>Navigation</h3>
        <!-- Navigation -->
        <ul id="main-nav">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <hr />
        <h3>Contact Us</h3>
        <ul>
          <li><strong>Address:</strong> 50 Main st, Boston MA</li>
          <li><strong>Phone:</strong> (555) 555-5555</li>
          <li><strong>Email:</strong> me@somethingcool.come</li>
        </ul>
      </div>
  
      <div class="clr"></div>
  
      <!-- Footer -->
      <div id="footer">
        <p class="text-center">Copyright &copy; My Website 2019</p>
      </div>
</body>
```
<img src="semanticTagLayout.PNG">

# CSS Basics 
