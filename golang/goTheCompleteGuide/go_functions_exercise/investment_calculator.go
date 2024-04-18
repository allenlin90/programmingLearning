package main

import (
	"fmt"
	"math"
)

const inflationRate float64 = 2.5

func main() {
	var investmentAmount float64
	var years float64
	var expectedReturnRate float64

	outputText("Investment Amount: ")
	fmt.Scan(&investmentAmount)
	
	outputText("Years: ")
	fmt.Scan(&years)

	outputText("expectedReturnRate: ")
	fmt.Scan(&expectedReturnRate)

	futureValue, futureRealValue := calculateFutureValues(investmentAmount, expectedReturnRate, years)
	
	// futureValue := investmentAmount * math.Pow((1 + expectedReturnRate / 100), years)
	// futureRealValue := futureValue / math.Pow(1 + inflationRate / 100, years)

	// fmt.Println(futureValue)
	// fmt.Println(futureRealValue)
	
	// fmt.Printf(`Future Value: %.1f
	
	// Future Value (adjusted for Inflation): %.1f`, futureValue, futureRealValue)

	formattedFV := fmt.Sprintf("Future Value: %.1f\n", futureValue)
	formattedRFV := fmt.Sprintf("Future Value (adjusted for Inflation): %.1f\n", futureRealValue)

	fmt.Print(formattedFV, formattedRFV)

	profit()
}

func outputText(text string) {
	fmt.Print(text)
}

func calculateFutureValues(investmentAmount, expectedReturnRate, years float64) (fv float64, rfv float64) {
	fv = investmentAmount * math.Pow((1 + expectedReturnRate / 100), years)
	rfv = fv / math.Pow(1 + inflationRate / 100, years)
	
	return fv, rfv	
}
