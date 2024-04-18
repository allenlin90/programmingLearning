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
