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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cupiditate itaque possimus numquam corporis odit deserunt voluptas repellat ad ex earum magnam mollitia magni eaque nisi, excepturi nam
            temporibus! Sed. <br/>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia totam accusantium officiis!
            </p>
          </div>
          <!-- Article Two -->
          <div class="article">
            <h3>Article Two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia totam accusantium officiis!
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
### Implementing CSS 
1. There are several ways to implement CSS on the HTML file. 
    1. We can use "**inline**" CSS in the element tag directly with `style` attribute. This is not recommended as it's hard to read, and it's easier to mangage and maintain the code with a separated file. 
    1. Use `<style>` tag in `<head>` tag on the top and include the CSS selectors with styling. 
    1. Use `<link>` tag to refer to a separated file with 2 attributes `rel` (which indicates the type of the file to refer to, and we use `rel="stylesheet"` for CSS file) and `href` which is the path reference to point to the file to link to. If the CSS file `style.css` is at the same direcotry, we can use `href="style.css"`. Therefore, we can put 
    `<link rel="stylesheet" href="style.css">` in `<head>` tag. 
1. A CSS selector includes several parts. For example, we have a selector to select element "**a**" in HTML file and set its "**background-color**" to "<span style="color:yellow">yellow</span>". 
    ```css 
    a {background-color: yellow;}
    ```
    1. "selector" which is `a` 
    1. Declare the "**property**" and "**value**" pair in curly braces "`{}`". 
    1. Pair and separate "**property**" and "**value**" with a column "`:`" 
    1. Use semi-column "`;`" to separate declarations in the block. 
1. We can add CSS comments with `/*CSS comments*/` which is the same as multi-line comments in JavaScript. 

### Basic CSS selectors 
1. Selector will select all the tags (elemnets) that matches. For example, if we select `<p>` tag, all the `<p>` paragraphs will be selected and modified. 
1. We can give a tag attribute `id`, so it can be selected directly by the selector with certain attribute. 
    1. For exmple, if we have 2 `<h2>` tags on the page but want to select only the first one, we can give an `id` and set the element as `<h2 id="greenColor">` and use CSS selector to modify its contents to <span style="color:green">green</span>. Therefore, only the `<h2>` tag that has attribute `id="greenColor"` will be colored green. 
    1. In convention, `id` attribute is unique for elements. Therefore, we can omit `<h2>` tag and use pound sign "#" to select the element with `id` direclty. 
    1. Note that the element with an attribute should be concatenated without space in between. 
    ```css
    h2#greenColor {
        color: green; 
    } 

    #greenColor {
        background-color: red; 
    } 
    ```
1. **ID and class selector** - Since `id` is unique attribute, we can use `class` instead if we want to reuse the styling. The selector symbol for a `class` is a dot "`.`". 
    ```css
    .aClass {
        color: blue;
    }
    ``` 
1. Naming for the class is essential as it may be confusing for certain purpose, though there's no concrete way for that as it should be changed accordingly. 
1. **Multiple Selectors** - We can put several tags as in selector to modify multiple elements at the same time. We can use comma "`,`" to separate the selectors before the declaration with curly braces. 
    ```css
    #element1, #element2, #element3 {
        border: 1px solid #ccc; 
        padding: 10px; 
        margin-bottom: 5px; 
    }
    ```
1. **Nested Selectors** - This indicates an element that is nested (or the child element) of another element. The selector is reading from left-to-right and separated by whitespace. Therefore, the last element on the right is the element that is nested and to be modified by the selector. Note that all elements that match the selector conditions will be selected and modified. 
    ```css
    /* <span> tag nested in the element that has id="element1" will be colored purple */ 
    #element1 span {
        color: purple; 
    }
    ```
