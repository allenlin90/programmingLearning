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
