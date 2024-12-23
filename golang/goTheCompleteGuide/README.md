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
	- [1.20. An alternative return value syntax](#120-an-alternative-return-value-syntax)
	- [1.21. Exercise: working with functions](#121-exercise-working-with-functions)
	- [1.22. Onwards to control structure](#122-onwards-to-control-structure)
	- [1.23. Introducing "if" statement and booleans](#123-introducing-if-statement-and-booleans)
	- [1.24. Working with "else if"](#124-working-with-else-if)
	- [1.25. Exercise: "if" statements](#125-exercise-if-statements)
	- [1.26. Using "else"](#126-using-else)
	- [1.27. Nested "if" statements and using "return" to stop function](#127-nested-if-statements-and-using-return-to-stop-function)
	- [1.28. Repeating code with "for" loops](#128-repeating-code-with-for-loops)
	- [1.29. Infinite loops, "break" and "continue"](#129-infinite-loops-break-and-continue)
	- [1.30. Conditional for loops](#130-conditional-for-loops)
	- [1.31. Making sense of "switch" statements](#131-making-sense-of-switch-statements)
	- [1.32. Writing to files](#132-writing-to-files)
	- [1.33. Reading from files](#133-reading-from-files)
	- [1.34. Handling errors](#134-handling-errors)
	- [1.35. Time to panic](#135-time-to-panic)
	- [1.36. Section exercise - the task](#136-section-exercise---the-task)
- [2. Working with packages](#2-working-with-packages)
	- [2.1. Splitting code across files in the same package](#21-splitting-code-across-files-in-the-same-package)
	- [2.2. Why would you use more than one package](#22-why-would-you-use-more-than-one-package)
	- [2.3. Preparing code for multiple packages](#23-preparing-code-for-multiple-packages)
	- [2.4. Splitting code across multiple packages](#24-splitting-code-across-multiple-packages)
	- [2.5. Importing packages](#25-importing-packages)
	- [2.6. Exporting and importing identifiers (variables, function)](#26-exporting-and-importing-identifiers-variables-function)
	- [2.7. Using third party packages](#27-using-third-party-packages)
- [3. Pointers](#3-pointers)
	- [3.1. Understanding pointers](#31-understanding-pointers)
	- [3.2. Writing code without pointers](#32-writing-code-without-pointers)
	- [3.3. Creating a pointer](#33-creating-a-pointer)
	- [3.4. Pointers as values](#34-pointers-as-values)
	- [3.5. Using pointers and passing pointers to functions](#35-using-pointers-and-passing-pointers-to-functions)
	- [3.6. Using pointers for data mutation](#36-using-pointers-for-data-mutation)
- [4. Structs and custom types](#4-structs-and-custom-types)
	- [4.1. Which problem do structs solve](#41-which-problem-do-structs-solve)
	- [4.2. Defining a struct type](#42-defining-a-struct-type)
	- [4.3. Instantiating structs and structs literal notation](#43-instantiating-structs-and-structs-literal-notation)
	- [4.4. Alternative struct literal notation and struct null values](#44-alternative-struct-literal-notation-and-struct-null-values)
	- [4.5. Passing struct values as arguments](#45-passing-struct-values-as-arguments)
	- [4.6. Struct and pointers](#46-struct-and-pointers)
	- [4.7. Introducing methods](#47-introducing-methods)
	- [4.8. Mutation methods](#48-mutation-methods)
	- [4.9. Using creation/constructor functions](#49-using-creationconstructor-functions)
	- [4.10. Using constructor functions for validation](#410-using-constructor-functions-for-validation)
	- [4.11. Structs, packages and exports](#411-structs-packages-and-exports)
	- [4.12. Exposing methods and a different constructor function](#412-exposing-methods-and-a-different-constructor-function)
	- [4.13. Struct embedding](#413-struct-embedding)
	- [4.14. Exposing methods and a different constructor function](#414-exposing-methods-and-a-different-constructor-function)
	- [4.15. Struct embedding](#415-struct-embedding)
	- [4.16. Creating other custom types and adding methods](#416-creating-other-custom-types-and-adding-methods)
	- [4.17. Practice: Getting user input](#417-practice-getting-user-input)
	- [4.18. Practice: Creating a struct and constructor function](#418-practice-creating-a-struct-and-constructor-function)
	- [4.19. Practice: Adding a method](#419-practice-adding-a-method)
	- [4.20. Practice: Handling long user input text](#420-practice-handling-long-user-input-text)
	- [4.21. Practice: Preparing save to file functionality](#421-practice-preparing-save-to-file-functionality)
	- [4.22. Practice: Encoding JSON content](#422-practice-encoding-json-content)
	- [4.23. Understanding Struct tags](#423-understanding-struct-tags)
- [5. Course project: Build a REST API](#5-course-project-build-a-rest-api)
	- [5.1. Planning the API](#51-planning-the-api)
	- [5.2. Installing the GIN framework](#52-installing-the-gin-framework)
	- [5.3. Setting up a first route and handling a first request](#53-setting-up-a-first-route-and-handling-a-first-request)
	- [5.4. Setting up an event model](#54-setting-up-an-event-model)

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
2. When the variable is declared out of a function, the variable can be accessible in the entire code file.
3. However, a function must be called in the other functions.
4. A go function can only return multiple values if it's explicitly declared.

```go
func calculateFutureValues(investmentAmount, expectedReturnRate, years float64) (float64, float64) {
	fv := investmentAmount * math.Pow((1 + expectedReturnRate / 100), years)
	rfv := fv / math.Pow(1 + inflationRate / 100, years)

	return fv, rfv
}
```

## 1.20. An alternative return value syntax

1. We can declare variable name for return value of a function.
2. Instead of declaring variables in the same name as the return values, we can assign values to the variables which will be returned.
3. Besides, we can simply give `return` keyword without explicitly returning the variables.

```go
func calculateFutureValues(investmentAmount, expectedReturnRate, years float64) (fv float64, rfv float64) {
	// use '=' to assign rather than ':=' to declare
	fv = investmentAmount * math.Pow((1 + expectedReturnRate / 100), years)
	rfv = fv / math.Pow(1 + inflationRate / 100, years)

	return
}
```

## 1.21. Exercise: working with functions

```go
package main

import "fmt"

func profit() {
	revenue := getUserInput("What's your revenue?")
	expenses := getUserInput("What's your expenses?")
	taxRate := getUserInput("What's your tax rate?")

	ebt, profit, ratio := calculateFinancials(revenue, expenses, taxRate)

	fmt.Printf("%.1f\n", ebt)
	fmt.Printf("%.1f\n", profit)
	fmt.Printf("%.3f\n", ratio)
}

func calculateFinancials(revenue, expenses, taxRate float64) (float64, float64, float64) {
	ebt := revenue - expenses
	profit := ebt * (1 - taxRate / 100)
	ratio := ebt / profit

	return ebt, profit, ratio
}

func getUserInput(textInput string) float64 {
	var userInput float64
	fmt.Print(textInput)
	fmt.Scan(&userInput)

	return userInput
}
```

## 1.22. Onwards to control structure

## 1.23. Introducing "if" statement and booleans

## 1.24. Working with "else if"

## 1.25. Exercise: "if" statements

## 1.26. Using "else"

## 1.27. Nested "if" statements and using "return" to stop function

```go
// bank.go
package main

import "fmt"

func main() {
	var accountBalance = 1000.0

	fmt.Println("Welcome to Go Bank")
	fmt.Println("What do you want to do?")
	fmt.Println("1. Check balance")
	fmt.Println("2. Deposit money")
	fmt.Println("3. Withdraw money")
	fmt.Println("4. Exit")

	var choice int
	fmt.Print("Your choice: ")
	fmt.Scan(&choice)

	// wantsCheckBalance := choice == 1

	if choice == 1 {
		fmt.Println("Your balance is", accountBalance)
	} else if choice == 2 {
		fmt.Println("Your deposit: ")
		var depositAmount float64
		fmt.Scan(&depositAmount)

		if depositAmount <= 0 {
			fmt.Println("Invalid amount. Must be greater than 0.")
			return
		}

		accountBalance += depositAmount
		fmt.Println("Balance updated! New amount: ", accountBalance)
	} else if choice == 3 {
		fmt.Println("Your deposit: ")
		var withdrawalAmount float64
		fmt.Scan(&withdrawalAmount)

		if withdrawalAmount <= 0 {
			fmt.Println("Invalid amount. Must be greater than 0.")
			return
		}

		if withdrawalAmount > accountBalance {
			fmt.Println("Invalid amount. You can't withdraw more than you have.")
			return
		}

		accountBalance -= withdrawalAmount
		fmt.Println("Balance updated! New amount: ", accountBalance)
	} else {
		fmt.Println("Goodbye!")
	}

	fmt.Println("Your choice:", choice)
}
```

## 1.28. Repeating code with "for" loops

## 1.29. Infinite loops, "break" and "continue"

## 1.30. Conditional for loops

## 1.31. Making sense of "switch" statements

1. `for` loop is the only iteration for looping available in Golang.
2. Unlike Javascript or the other programming language, Golang has no keyword `while` for infinite iteration.
3. Instead, we can just declare a `for` loop without stopping it.
4. On the other hand, besides a counter for regular `for` loops, we can give a boolean conditions as giving for `while` loop in the other languages to decide whether to continue or stop the iterations.
5. Though we could use `break` keyword in `switch` statement, it doesn't break the iteration if it's nested in `for` loop.
6. Therefore, we can stick to `if/else` statement for conditions in `for` loop.

```go
// bank.go
package main

import "fmt"

func main() {
	var accountBalance = 1000.0

	fmt.Println("Welcome to Go Bank")

	for {
		fmt.Println("What do you want to do?")
		fmt.Println("1. Check balance")
		fmt.Println("2. Deposit money")
		fmt.Println("3. Withdraw money")
		fmt.Println("4. Exit")

		var choice int
		fmt.Print("Your choice: ")
		fmt.Scan(&choice)

		// wantsCheckBalance := choice == 1

		if choice == 1 {
			fmt.Println("Your balance is", accountBalance)
		} else if choice == 2 {
			fmt.Println("Your deposit: ")
			var depositAmount float64
			fmt.Scan(&depositAmount)

			if depositAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			accountBalance += depositAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
		} else if choice == 3 {
			fmt.Println("Your deposit: ")
			var withdrawalAmount float64
			fmt.Scan(&withdrawalAmount)

			if withdrawalAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			if withdrawalAmount > accountBalance {
				fmt.Println("Invalid amount. You can't withdraw more than you have.")
				continue
			}

			accountBalance -= withdrawalAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
		} else {
			fmt.Println("Goodbye!")
			break
		}

		// switch choice {
		// case 1:
		// 	fmt.Println("Your balance is", accountBalance)
		// case 2:
		// 	fmt.Println("Your deposit: ")
		// 	var depositAmount float64
		// 	fmt.Scan(&depositAmount)

		// 	if depositAmount <= 0 {
		// 		fmt.Println("Invalid amount. Must be greater than 0.")
		// 		continue
		// 	}

		// 	accountBalance += depositAmount
		// 	fmt.Println("Balance updated! New amount: ", accountBalance)
		// case 3:
		// 	fmt.Println("Your deposit: ")
		// 	var withdrawalAmount float64
		// 	fmt.Scan(&withdrawalAmount)

		// 	if withdrawalAmount <= 0 {
		// 		fmt.Println("Invalid amount. Must be greater than 0.")
		// 		continue
		// 	}

		// 	if withdrawalAmount > accountBalance {
		// 		fmt.Println("Invalid amount. You can't withdraw more than you have.")
		// 		continue
		// 	}

		// 	accountBalance -= withdrawalAmount
		// 	fmt.Println("Balance updated! New amount: ", accountBalance)
		// default:
		// 	fmt.Println("Goodbye!")
		// 	break
		// }
	}

	fmt.Println("Thanks for choosing our bank")
}
```

## 1.32. Writing to files

## 1.33. Reading from files

1. Similar to `fmt`, we can import `os` to work with file system of the local machine.
2. `os.ReadFile` could cause an error if there's no existing file to read.
3. However, in Golang, though the file is not read, the function simply returns an empty byte collection rather than crashing the app.

```go
package main

import (
	"fmt"
	"os"
	"strconv"
)

const accountBalanceFile = "balance.txt"

func getBalanceFromFile() float64 {
	data, _ := os.ReadFile(accountBalanceFile)
	balanceText := string(data)
	balance, _ := strconv.ParseFloat(balanceText, 64)

	return balance
}

func writeBalanceToFile(balance float64) {
	balanceText := fmt.Sprint(balance)
	os.WriteFile(accountBalanceFile, []byte(balanceText), 0644)
}

func main() {
	var accountBalance = getBalanceFromFile()

	fmt.Println("Welcome to Go Bank")

	for {
		fmt.Println("What do you want to do?")
		fmt.Println("1. Check balance")
		fmt.Println("2. Deposit money")
		fmt.Println("3. Withdraw money")
		fmt.Println("4. Exit")

		var choice int
		fmt.Print("Your choice: ")
		fmt.Scan(&choice)

		// wantsCheckBalance := choice == 1

		switch choice {
		case 1:
			fmt.Println("Your balance is", accountBalance)
		case 2:
			fmt.Println("Your deposit: ")
			var depositAmount float64
			fmt.Scan(&depositAmount)

			if depositAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			accountBalance += depositAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			writeBalanceToFile(accountBalance)
		case 3:
			fmt.Println("Your deposit: ")
			var withdrawalAmount float64
			fmt.Scan(&withdrawalAmount)

			if withdrawalAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			if withdrawalAmount > accountBalance {
				fmt.Println("Invalid amount. You can't withdraw more than you have.")
				continue
			}

			accountBalance -= withdrawalAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			writeBalanceToFile(accountBalance)
		default:
			fmt.Println("Goodbye!")
			fmt.Println("Thanks for choosing our bank")
			return
		}
	}
}
```

## 1.34. Handling errors

## 1.35. Time to panic

1. Therefore, we will get `0` in this case without error handling if the file doesn't exist.
2. In go, if a function can fail, it's very common to return a 2nd value `error`.
3. Besides simply `return` and stop code execution, we can use `panic()` function to print error message in the console.
4. `panic()` will print the location of the code in the code file where an error happens.

```go
// bank.go
import (
	"errors"
	"fmt"
	"os"
	"strconv"
)

const accountBalanceFile = "balance.txt"

func getBalanceFromFile() (float64, error) {
	data, err := os.ReadFile(accountBalanceFile)

	if err != nil {
		return 1000, errors.New("Failed to find balance file.")
	}

	balanceText := string(data)
	balance, err := strconv.ParseFloat(balanceText, 64)

	if err != nil {
		return 1000, errors.New("Failed to parse stored balance value.")
	}

	return balance, nil
}

func main() {
	var accountBalance, err = getBalanceFromFile()

	if err != nil {
		fmt.Println("ERROR")
		fmt.Println(err)
		fmt.Println("--------")
		// return
		panic("Can't continue, sorry.")
	}
}
```

## 1.36. Section exercise - the task

```go
package main

import (
	"errors"
	"fmt"
	"os"
)

func profit() {
	revenue, err := getUserInput("What's your revenue?")

	if err != nil {
		fmt.Println(err)
		return
	}

	expenses, err := getUserInput("What's your expenses?")

	if err != nil {
		fmt.Println(err)
		return
	}

	taxRate, err := getUserInput("What's your tax rate?")

	if err != nil {
		fmt.Println(err)
		return
	}

	ebt, profit, ratio := calculateFinancials(revenue, expenses, taxRate)

	storeResults(ebt, profit, ratio)

	fmt.Printf("%.1f\n", ebt)
	fmt.Printf("%.1f\n", profit)
	fmt.Printf("%.3f\n", ratio)
}

func storeResults(ebt, profit, ratio float64) {
	results := fmt.Sprintf("EBT: %.1f\nProfit: %.1f\nRatio: %.3f\n", ebt, profit, ratio)
	os.WriteFile("results.txt", []byte(results), 0644)
}

func calculateFinancials(revenue, expenses, taxRate float64) (float64, float64, float64) {
	ebt := revenue - expenses
	profit := ebt * (1 - taxRate/100)
	ratio := ebt / profit

	return ebt, profit, ratio
}

func getUserInput(textInput string) (float64, error) {
	var userInput float64
	fmt.Print(textInput)
	fmt.Scan(&userInput)

	if userInput <= 0 {
		return 0, errors.New("value must be a positive number")
	}

	return userInput, nil
}
```

# 2. Working with packages

## 2.1. Splitting code across files in the same package

1. We can split code into multiple files without explicitly import to use as long as long they are in the same package such as `main`.

## 2.2. Why would you use more than one package

1. Splitting code into different packages can be beneficial for code re-use, especially for utility functions which can be used across multiple apps or projects.
2. For example, the read/write file functions in the previous sections could be a good example to have its standalone package.

## 2.3. Preparing code for multiple packages

## 2.4. Splitting code across multiple packages

1. In the split code file, we can have the other package file name.

## 2.5. Importing packages

## 2.6. Exporting and importing identifiers (variables, function)

1. In the `main` package and function where to use the other packages, we need to explicitly declare the module name we declared in `go.mod` such as `module example.com/bank` in this case.
2. However, all functions and constants from the other packages must start with a capital letter as we use `fmt.Print` that `P` from `fmt` is always an uppercase.

```bash
module example.com/bank

go 1.19
```

```go
// /fileops/fileops.go
package fileops

import (
	"errors"
	"fmt"
	"os"
	"strconv"
)

func GetFloatFromFile(fileName string) (float64, error) {
	data, err := os.ReadFile(fileName)

	if err != nil {
		return 1000, errors.New("Failed to find file.")
	}

	valueText := string(data)
	value, err := strconv.ParseFloat(valueText, 64)

	if err != nil {
		return 1000, errors.New("Failed to parse stored value.")
	}

	return value, nil
}

func WriteFloatToFile(value float64, fileName string) {
	valueText := fmt.Sprint(value)
	os.WriteFile(fileName, []byte(valueText), 0644)
}
```

```go
// /bank.go
package main

import (
	"fmt"
	"example.com/bank/fileops"
)

const accountBalanceFile = "balance.txt"

func main() {
	var accountBalance, err = fileops.GetFloatFromFile(accountBalanceFile)

	if err != nil {
		fmt.Println("ERROR")
		fmt.Println(err)
		fmt.Println("--------")
	}

	fmt.Println("Welcome to Go Bank")

	for {
		fmt.Println("What do you want to do?")
		fmt.Println("1. Check balance")
		fmt.Println("2. Deposit money")
		fmt.Println("3. Withdraw money")
		fmt.Println("4. Exit")

		var choice int
		fmt.Print("Your choice: ")
		fmt.Scan(&choice)

		// wantsCheckBalance := choice == 1

		switch choice {
		case 1:
			fmt.Println("Your balance is", accountBalance)
		case 2:
			fmt.Println("Your deposit: ")
			var depositAmount float64
			fmt.Scan(&depositAmount)

			if depositAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			accountBalance += depositAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
		case 3:
			fmt.Println("Your deposit: ")
			var withdrawalAmount float64
			fmt.Scan(&withdrawalAmount)

			if withdrawalAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			if withdrawalAmount > accountBalance {
				fmt.Println("Invalid amount. You can't withdraw more than you have.")
				continue
			}

			accountBalance -= withdrawalAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
		default:
			fmt.Println("Goodbye!")
			fmt.Println("Thanks for choosing our bank")
			return
		}
	}
}
```

## 2.7. Using third party packages

1. We can find and search existing external packages at [https://pkg.go.dev/](https://pkg.go.dev/).
2. For example, we can generate random data from [https://pkg.go.dev/github.com/Pallinder/go-randomdata](https://pkg.go.dev/github.com/Pallinder/go-randomdata).
3. To install the package, we can use `go get [package_link]`.
4. After installing the package, we can notice `go.mod` is modified to `require` the package.
5. If the project is cloned to run on the other machine, we can just `go get` to install the listed packages before executing the app.
6. To use the 3rd party package, we also need to import in the `main` file with as using the local custom package.

```go
// bank.go
package main

import (
	"fmt"

	"example.com/bank/fileops"
	"github.com/Pallinder/go-randomdata"
)

const accountBalanceFile = "balance.txt"

func main() {
	var accountBalance, err = fileops.GetFloatFromFile(accountBalanceFile)

	if err != nil {
		fmt.Println("ERROR")
		fmt.Println(err)
		fmt.Println("--------")
	}

	fmt.Println("Welcome to Go Bank")

	fmt.Println("Reach us 24/7", randomdata.PhoneNumber())

	for {
		fmt.Println("What do you want to do?")
		fmt.Println("1. Check balance")
		fmt.Println("2. Deposit money")
		fmt.Println("3. Withdraw money")
		fmt.Println("4. Exit")

		var choice int
		fmt.Print("Your choice: ")
		fmt.Scan(&choice)

		// wantsCheckBalance := choice == 1

		switch choice {
		case 1:
			fmt.Println("Your balance is", accountBalance)
		case 2:
			fmt.Println("Your deposit: ")
			var depositAmount float64
			fmt.Scan(&depositAmount)

			if depositAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			accountBalance += depositAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
		case 3:
			fmt.Println("Your deposit: ")
			var withdrawalAmount float64
			fmt.Scan(&withdrawalAmount)

			if withdrawalAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			if withdrawalAmount > accountBalance {
				fmt.Println("Invalid amount. You can't withdraw more than you have.")
				continue
			}

			accountBalance -= withdrawalAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
		default:
			fmt.Println("Goodbye!")
			fmt.Println("Thanks for choosing our bank")
			return
		}
	}
}
```

# 3. Pointers

## 3.1. Understanding pointers

1. Pointers are variables that store value `addresses` instead of values.
2. These pointers are similar to the concept for variables assigned objects in Javascript.

   ```ts
   // Javascript
   const obj1 = {};
   const obj2 = obj1;
   const obj3 = {};

   obj1 === obj2; // true
   obj1 === obj3; // false
   obj2 === obj3; // false
   ```

3. By using pointers, we can avoid unnecessary value copies
   1. When we pass a variable as an argument to a function in go, go copies the value in the function context.
   2. Therefore, until the function finishes and go runtime garbage collects the unused values, there will be 2 copies of the same value.
   3. If the value is large and complex, it may take up too much memory unnecessarily.
4. On the other hand, we can directly mutate values and the functions mutating the value don't need to return a value.

## 3.2. Writing code without pointers

## 3.3. Creating a pointer

## 3.4. Pointers as values

## 3.5. Using pointers and passing pointers to functions

## 3.6. Using pointers for data mutation

1. To pass a pointer of its value, we can put an asterisk `*` at front to indicate that we are using the value at the address, not the address itself.
2. In the function, we need to modify the argument to indicate that the incoming argument is a pointer.
3. Besides, to use the value, we also need to put an asterisk on the argument variable.

```go
package main

import "fmt"

func main() {
	age := 32 // regular variable

	agePointer := &age

	fmt.Println("Age:", *agePointer)

	adultYears := getAdultYears(agePointer)
	fmt.Println(adultYears)
	editAgeToAdultYears(agePointer)
	fmt.Println(age)
}

func getAdultYears(age *int) int {
	return *age - 18
}

func editAgeToAdultYears(age *int) {
	*age -= 18
}
```

# 4. Structs and custom types

## 4.1. Which problem do structs solve

1. Similar to `objects` and `maps` in Javascript, `Struct` in golang helps to prevent passing multiple arguments to a function in specific order and explicitly redeclare typings multiple times.

## 4.2. Defining a struct type

## 4.3. Instantiating structs and structs literal notation

## 4.4. Alternative struct literal notation and struct null values

## 4.5. Passing struct values as arguments

## 4.6. Struct and pointers

1. To initiate a `struct`, we can assign it to a variable and use curly braces for the values. 
2. We then can assign the values to the keys. 
3. On the other hand, we can assign a null value as `appUser := user{}`. 
4. Go allows shorthand for struct with pointers that we don't need to explicitly use pointer argument with asterisk `*` such as `(*u).FirstName` in this case which is equivalent to `u.FirstName`.

```go
package main

import (
	"fmt"
	"time"
)

type user struct {
	FirstName string
	LastName  string
	Birthdate string
	CreatedAt time.Time
}

func main() {
	firstName := getUserData("Please enter your first name: ")
	lastName := getUserData("Please enter your last name: ")
	birthdate := getUserData("Please enter your birthdate (MM/DD/YYYY): ")

	// ... do something awesome with that gathered data!
	// appUser := user{}
	appUser := user{
		FirstName: firstName,
		LastName:  lastName,
		Birthdate: birthdate,
		CreatedAt: time.Now(),
	}

	outputUserDetails(appUser)
}

func outputUserDetails(u user) {
	// ...
	// technically correct to use pointer
	firstName := (*u).FirstName
	// use pointer value with go shorthand
	fmt.Println(firstName, u.LastName, u.Birthdate)
}

func getUserData(promptText string) string {
	fmt.Print(promptText)
	var value string
	fmt.Scan(&value)
	return value
}
```

## 4.7. Introducing methods

1. We can use **receiver** function to a struct which is similar to declare a method for a class in an OOP languages.

```go
type user struct {
	FirstName string
	LastName  string
	Birthdate string
	CreatedAt time.Time
}

func (u user) outputUserDetails() {
	// ...	
	fmt.Println(u.FirstName, u.LastName, u.Birthdate)
}
```

## 4.8. Mutation methods

1. As regular function call, if we don't use pointer in a go struct method, the argument passing to the method will be duplicated.
2. Thus, any mutation to the value is on the duplicated value. 
3. Therefore, to mutate directly to the struct data, we need to use pointer on the argument. 

```go
type user struct {
	FirstName string
	LastName  string
	Birthdate string
	CreatedAt time.Time
}

// use pointer to mutate the struct data
func (u *user) clearUserName() {
	u.FirstName = ""
	u.LastName = ""
}
```

## 4.9. Using creation/constructor functions
1. In golang, a constructor pattern is used (similar to initiate a new class instance in OOP) to create a new object.
2. This constructor function is just go pattern rather than a requirement or feature. 

```go
type user struct {
	FirstName string
	LastName  string
	Birthdate string
	CreatedAt time.Time
}

func newUser(firstName, lastName, birthdate string) user {
	return user{
		FirstName: firstName,
		LastName:  lastName,
		Birthdate: birthdate,
		CreatedAt: time.Now(),
	}
}
```

## 4.10. Using constructor functions for validation
1. The constructor function can be used for validation when creating a new struct.
2. In this case, we change `fmt.Scan` to `fmt.Scanln` to accept empty string and just enter from user input in the terminal.
3. Otherwise, using `fmt.Scan` will explicitly wait for user input and user must give a char to continue the process.

```go
package main

import (
	"errors"
	"fmt"
	"time"
)

type user struct {
	FirstName string
	LastName  string
	Birthdate string
	CreatedAt time.Time
}

func (u *user) outputUserDetails() {
	// ...	
	fmt.Println(u.FirstName, u.LastName, u.Birthdate)
}

func (u *user) clearUserName() {
	u.FirstName = ""
	u.LastName = ""
}

func newUser(firstName, lastName, birthdate string) (*user, error) {
	if firstName == "" || lastName == "" || birthdate == "" {
		return nil, errors.New("first name, last name and birthdate are required")
	}

	return &user{
		FirstName: firstName,
		LastName:  lastName,
		Birthdate: birthdate,
		CreatedAt: time.Now(),
	}, nil
}

func main() {
	firstName := getUserData("Please enter your first name: ")
	lastName := getUserData("Please enter your last name: ")
	birthdate := getUserData("Please enter your birthdate (MM/DD/YYYY): ")

	// ... do something awesome with that gathered data!
	// appUser := user{}
	appUser, err := newUser(firstName, lastName, birthdate)

	if err != nil {
		fmt.Println(err)
		return
	}

	appUser.outputUserDetails()
	appUser.clearUserName()
	appUser.outputUserDetails()
}

func getUserData(promptText string) string {
	fmt.Print(promptText)
	var value string
	fmt.Scanln(&value)
	return value
}
```

## 4.11. Structs, packages and exports

## 4.12. Exposing methods and a different constructor function

## 4.13. Struct embedding

## 4.14. Exposing methods and a different constructor function

## 4.15. Struct embedding

## 4.16. Creating other custom types and adding methods

## 4.17. Practice: Getting user input

## 4.18. Practice: Creating a struct and constructor function

## 4.19. Practice: Adding a method

## 4.20. Practice: Handling long user input text

## 4.21. Practice: Preparing save to file functionality

## 4.22. Practice: Encoding JSON content

## 4.23. Understanding Struct tags

# 5. Course project: Build a REST API

## 5.1. Planning the API
1. Event booking REST API
   1. GET `/events` - Get list of available events
   2. GET `/events/:id` - Get an available event
   3. POST `/events` - Create a new bookable event **Auth Required** 
   4. PUT `/events/:id` - Update an event **Auth Required** **Only by Creator**
   5. DELETE `/events/:id` - Delete an event **Auth Required** **Only by Creator**
   6. POST `/signup` - Create new user
   7. POST `/login` - Authenticate user **Auth token (JWT)**
   8. POST `/events/:id/register` - Register user for event **Auth Required**
   9.  DELETE `/events/:id/register` - Cancel registration **Auth Required**

## 5.2. Installing the GIN framework
1. To accept http requests, we can use [`http`](https://pkg.go.dev/net/http) package from go standard library library.
2. However, since we want a more comprehensive feature to build the app, we can use [`gin`](https://pkg.go.dev/github.com/gin-gonic/gin) package which is a HTTP web framework similar to `express` for `Node.js`. 
3. To install, we can use `go get -u github.com/gin-gonic/gin`. 

## 5.3. Setting up a first route and handling a first request
1. After importing the package, we can use `gin.Default()` which **returns an Engine instance with the Logger and Recovery middleware already attached**.
2. We can give a port to receive such as `server.Run(:8080)` to allow the process receiving requests on port `8080`. 
3. On the `server` instance, we can use http verbs to define routes and handler function. For example, `server.GET("/route", route_handler)`
4. In the route handler, we can use `context` which is `gin.Context` type that we can check on the request and respond to the request. 
5. To handle the request, we can use `context.JSON()` to respond in JSON.
6. This `context.JSON` take 2 arguments, http status code and the response payload. 
7. Besides explicitly giving the status code in numbers such as `200`, we can use `http` package from go standard library, such as `http.StatusOK` which stands for `200`. 

```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	server := gin.Default()

	server.GET("/events", getEvents)

	server.Run(":8080") // localhost:8080
}

func getEvents(context *gin.Context) {
	context.JSON(http.StatusOK, gin.H{"message": "Hello World"})
}
```

## 5.4. Setting up an event model

```go
// models/event.go
package models

import "time"

type Event struct {
	ID          int
	Name        string
	Description string
	Location    string
	DateTime    time.Time
	UserID 			int
}

var events []Event = []Event{}

func (e Event) Save() {
	// TODO: add it to a database

	events = append(events, e)
}
```