### Fonts in CSS 
1. We can use `<link>` tag to import font family from other source such as Google fonts. After imoprting, we can have `font-family` property in CSS selector and change the font to desirable style. For example, we import `roboto` style with weight 400 and 700 from Google fonts. Besides, font-family is for the whole content of the page, so we can put it in the body element directly. 
    ```css 
    body {
        font-family: 'roboto';
    }
    ```
1. We can also adjust the `font-size` and `line-height` of the contents. There are several units in CSS that we can set. 
    1. <ins>**Aboslute units**</ins> on the page, while we usually se only `px` to set the value. 
        1. `cm` is centimeters. 
        1. `mm` is millimeters. 
        1. `in` is inches. 
        1. `px` is pixels, which is around 1/96th of 1 inch. 
        1. `pt` is points, which is around 1/72th of 1 inch.
        1. `pc` Picas picas, which is 12pt. 
    1. <ins>**Relative units**</ins> are related to other elements such as <ins>**parent**</ins> or <ins>**root**</ins> element. 
        1. `%` is the percentage to <ins>**parent**</ins> element.
        1. `em` refers to font-size of <ins>**parent**</ins> element. 
        1. `rem` refers to font-size of <ins>**root**</ins> element, which is 16px by default. 
        1. `vw` refers to 1% of viewport width. 
        1. `vh` refers to 1% of viewport height. 

### Color types 
1. There are 3 main types of ways to call a color 
    1. **Color name** such as <span style='color:red'>red</span>, <span style='color:blue'>blue</span>, <span style='color:yellow'>yellow</span>, and <span style='color:cyan'>cyan</span>
    1. **RGB numbers** for Red, Green, and Blue from 0 to 255 (256 units of each), such as <span style='color:rgb(0,255,0)'>green</span> by `rgb(0,255,0)`, <span style='color:rgb(0,0,0)'>black</span> by `rgb(0,0,0)`, and <span style='color:rgb(255,255,255)'>white</span> by `rgb(255,255,255)`.
    1. **Hex number** starting with a pound sign "#", such as <span style='color:#f4f4f4'>grey</span> by `#f4f4f4`, which color is usually used for background color for textarea, <span style='color:#000000'>black</span> by `#000000`, or <span style='color:#fff'>white</span> by `#fff`. Note that in computer science, hexadecimal is from 0 to f, which is 16 digits (0 to 9 and 'a' to 'f'). 
1. In VSCode IDE, the program shows color selector if we put a pound sign "#" in CSS file. Besides, we can also check the hexadecimal code on website, such as [color-hex](https://www.color-hex.com/). 

### Backgrounds and borders  
1. We can give properties in CSS selector to chagne the styling such as background color and give a border to the element. 
1. **Background color** can be changed by property `background-color` and give by a color in `color name`, `rgb()`, or `hex`. 
1. **Border** can be set up with 3 parameters, `width`, `color`, and `style`. Note that we need all 3 to make the border styling up. The usual border style to be used is `solid`. There are other styles, such as `dashed`, `inset`, `outset`, and `dotted`. Besides, we can use `border` property and have all 3 parameters in one line (regardless of the order of parameters). 
1. The border wraps up an element on its 4 sides from `top`, `right`, `bottom`, and `left`. We can also set each them in different style for an element. 
1. We can round the border on the corner of an element with `border-radius`. We can also round one of the corners with `border-top/bottom-left/right-radius`, such as the top left corner as `border-top-left-radius: 10px`. 
    ```css 
    /*border property in 3 separated parameters*/
    element {
        border-width: 3px; 
        border-color: red; 
        border-style: solid; 
    }
    /*border property in one line*/
    div {
        border: 5px blue dashed; 
    }
    /*border on each side of an element*/
    div element {
        border-top: blue solid 6px; 
        border-right: green dashed 6px; 
        border-bottom: red dotted 6px; 
        border-left: cyan inset 6px;
    }
    /*round border on the corner of an element*/
    roundCorner {
        border-radius: 10px; 
    }

    /*round border on one of the corners of an element*/
    oneCorner {
        border-top-left-radius: 1em; 
    }
    ```
1. **Background image**
    1. **Background image** - We can use `background-image: url('path')` property to set up the background image with local file or online URL link. For example, we can refer to a local file that stores in the folder `img`. 
    1. **Background repeat** - As the image has a certain size, we can set up to repeat the image if it's smaller than the section it covers (though it's not a good idea). Thus, we can turn off the feature with `background-repeat: no-repeat`. 
    1. **Background position** - If the image is larger than the section it covers, or we want certain part of the picture to be shown in the element block, we can use `background-position: x-axis y-axis` to position the image. The values of the position can be 
        1. Positive that it pushes the image from left-to-right on x-axis and top-to-bottom on y-axis. 
        1. Negative on both x-axis and y-axis that pushes the image from "right-to-left" and "bottom-to-top" and shows different part of the image. 
        1. Relative positions such as `center`, `bottom`, `top`, `left`, and `right`. 
    1. `background-size` is default at `auto` which shows the original size of the image and can be set up as `cover` through `background-size: cover` that the background image will be stretched and fit to the width of the background covering area. For `contain` the image will only cover the background at the size without distorting the image. It means that the image will be fully visible at any resolution. We can also set it by percentage which scales the image by the size of the element that contains it.
    ```css
    body {
        background-image: url('./img/background.png');
        background-repeat: no-repeat; 
        background-position: -10px 100px;
        background-size: cover; 
    }
    ```
