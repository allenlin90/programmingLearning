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
3. Though we have `package main` declared in `app.go`, it only means  that we don't have `main` **module** but a **package**.
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
## 1.9. Type conversions and explicit type assignment
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
