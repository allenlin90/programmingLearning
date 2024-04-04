package main

import "fmt"

func profit() {
	var revenue, expenses, taxRate float64

	fmt.Print("What's your revenue?")
	fmt.Scan(&revenue)

	fmt.Print("What's your expenses?")
	fmt.Scan(&expenses)

	fmt.Print("What's your tax rate?")
	fmt.Scan(&taxRate)

	ebt := revenue - expenses
	profit := ebt * (1 - taxRate / 100)
	ratio := ebt / profit

	fmt.Println("earning before tax EBT", ebt)
	fmt.Println("profit", profit)
	fmt.Println("ratio", ratio)
}