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