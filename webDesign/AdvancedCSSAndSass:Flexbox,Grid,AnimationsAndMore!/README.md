Start learning on 2021/03/24
Finished on 

Course Link [https://www.udemy.com/course/advanced-css-and-sass/](https://www.udemy.com/course/advanced-css-and-sass/)
---
1. [Natours Project - Steup and First Steps](#Natours-Project---Steup-and-First-Steps)
    1. [Project Overview](#Project-Overview)
    1. [Building the Header - Part 1](#Building-the-Header---Part-1)
    1. [Building the Header - Part 2](#Building-the-Header---Part-2)
    1. [Building a Complex Animated Button - Part 1](#Building-a-Complex-Animated-Button---Part-1)
    1. [Building a Complex Animated Button - Part 2](#Building-a-Complex-Animated-Button---Part-2)
1. [How CSS Works: A Look Behind the Scenes](#How-CSS-Works:-A-Look-Behind-the-Scenes)
    1. [Three Pillars of Writing Good HTML and CSS](#Three-Pillars-of-Writing-Good-HTML-and-CSS)
    1. [How CSS Works Behind the Scenes: An Overview](How-CSS-Works-Behind-the-Scenes:-An-Overview#)
    1. [How CSS is Parsed, Part 1: The Cascade and Specificity](#How-CSS-is-Parsed,-Part-1:-The-Cascade-and-Specificity)
    1. [How CSS is Parsed, Part 2: Value Processing](#How-CSS-is-Parsed,-Part-2:-Value-Processing)
    1. [How CSS is Parsed, Part 3: Inheritance](#How-CSS-is-Parsed,-Part-3:-Inheritance)
    1. [Converting px to rem: An effective Workflow](#Converting-px-to-rem:-An-effective-Workflow)
    1. [How CSS Renders a Website: The Visual Formatting Model](#How-CSS-Renders-a-Website:-The-Visual-Formatting-Model)
        1. [The Box Model](#The-Box-Model)
        1. [Box Types](#Box-Types)
    1. [CSS Architecture, Components and BEM](#CSS-Architecture,-Components-and-BEM)
    1. [Implementing BEM in the Natours project](#Implementing-BEM-in-the-Natours-project)

---
#-Natours Project - Setup and First Steps
## Project Overview
1. Put the link of final builtup here after finishing practicing
1. Use pure CSS without JavaScript to create the following effects
    1. A "**Hover Effect**" that the card flips when the user put the cursor on the element. 
    1. A whole page "**Pop up**" when user clicks an element. 
    1. "**Playing video**" as background.
    1. A modern look "**Form**" that the placeholder in the input will "**slide down**" when the user tries to input something.
    1. A fixed menu bottom on the top and creates a whole page menu list when the user clicks it.

## Building the Header - Part 1
1. Learning targets
    1. The best way to perform a basic reset using the universal selector
    1. How to set project-wide font definitions
    1. How to clip parts of elements using `clip-path`
1. Universal reset is used to be essential to set up the initial configuration for a project. However, this process is not necessary as modern brwosers has been better for this issue. 
1. Note that setting for "**fonts**" in the parent elements will be passed down to all its child elements.
    ```css
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Lato", sans-serif; /* we have imported the font in HTML already*/
        font-weight: 400;
        font-size: 16px;
        line-height: 1.7; /* line height is different */
        color: #777;
        padding: 30px;
    }
    ```
1. Background image for header tag.
    1. [`background-size`](https://www.w3schools.com/cssref/css3_pr_background-size.asp) is set to `cover` to ensure the image fits to the size of its container.
    1. [`background-position`](https://www.w3schools.com/cssref/pr_background-position.asp) sets the starting position of a background image. By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
    1. We can stack up elements for background images and separate teh given elements with comma `,`. 
    1. As we want a filter made [`linear-gradient`](https://www.w3schools.com/css/css3_gradients.asp) with `Light green: #7ed56f` and `Medium green: #55c57a`. Besides, we can set the direction as `right bottom`, so the gradient will start from top left to bottom right.
    1. We can use [`clip-path`](https://www.w3schools.com/cssref/css3_pr_clip-path.asp) to set the image as `polygon`, such as triangle or pentagon. Besides, we can use [https://bennettfeely.com/clippy/](https://bennettfeely.com/clippy/) to help setting up the shape. 
    ```css
    .header {
        height: 95vh;
        background-image: linear-gradient(
            to right bottom, 
            rgba(126, 213, 111, 0.8), 
            rgba(40,180,131,0.8)), 
            url(../img/hero.jpg);
        background-size: cover;
        background-position: top;
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }
    ```
    <img src="images/clip-path_polygon.png">

## Building the Header - Part 2
1. When we align elements to each other, we can set the parent elemetn as `position: relative`, and its child to be `position: absolute`. We then can use `top`, `left`, `right`, `bottom` properties to set the position of the element according to its parent. 
1. This `position: absolute` property is setting to the element to its parent element. The left edge of the nested element will be on the center of the parent element. This effect makes the element looks shifted futher than the center point. The middle of the nested element IS NOT at the center of its parement element.
    <img src="images/absolute50PercentWithoutTranslate.png">
1. In this case, we can use `transform: translate` to push the element back to the middle. `translate` is the property that shift from the center of the selected element. 
1. For example, if a 250px-wide block element is nested in a 500px-wide element, the left edge will be right at the middle of its container when using `position: absolute`, `top:50%`, and `left: 50%`. Thus, we can use `transform: translate` to shift the element half of its own width, which is `125px`. The element will then looks exactly at the middle of the container.
    ```css
    .logo-box {
        position: absolute;
        top: 40px;
        left: 40px;
    }

    .logo {
        height: 35px;
    }

    .text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .heading-primary {
        color: #fff;
        text-transform: uppercase;
    }

    .heading-primary-main {
        display: block;
        font-size: 60px;
        font-weight: 400;
        letter-spacing: 35px;
    }

    .heading-primary-sub {
        display: block;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 17.4px;
    }
    ```
    <img src="images/absolute50PercentWithTranslate.png">
    
1. We can use `@keyframes` to create animations. The percentage in the keyframes means the stage of the animation during process that we can set the element in different conditions, location, or shape. There are some frequent use property though we can put them in one line as `animation`.
    1. `animation-name`
    1. `animation-duration`
    1. `animation-timing-function`
    1. `animation-duration`
    1. `animation-delay`
    ```css
    .heading-primary {
        color: #fff;
        text-transform: uppercase;

        backface-visibility: hidden;
    }

    .heading-primary-main {
        display: block;
        font-size: 60px;
        font-weight: 400;
        letter-spacing: 35px;

        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        
        /* animation-iteration-count: 3; */
        /* animation-delay: 1s; */
    }

    .heading-primary-sub {
        display: block;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 17.4px;

        animation: moveInRight 1s ease-out;
    }

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-100px);
        }

        80% {
            opacity: 1;
            transform: translateX(10px);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes moveInRight {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }

        80% {
            opacity: 1;
            transform: translateX(-10px);
        }

        100% {
            transform: translateX(0);
        }
    }
    ```
    <img src="images/8-moveInAnimation.gif">

## Building a Complex Animated Button - Part 1
1. Learning targets 
    1. What pseudo-elements and pseudo-classes are
    1. How and why to use the `::after` pseudo-element
    1. How to create a creative hover animation effect using the `transition` property.
1. We use pseudo selector to modify an element when the user interacts with it.
    1. `link` - The original state of an anchor tag, usualy styled with underline and deep blue color.
    1. `visited` - The state of an anchor tag after visited, usually turned from deep blue to purple. 
    1. `hover` - This triggers when the mouse cursor hovers on the element. 
    1. `active` - This triggers when the user clicks or tap on the element with touch screen.
1. To center an `inline-block` element, we can set `text-align: center` on its container to put the element in the middle.
    ```css
    .btn:link,
    .btn:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100px;
        transition: all .2s;
    }

    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }

    .btn:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    }

    .btn-white {
        background-color: #fff;
        color: #777;
    }
    ```
    <img src="images/8-buttonAnimation.gif">

## Building a Complex Animated Button - Part 2
1. We can use pseudo element `::after` to create a virtual element like the child element of the selected element. 
1. To use the feature, it must have `content` property which can be set as empty string. The element won't work without this proerty. 
1. The pseudo element has its `width` and `height` inherited from the parent. THerefore, we can set the properties both to `100%` to match the size of its parent which is the element with `.btn` class.
    ```css
    .btn::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
    }
    ```
1. If we'd like the pseudo element overlay on each other, we can use `position: absolute` to set the position. Note that the parent element should have `position: relative` to enable absolute feature. Besides, we set `z-index: -1` to put the pseudo element behind the parent element as the background. 
    ```css
    .btn:link,
    .btn:visited {
        position: relative;
    }
    .btn::after{
        position: absolute;
        top: 0;
        left:0;
        z-index: -1;
    }
    ```
1. As we may have different color for the background of the pseudo element according to the class, we can change color by the class. In this case, we give the background color on `btn-white`. 
1. We'd like the effect to expand or scale up the element when the user hovers the cursor on top of the element. We can use `.tn:hover::after` to assign certain properties when the element gets hovered on. 
1. We change the `opacity: 0` to make the element looks transparent. 
1. We then can set up `transition: all .4s` to its parent element which is `.btn::after` for the animation. 
    ```css
    .btn::after {
        transition: all .4s;
    }

    /* assign color by class with name rather than the universal btn class */
    .btn-white::after { 
        background-color: #fff;
    }

    .btn:hover::after {
        transform: scaleX(1.5) scaleY(1.6);
        opacity: 0;
    }
    ```
    <img src="images/10-buttonHoverEffect.gif">
1. To create the animation to let the button floating up, we can use `@keyframes` for animations as we do for the titles `moveInLeft` and `moveInRight`. However, the element is in the HTML file and is at the original place before the animation starts.
    <img src="images/10-without_animatino_fill_mode.gif">
1. To prevent the effect, we can use [`animatino-fill-mode`](https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp) that the element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period.
    ```css
    @keyframes moveInBottom {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }

        100% {
            transform: translateX(0);
        }
    }
        
    .btn-animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    }
    ```
    <img src="images/10-animatino_fill_mode_backwards.gif">



# How CSS Works: A Look Behind the Scenes
## Three Pillars of Writing Good HTML and CSS
1. Responsive Design 
    1. Fluid layouts
    1. Media queries
    1. Responsive images
    1. Correct units
    1. Desktop-first vs mobile-first
1. Maintainable and scalable code
    1. Clean
    1. Easy-to-understand
    1. Growth
    1. Reusable
    1. How to organize files
    1. How to name classes
    1. How to structure HTML
1. Web Performance
    1. Less HTTP requests
    1. Less code
    1. Compress code
    1. Use a CSS preprocessor
    1. Less images
    1. Compress images

## How CSS Works Behind the Scenes: An Overview
1. What happens to CSS when we load up a webpage
    1. Load HTML
    1. Parse HTML to have DOM (Document Object Model)
    1. Load CSS
    1. Parse CSS to have CSSOM (CSS Object Model)
        1. Resolve conflicting CSS declaration (cascade)
        1. Process final CSS values
    1. After having both "DOM" and "CSSOM", we will have "Render Tree"
    1. Website rendering tehvisual formatting model
    1. Final rendered website
    <img src="images/13-how_css_work_behind_the_scenes.png">

## How CSS is Parsed, Part 1: The Cascade and Specificity
1. The ordinary CSS syntax includes "selector" and "declaration block". In the "declaration block", there are "declarations", each of which is composed by "property" and "declared value" that we we want to modify the selected element. 
1. "**Cascade**" represents the "C" in CSS. As CSS can be combined and sourced from different sheets, casacde is an essential feature that it resolves conflicts between different CSS rules and declarations, when more than one rule appleis to a certain element. 
1. When processing the sheet, the engine looks from the following order to decide which decoration to apply to the selected element.
    1. Importance
        1. User `!important` declarations
        1. Author `!important` declarations
        1. Author declarations
        1. User declarations
        1. Default browser declarations
    1. Sepcificity
        1. Inline styles (in HTML file)
        1. IDs
        1. Classes, pseudo-classes, attribute
        1. Elements, pseudo-elements
    1. Source Order 
1. CSS declarations marked with `!important` have the highest priority.
1. However, only use `!important` as a last resource. It's better to use correct specifications, so the code can be more maintainable. 
1. Inline styles will always have priority over styles in external stylesheets. 
1. A selector that contains 1 ID is more specific than one with 1000 classes.
1. A selector that contains 1 class is more specific than one with 1000 elements
1. The universal selector * has no specificity value (0,0,0,0)
1. Rely more on specificity than on the order of selectors
1. But rely on order when using 3rd-party stylesheets - always put the author sheet the last.
1. We can check at this [CSS Specificity Calculator](https://specificity.keegan.st/) to check the score.

## How CSS is Parsed, Part 2: Value Processing
1. CSS values are proceeded in the following process
    1. Declared value (author declaration)
    1. Cascaded value (after the cascade)
    1. Specified value (defaulting, if there is no cascaded value)
    1. Computed value (converting relative values to absolute)
    1. Used value (final calculations, based on layout)
    1. Actual value (browser and device restrictions)
    <img src="images/16-css_value_processing.png">
1. When converting from relative to absolute values, the relative units `em` for **font** is based on the parent element's size, while for "**length**", it is based on the element itself. 
    <img src="images/16-css_relative_to_absolute_value.png">
1. Each property has an initial value, used if nothing is declared.
1. Browsers specify a "root" `font-size` for each page (usually 16px).
1. Percentages and relative values are always converted to pixels.
1. Percentages are measured relative to their parent's `font-size`, if used to specify `font-size`.
1. Percentages are measured relative to their their parent's `width`, if used to specify lengths.
1. `em` are measured relative to their parent `font-size`, if used to specify `font-size`.
1. `em` are measured relative to current `font-size`, if used to specify lengths.
1. `rem` are always measured relative to the document's root `font-size`.
1. `vh` and `vw` are simply precentage measurements of the viewport's `height` and `width`.

## How CSS is Parsed, Part 3: Inheritance
1. Every CSS property must have a value
1. Is there a cascaded value?
    1. Yes - Specified value = Cascaded value
    1. No - Is the property inherited? (specific to each property)
        1. Yes - Specified value = Computed value of parent element
        1. No - Specified value = Initial value (specific to each property)
        <img src="images/17-css_inheritance.png">
1. Inheritance passes the values for some specific properties from parents to children - more maintainable code.
1. Properties related to text are inherited: `font-family`, `font-size`, `color`, etc.
1. The `inherit` keyword forces inheritance on a certain property.
1. The initial keyword resets a property to its initial value.

## Converting px to rem: An effective Workflow
1. Learning targets
    1. How and why to use `rem` units in projects
    1. A great workflow for converting `px` to `rem`
1. We can set the root `font-size` on `html` element the `rem` will be aligned to the given size. 
    ```css
    html {
        font-size: 10px;
    }
    ```
1. When we have `100%` as the `font-size` in `html` element, it uses the default font-size given from the browser. Since the modern browsers are using `16px` as the defulat `font-size`, we can set it as `62.5%` which is `10px` if the defulat is `16px`. This can make the element become responsive according to user's setting.
    ```css
    html {
        font-size: 62.5%;
    }
    ```
1. Besides `font-size`, we can use the power of inheritance on `box-sizing` feature that we can the universal selector for box-sizing `inherit` and `box-sizing: border-box` in `body` tag. 
1. In addition, we'd like all the elements, including virtual ones created from `::bfore` and `::after` to apply the property. We can add those with the universal selectors as well. 
    ```css
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;    
    }

    body {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        /* font-size: 16px; */
        line-height: 1.7;
        color: #777;
        padding: 3rem;

        box-sizing: border-box;
    }
    ```

## How CSS Renders a Website: The Visual Formatting Model
1. The visual formatting model is an algorithm that calculates boxes and determines the layout of these boxes, for each element in the render tree, in order to determine the final layout of the page.
1. The algorithm takes the followings into account
    1. **Dimensions** of boxes: the box model
    1. **Box type**: inline, block, and inline-block
    1. **Positioning scheme**: floats and positioning
    1. **Stacking contexts**
    1. Other elements in the render tree
    1. Viewport size, dimensions of images, etc.

### The Box Model
    1. Content: text, images, etc.
    1. Padding: transparent area aroudn the content, inside of the box
    1. Border: goes around the padding and the content
    1. Margin: space between boxes
    1. Fill area: area that gets filled with background color or background image
    <img src="images/19-box_model.png">
1. Heights and Width in default setting
    1. Total Width = right border + right padding + specified width + left padding + left border
    1. Total Height = top border + top padding + specified height + bottom padding + bottom border
1. If we apply `box-sizing: border-box`, this will include the padding the and border of the element into the specified width and height. 
    1. Total Width = specified width
    1. Total Height = specified height

### Box Types
1. Block-level boxes 
    1. Elements formatted visually as blocks
    1. 100% of parent's width
    1. Vertically, one after another
    1. Box-model applies as showed
    ```css
    html {
        display: block;
        display: flex;
        display: list-item;
        display: table;
    }
    ```
1. Inline boxes
    1. Content is distributed in lines
    1. Occupies only content's space
    1. No line-breaks
    1. No heights and widths
    1. Padding and margins only horizontal (left and right)
    ```css
    html {
        display: inline-block;
    }
    ```
1. Inline-block boxes
    1. A mix of block and inline
    1. Occupies only content's space
    1. No line-breaks
    1. Box-model applies as showed
    ```css
    html {
        display: inline;
    }
    ```
    <img src="images/19-types_of_boxes.png">

### Positioning Schemes
1. Normal flow
    1. Default positioning scheme
    1. NOT floated
    1. NOT absolutely positioned
    1. Elements laid out according to their source order
    ```css
    html {
        position: relative;
    }
    ```
1. Floats
    1. Elements is removed from the normal flow
    1. Text and inline elements will wrap around teh floated element
    1. The container will not adjust its height to the element
    ```css
    html {
        float: right;
        float: left;
    }
    ```
1. Absolute positioning
    1. Element is removed from the normal flow
    1. No impact on surrounding content or elements
    1. We use `top`, `bottom`, `left`, and `right` to offset the element from its relatively positioned container. 
    ```css
    html {
        position: absolute;
        position: fixed;
    }
    ```
    <img src="images/19-positioning_schemes.png">

### Stacking Contexts
1. Though we can set the `position` and `z-index` to stack the elements up in certain context, other properties such as `opacity`, `transform`, and `filter` may create stacking context as well.  
    ```css
    #div_parent {
        position: relative;
    }

    #div3 {
        z-index: 3;
        position: absolute;
    }
    #div2 {
        z-index: 2;
        position: absolute;
    }
    #div1 {
        z-index: 1;
        position: absolute;
    }
    ```

## CSS Architecture, Components and BEM
1. The Think, Build, Architect mindset
    1. Think - Think about the layout of the webpage or web app before writing code
    1. Build - Build the layout in HTML and CSS with a consistent strcuture for naming classes
    1. Architect - Create a logical architecture for the CSS with files and folders
1. Thinking about the layout
    1. Component-driven design
    1. **Modular building blocks** taht make up interfaces
    1. Held together by the **layout** of the page
    1. **Re-usable** across a project, and between different projects
    1. **Independent** allowing us to use them anywhere on the page
1. Building with meaningful class names
    1. BEM stands for Block Element Modifier
    1. Block - standalone component that is meaningful on its own
    1. Element - part of a block that has no standalone meaning
    1. Modifier - a different version of a block or an element
    ```css
    .block{}
    .blocK__element{}
    .block__element--modifier{}
    ```
1. Architecting with files and folders
    1. The 7-1 pattern
    1. 7 different folders for partial Sass files, and 1 main Sass file to import all other files into a compiled CSS stylesheet.
        1. base/
        1. component/
        1. layout/
        1. pages/
        1. themes/
        1. abstracts/
        1. vendors/

## Implementing BEM in the Natours project
1. HTML
    ```html
    <header class="header">
            <div class="header__logo-box">
                <img src="img/logo-white.png" alt="Logo" class="header__logo">
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">outdoors</span>
                    <span class="heading-primary--sub">is where life happens</span>
                </h1>
                <a href="#" class="btn btn--white btn--animated">Discover our tours</a>
            </div>
        </header>
    ```
1. CSS
    ```css
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Lato", sans-serif;
        font-weight: 400;
        /* font-size: 16px; */
        line-height: 1.7;
        color: #777;
        padding: 3rem;

        box-sizing: border-box;
    }

    .header {
        height: 95vh;
        background-image: linear-gradient(
            to right bottom,
            rgba(126, 213, 111, 0.8), 
            rgba(40,180,131,0.8)), 
            url(../img/hero.jpg);
        background-size: cover;
        background-position: top;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    }

    .header__logo-box {
        position: absolute;
        top: 4rem;
        left: 4rem;
    }

    .header__logo {
        height: 3.5rem;
    }

    .header__logo:hover {
        animation: moveInRight 1s ease-out;
    }

    .header__text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .heading-primary {
        color: #fff;
        text-transform: uppercase;

        backface-visibility: hidden;
        margin-bottom: 6rem;
    }

    .heading-primary--main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;

        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        
        /* animation-iteration-count: 3; */
        /* animation-delay: 1s; */
    }

    .heading-primary--sub {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.74rem;

        animation: moveInRight 1s ease-out;
    }

    @keyframes moveInLeft {
        0% {
            opacity: 0;
            transform: translateX(-10rem);
        }

        80% {
            opacity: 1;
            transform: translateX(1rem);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes moveInRight {
        0% {
            opacity: 0;
            transform: translateX(10rem);
        }

        80% {
            opacity: 1;
            transform: translateX(-1rem);
        }

        100% {
            transform: translateX(0);
        }
    }

    @keyframes moveInBottom {
        0% {
            opacity: 0;
            transform: translateY(3rem);
        }

        100% {
            transform: translateX(0);
        }
    }

    .btn:link,
    .btn:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1.6rem;
    }

    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.2);
    }

    .btn:active {
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,0.2);
    }

    .btn--white {
        background-color: #fff;
        color: #777;
    }

    .btn::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left:0;
        z-index: -1;
        transition: all .4s;
    }

    .btn--white::after {
        background-color: #fff;
    }

    .btn:hover::after {
        transform: scaleX(1.5) scaleY(1.6);
        opacity: 0;
    }

    .btn--animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    }
    ```