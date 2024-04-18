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
