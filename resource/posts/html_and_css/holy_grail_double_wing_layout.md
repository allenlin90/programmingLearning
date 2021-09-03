# Explain and realize Holy Grail and Double Wing with HTML and CSS
Date: 2021/09/02

## Problems
1. Create a layout which has 3 main elements, `header`, `main`, and `footer`, from top to bottom.
2. Elements in `main` and on the side (left and right) have fixed width.
3. The element in the middle (center) is adaptive and responsive to the viewport width.
4. The element in the middle should be rendered and loaded first when users visit the page.

## Note
1. When this topic came out in early 2000s, there was no "flex" and "grid" property available in CSS. Developers used "float", "margin", and "padding" to solve this issue.

## Solutions
1. [Codepen](https://codepen.io/allenlin90/pen/mdwPvqN)
  ```html
  <!-- HTML -->
  <div class="container">
    <section>
      <h1>Holy Grail</h1>
      <div id="holy_grail">
        <header>Header</header>
        <main>
          <div class="center column">Center responsive and filling up</div>
          <div class="left column">Left 200px</div>
          <div class="right column">Right 150px</div>
        </main>
        <footer>Footer</footer>
      </div>
    </section>
    <section>
      <h1>Double Wings</h1>
      <div id="double_wing">
        <header>Header</header>
        <main>
          <div class="column center">        
            <div class="center-inner">Center</div>
          </div>
          <div class="column left">Left 200px</div>
          <div class="column right">Right 200px</div>
        </main>
        <footer>Footer</footer>
      </div>
    </section>
  </div>
  ```
  ```scss
  // scss
  $column-left-width: 200px;
  $column-right-width: 150px;
  $side-column-width: 200px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    text-align: center;

    header {
      background-color: pink;
    }

    footer {
      background-color: springgreen;
    }
  }

  .center {
    background-color: #ccc;
  }

  .left {
    background-color: skyblue;
  }

  .right {
    background-color: coral;
  }

  #holy_grail{main {
      padding-left: $column-left-width;
      padding-right: $column-right-width;
      
      .column {
        float: left;
        position: relative;
      }
      
      .center {
        width: 100%;
      }
      
      .left {
        width: $column-left-width;
        margin-left: -100%;
        right: $column-left-width;
      }
      
      .right {
        width: $column-right-width;
        margin-right: -$column-right-width;
      }
    }
    
    footer {
      clear: both;
    }
  }

  #double_wing {
    
    .column {
      float: left;
    }
    
    .center {
      width: 100%;
      &-inner {
        margin: 0 $side-column-width;
      }
    }
    
    .left {
      width: $side-column-width;
      margin-left: -100%;
    }
    
    .right {
      width: $side-column-width;
      margin-left: -$side-column-width;
    }
    
    footer {
      clear: both;
    }
  }
  ```

## Reference
1. [Holy Grail (Web Design)](https://en.wikipedia.org/wiki/Holy_grail_(web_design))
2. [In Search of the Holy Grail](https://alistapart.com/article/holygrail/)
3. [Double Wing Layout](https://lhammer.cn/You-need-to-know-css/#/double-wing-layout)