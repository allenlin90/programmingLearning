# CSS Methods hiding HTML elements
Date: 2021/09/03

## Element is rendered but invinsible
1. `visibility: hidden;`
2. `margin-left: -100%;`
3. `opacity: 0;`
4. `transform: scale(0);`

## Element is not rendered
1. `display: none;`
2. `width: 0; height: 0; overflow: hidden;`

## Hiding text content in an element
1. `text-indent: -99999px;`
2. `font-size: 0;`