1. We can also put all the background properties in the same line as `border`. As other selectors the values can be in any order except that `size` property must be followed by `position` proerty with a slash `/`.
1. As the background image will be at set up position on the page and goes away if we scroll the page when browsing. We can use `background-attachment: fixed` to keep the image at certain position on the page. 
    ```css 
    body { 
        background: url('icon.png') center center no-repeat;
        background-size: 20%;
        background-attachment: fixed;
    }
    ```

### Box model, margin, and padding 
1. Each HTML element has different `margin` and `padding` by default. Any given new properties or values will override the default value setting, while we can check in the developer console in the browser. 
1. Both spaces will add space on 4 sides of an element if it's not specified. It can also be added as border that on `top`, `right`, `bottom`, and `left`. 
1. The values can also be given in one line as a shorthand which follows the order from `top` to `left` clockwise. Thus, the `margin` or `padding` property takes 4 values in order. 
1. The shorthand can be even shorter as the top/bottom and left/right can be paired if the values are the same (which is similar to the idea that given one value and applies to 4 sides). The property takes only 2 values which follows the order `top/bottom` and `left/right`. 
    ```css 
    /* one line shorthand */
    div {
        padding: 10px 20px 30px 40px; 
    }

    /* top/bottom and left/right shorthand*/
    div {
        margin: 30px 20px; 
    }
    ```
1. We can reset the CSS file with "asterisk" "`*`" as the selector, which is a wild selector that selects everything. 
1. **Padding** - Padding is the space inside the border of an element. It's the <span style="color:green">green</span> part of an element if we check it in the developer tools of Google Chrome browser. 
    1. Set up `padding` of an element directly will extend the size of the element as well. To prevent that, we can use `box-sizing: border-box` to the parent element of which element that adds the `padding`, so the extra space will be limited to the setup width and height of the element. 
    1. It means the that element which adds padding will <ins>**remain the same size**</ins> and adds padding inside. However, this may distort the element if the scale is not correct. Besides, if there's no limitation on `width` and `height`, the element will still be streched by `padding`. 
    ```css 
    /*reset all elements on the page*/
    * {
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    } 
    /*element is not going larger as its limited by box-sizing of its parent element*/
    element {
        padding: 120px
    }
    ```
1. **Margin** - Margin is the space out of the border of an element. It's the <span style="color:orange">orange</span> part of an element if we check it in the developer tools of Google Chrome browser. 