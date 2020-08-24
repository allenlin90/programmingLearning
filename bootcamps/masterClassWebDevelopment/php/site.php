<?php
    // Create the class
    class Person {
        // Create properties - (Variables tied to objects)
        public $firstname;
        public $lastname;
        public $age;

        // Assigning values to the property variables 
        public function __construct($firstname, $lastname, $age) {
            $this->firstname = $firstname;
            $this->lastname = $lastname;
            $this->age = $age;
        }

        // Create a method (Function tied to an object)
        public function hello(){
            return "I am " . $this->firstname . " " . $this->lastname . ", my age is: " . $this->age . "";
        }
    }

    // Creating a new person named "John Smith", who is 25 years old 
    $person1 = new Person('John', 'Smith', 25);
    $person2 = new Person('Joe', 'Bob', 35);

    // Print out what the hello method returns 
    echo $person1->hello();
    echo "<br>";
    echo $person2->hello();
?>