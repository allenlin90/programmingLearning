Start learning on 2021/03/24
Finished on 

Course Link [https://www.udemy.com/course/advanced-css-and-sass/](https://www.udemy.com/course/advanced-css-and-sass/)
---
1. [Natours Project - Steup and First Steps](#Natours-Project---Steup-and-First-Steps)
    1. [Project Overview](#Project-Overview)
    1. [Building the Header - Part 1](#Building-the-Header---Part-1)
    1. [Building the Header - Part 2](#Building-the-Header---Part-2)

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
        font-family: "Lato" sans-serif; /* we have imported the font in HTML already*/
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
    <img src="./images/clip-path_polygon.png">

## Building the Header - Part 2