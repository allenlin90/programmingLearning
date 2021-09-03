# What's the difference between a link tag in HTML and @import in CSS?
Date: 2021/08/31

## Differences
1. `<link>` tag is a XHTML tag which can not only import CSS but define RSS and other features, such as defining favicon on browser tab, while `@import` can only be used in a CSS and import styling from the other CSS.
2. CSS will be loaded with the page when it's imported by `<link>` tag. Styling imoprted by `@import` will be loaded after the page is fully loaded. Therefore, if the internet speed is relatively low, users may see raw HTML without styling and turning into the regular page after the CSS is loaded.
3. `<link>` is a XHTML tag which is available for all versions of browser, while `@import` is introduced by CSS 2.1. Older browsers may not support this feature.
4. `<link>` can be manipulated by Javascript DOM, while Javascript can't directly manipulate styling of a CSS.

## Styling in HTML
1. There are 4 main methods to import CSS and style elements in HTML.
2. Inline CSS
   1. A `style` attribute is added to a HTML element and specify the styling properties.
   2. This has the highest level (most specific) priority in styling.
   3. The approach is not usually suggested, as it's hard to maintain, update, and management. Redudant and duplicate code may be added to multiple HTML elements.
3. `<style>` tag
   1. This approach can be useful when templating a mockup as both HTML elements and styling structure on in the same file.
   2. However, it can be hard to manage in production environment because the styling is only available in the HTML file where it is and can't be exported.
4. `<link>` tag
   1. CSS is imported and applied with `<link>` tag and kept in `<head>` tag in HTML.
   2. This is the most common way to import CSS, as it's easy to maintain and manage since the HTML and CSS is totally separated.
5. `@import` in `<style>`
   1. This approach uses CSS import method to load the external CSS file.

  ```html
  <head>
    <style>
      @import 'main.css';
    </style>
  </head>
  ```

## @import in CSS
1. `@import` is used in CSS to import styling rules from other sheets.
2. To link to an external sheet, we can provide an absolute or relative URL.
3. Imported rules must precede all other types of rules, except `@charset` rules.
4. The default condition for media type is `all` which is not required to specified

  ```css
  @import url("fineprint.css") print;
  @import url("bluish.css") speech;
  @import "common.css" screen;
  @import url('landscape.css') screen and (orientation:landscape);
  @import url('universal.css') all; /* all is not required to specify */
  ```

## <link> tag in HTML
1. A [`<link>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) tag defines the relationship between the current document and an external resource.
2. The tag is usually included in `<head`> tag to import stylesheets using 2 critical attributes, `href` for the path of the external file and `rel` (relationship) to the file.
3. Though a `<link>` tag can be used in `<body>` tag as well if the type of media is "body-ok", it's not a good practice to follow. It's suggested to put `<link>` in `<head>` tag.
4. `<link>` tag has several other attributes such as
   1. `type` indicates the [`MIME`]((https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) type of the resource being linked.
   2. `sizes` indicates the size of the icon image being imported. 
   3. `media` specifies the media that the linked resource applies to. Its value must be a [media type]((https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) / [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).
   4. Check [other attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attributes)
5. The external resource will only imported when the media condition is true.
  
  ```html
  <link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
  ```

## Reference
1. MDN
   1. [<link>: The External Resource Link element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
   2. [MIME types (IANA media types)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
   3. [Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
   4. [@import](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)