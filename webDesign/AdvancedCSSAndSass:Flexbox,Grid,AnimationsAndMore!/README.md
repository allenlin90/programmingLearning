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

---
# Natours Project - Steup and First Steps
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