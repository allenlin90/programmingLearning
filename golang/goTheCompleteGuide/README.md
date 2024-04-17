- [1. Go Essentials](#1-go-essentials)
  - [1.1. Working with functions and values](#11-working-with-functions-and-values)
  - [1.2. Organizing code with packages](#12-organizing-code-with-packages)
  - [1.3. The important of the name "main"](#13-the-important-of-the-name-main)
  - [1.4. Understand Go modules and build Go programs](#14-understand-go-modules-and-build-go-programs)
  - [1.5. The main function is important](#15-the-main-function-is-important)
  - [1.6. Onwards to a new project](#16-onwards-to-a-new-project)
  - [1.7. Working with variables, values, and operators](#17-working-with-variables-values-and-operators)
  - [1.8. Understanding value types](#18-understanding-value-types)
  - [1.9. Type conversions and explicit type assignment](#19-type-conversions-and-explicit-type-assignment)
  - [1.10. Using alternative variable declaration types](#110-using-alternative-variable-declaration-types)
  - [1.11. Making sense of constant values](#111-making-sense-of-constant-values)
  - [1.12. Understanding the importance of variables](#112-understanding-the-importance-of-variables)
  - [1.13. Improved user input fetching](#113-improved-user-input-fetching)
  - [1.14. Formatting strings - Basics](#114-formatting-strings---basics)
  - [1.15. Formatting floats in strings](#115-formatting-floats-in-strings)
  - [1.16. Creating formatted strings](#116-creating-formatted-strings)
  - [1.17. Building multi-line strings](#117-building-multi-line-strings)
  - [1.18. Understanding functions](#118-understanding-functions)
  - [1.19. Functions: return value and variable scope](#119-functions-return-value-and-variable-scope)

---

# 1. Go Essentials

## 1.1. Working with functions and values

1. We can simply declare and run a go app with the followings

```bash
go run app.go
```

```go
package main

import "fmt"

func main() {
  fmt.Print("Hello World")
}
```

## 1.2. Organizing code with packages

1. For a go program, we can have at least a `main` package to execute the program.
2. A go package can be split into multiple files.
3. A go program can have multiple packages.

## 1.3. The important of the name "main"

1. `main` is a special and conventional name to to go that this package is the **main** entry point of this program.
2. The allow the program to be executable, we need a `main` package in the program.

## 1.4. Understand Go modules and build Go programs

1. In the previous example, though we can execute it by `go run app.go`, we can't build it directly as no `main` module is specified.
2. When we try `go build`, it prompts an error saying that `go: cannot find main module, but found .git/config`.
3. Though we have `package main` declared in `app.go`, it only means that we don't have `main` **module** but a **package**.
4. In many cases, a module means a Go project, which can have multiple packages.

```bash
# creating a module
go mod init host/app_name
# a go.mod is created
```

```bash
# building module as an executable
go build
# an executable file is created
```

## 1.5. The main function is important

1. To let Go knows where the application starts, we need a `main` function.
2. Though we can `import` packages from external files such as Go standard library, we need to run code in a code blocks wrapped in functions.
3. Go is not similar to Javascript which executes code from top to bottom in the same file.
4. A package with either single or multiple files should have only one `main` function to start from.
5. However, a library that works as a dependency, such as `fmt` from the standard library, doesn't need to declare a `main` function.

## 1.6. Onwards to a new project

## 1.7. Working with variables, values, and operators

## 1.8. Understanding value types

1. Go doesn't have power operator `**` as in the other languages.
2. However, we can use `math` from go standard library to use `math.Pow()`.
3. `integer` and `float64` are different data types and cannot proceed math operators directly with mixed types.
4. For example, we can convert integers to float64 using `float64()`.
5. All Go value types come with a so-called "**null value**" which is the value stored in a variable if no other value is explicitly set.
   1. `int` is `0`
   2. `float64` is `0.0`
   3. `string` is `""`
   4. `bool` is `false`
6. If we have created a module in the directory, we can run `go run .` to run the program without explicitly calling the file.

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	var investmentAmount = 1000
	var expectedReturnRate = 5.5
	var years = 10

	var futureValue = float64(investmentAmount) * math.Pow((1 + expectedReturnRate/100), float64(years))

	fmt.Println(futureValue)
}
```

## 1.9. Type conversions and explicit type assignment

1. When declaring a variable, we can give an explicit type (similar to TypeScript)

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	var investmentAmount float64 = 1000
	var expectedReturnRate = 5.5
	var years float64 = 10

	var futureValue = investmentAmount * math.Pow((1 + expectedReturnRate/100), years)

	fmt.Println(futureValue)
}
```

## 1.10. Using alternative variable declaration types

1. Besides using `var` keyword to declare a variable, we can use `:=` to declare a variable.
2. However, this short syntax doesn't allow explicit type annotation while it infers from the type of the value directly.
3. We can declare multiple variables using `var` with the same type annotation at the same time by using `comma` to separate the variables and values.
4. When declaring multiple variables, if type annotation is not given, the variable will infer the type from the value directly.

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	// var investmentAmount, years float64 = 1000, 10
	investmentAmount, years, expectedReturnRate := 1000.0, 10.0, 5.5

	futureValue := investmentAmount * math.Pow((1 + expectedReturnRate/100), years)

	fmt.Println(futureValue)
}
```

## 1.11. Making sense of constant values

1. Similar to `const` in JavaScript, a variable declared with `const` is immutable and becomes a constant.

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	const inflationRate float64 = 2.5
	var investmentAmount, years float64 = 1000, 10
	expectedReturnRate := 5.5

	futureValue := investmentAmount * math.Pow((1 + expectedReturnRate / 100), years)

	futureRealValue := futureValue / math.Pow(1 + inflationRate / 100, years)

	fmt.Println(futureValue)
	fmt.Println(futureRealValue)
}
```

## 1.12. Understanding the importance of variables

1. We can take user input with `fmt.Scan`.
2. In this case, we need to use pointer sign ampersand `&` to the variable to ensure we can catch and store the user input.

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	const inflationRate float64 = 2.5
	var investmentAmount float64
	years := 10.0
	expectedReturnRate := 5.5

	fmt.Scan(&investmentAmount)

	futureValue := investmentAmount * math.Pow((1 + expectedReturnRate / 100), years)

	futureRealValue := futureValue / math.Pow(1 + inflationRate / 100, years)

	fmt.Println(futureValue)
	fmt.Println(futureRealValue)
}
```

## 1.13. Improved user input fetching

1. We can use `fmt.Print` which prints the prompt in the console on the same line of text.
2. Note that though `fmt.Scan` can take user input, it has limitation on intake multiple words (such as phrase or sentences) at the same time.

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	const inflationRate float64 = 2.5
	var investmentAmount float64
	var years float64
	var expectedReturnRate float64

	fmt.Print("Investment Amount: ")
	fmt.Scan(&investmentAmount)

	fmt.Print("Years: ")
	fmt.Scan(&years)

	fmt.Print("expectedReturnRate: ")
	fmt.Scan(&expectedReturnRate)

	futureValue := investmentAmount * math.Pow((1 + expectedReturnRate / 100), years)

	futureRealValue := futureValue / math.Pow(1 + inflationRate / 100, years)

	fmt.Println(futureValue)
	fmt.Println(futureRealValue)
}
```

## 1.14. Formatting strings - Basics

1. In a string value, we can use placeholder like `%v` for variables for string literals and print it with `fmt.Printf`.
2. Note that `fmt.Printf` prints strings as one-liner and we can use `\n` to change the line.
3. Besides, we can pass multiple variables

## 1.15. Formatting floats in strings

1. Besides `%v`, we can use `%f` to present decimal values in strings.
2. In addition, we can also control how many decimal to be printed in the output.
3. For example, if we print with `%.0f`, all the decimal numbers will not be printed.
4. If we give `%0.1f`, only 1 decimal will be printed.

## 1.16. Creating formatted strings

1. To keep formatted string without printing it out directly, we can use `fmt.Sprintf` function.
2. We can later use `fmt.Print` to print the stored variable.

## 1.17. Building multi-line strings

1. By wrapping with double quotes `"`, we can have a string as one-liner.
2. However, we can use backtick `\`` to create a string with multiple lines.
3. In addition, in multi-line string, a line break character `\n` is not working any more and will become part of the string values.

## 1.18. Understanding functions

1. A function is only used when it's called.
2. In Golang, all apps starts with a `main` function.
3. Functions can be declared with keyword `func`.

```go
// main.go
func main() {
	outputText("Hello World")
	outputMultiText("Hello", "World")
}

func outputText(text string) {
	fmt.Print(text)
}

func outputMultiText(text, text2 string) {
	fmt.Print(text, text2)
}
```

## 1.19. Functions: return value and variable scope

1. `const` and `var` can be put outside of a function.
2. However, a function must be called in the other functions
