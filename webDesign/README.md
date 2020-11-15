# Reference
1. [How To Set Up A Print Style Sheet](https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/)
1. [5 Powerful Tips And Tricks For Print Style Sheets](https://www.smashingmagazine.com/2013/03/tips-and-tricks-for-print-style-sheets/)
1. [Designing For Print With CSS](https://www.smashingmagazine.com/2015/01/designing-for-print-with-css/)
1. [Printing a Book with CSS: Boom!](https://alistapart.com/article/boom/)
1. [High-Resolution Image Printing](https://alistapart.com/article/hiresprinting/)

# Webpage layout for printing
## Getting started
1. To style a webpage for printing, we can consider if the webview can be shared for both browsing and printing. In this case, we can use media query `@media print` in CSS to separate regular webview and sheet to print.
1. Some elements can be considered to hide by default such as navigation var, footer, videos, audio, and media that can't be shown on paper work.
    ```html
    <style>
        @media print {
            header nav, footer,
            video, audio, object, embed {
                display: none;
            }
        }

        @media screen {

        }
    </style>
    <link rel="stylesheet" href="css/style.css">
    ```
1. We can take images off from the webpage as they usually bleed off the printing paper due to size. However, if removing images will compromise the meaning, we can limit the size of the image, especially width. For example, `500px` is usually a good compromise size to limit the media. 
1. In addition, we can use `100%` which can also limit the image to the width of the container which is the width of the printing paper in this case. 

## Adjusting to the right size
1. We can add margin all the way around the printing page. Besides, we can set different styles on different pages, such as using pseudo selector to select the first, odd or even pages. 
1. Note that `@page` is not supported in Firefox but mostly other browsers.
    ```css
    @media print {
        @page {
            margin: 0.5cm;
        }

        @page: first {
            margin: 1cm 2cm;
        }

        @page: left { /* odd pages or the left page of a book*/
            margin: 0.5cm;
        }

        @page: right { /* even pages or the right page of a book*/
            margin: 0.5cm;
        }
    }
    ```
1. Most browsers set font type to "**Times New Roman**" as default as "**serif**" fonts are considered to be easier to read on paper. Besides, we can use "**Georgia**" with 12-point font size and slightly higher line height.
1. `12pt` is around `16px` which is the default font-size of most of the browsers. We can check Reed Design - [Approximate Conversion from Points to Pixels](https://reeddesign.co.uk/test/points-pixels.html) for more reference. 
    ```css
    body {
        font: 12pt Georgia, "Times New Roman", Times, serif;
        line-height: 1.3;
    }
    ```

## The Header
1. We can separate the images or other media for different purpose on the page as well. For example, we can have 2 versions fo the logo image on the page. 1 for regular screen browsing, and the other for printing.
1. We therefore can hide the elements for screen browsing and show the elements for printing with CSS.
    ```html
    <a href="/" title="Home" class="logo">
        <img src="img/logo.png" alt="Smashing Winery" class="screen"/>
        <img src="img/logo_print.png" alt="" class="print"/>
    </a>

    <style>
        header h1, header nav, footer, img {
            display: none;
        }
        
        header .print {
            display: block;
        }
    </style>
    ```
1. When building the style sheet, we should be careful that some of the CSS selector doesn't work on old browers such as IE6. Besides, when printing, the program only catches the images in an `<img>` tag without taking the background image. 
1. Note that we can put some information, such as the source URL of the website in the page header for printing. However, this feature doesn't work on IE prior to version 8. In addition, these old browers don't support on HTML 5.
1. We can also put some information before `header` which is styled to be distinguished from the main content.
    ```css
    header:after {
        content: "www.smashing-windery.com";
    }
    
    header:before {
        display: block;
        content: "Thank you for printing our content at www.smashing-winery.com. Please check back soon for new offers on delicious wine from our winery.";
        margin-bottom: 10px;
        border: 1px solid #bbb;
        padding: 3px 5px;
        font-style: italic;
    }
    ```

## The Missing Link
1. Links in anchor tags are obviously becoming useless after being printed on paper. In this case, the `:after` pseudo selector is a good solution to display the URL link right after the element. Besides, we can style and shrink the size of the font to make it less distract to the reading experience.
1. On the other hand, we can choose to hide the internal links which start with pound sign `#`.
1. In addition, we should be careful with the length of external links because some of them can be long enough to break the layout of the page, especially those with special characters such as scripts in non-latin languages. 
1. After all, we can style the link color in black and take off the decoration to make them as regular text. 
1. These same techniques can be used on quotations such as `<blockquote>` and `<q>` tags as well. 
    ```css
    p a[href^="http://"]:after {
        content: " (" attr(href) ")";
        font-size: 80%;
    }

    p a[href^="#"]:after {
        display: none;
    }

    p a {
        word-wrap: break-word;
    }

    a {
        color: #000;
    }

    q:after {
        content: " (Source: " attr(cite) ")";
    }
    ```

### Side by Side
1. If we have sidebar or parallel elements to the main contents, we can use `display: block` to ensure it will not merge to the main content. 
1. We can even give special property for printing `page-break-before` to move the contents of the sidebar to a new page. If we use `page-break-after` the content will be moved to the next page.
    ```css
    aside {
        border-top: 1px solid #bbb;
        margin-top: 30px;
        display: block;
        page-break-before: always; /* speical property for printing */
        
    }
    ```
1. We can also use `widows` and `orphans` properties. The terms derive from traditional printing, and they take numbers as values. The `widows` property sets the minimum number of lines in a paragraph to leave at the top of a page before moving them entirely to a new page. The `orphans` property sets the number of lines for the bottom of the page. The `orphans` and `widows` properties are supported in IE 8+ and Opera 9.2+, but unfortunately not in Firefox, Safari or Chrome.
    ```css
    element {
        widows: 10;
        orphans: 20;
    }
    ```

