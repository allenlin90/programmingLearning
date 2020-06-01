function greet(firstname, lastname, language, ...other) {
    firstname = firstname || "[Put your name in the argumet!]"
    if (arguments.length === 0) return "This function takes 3 arguments!"
    console.log(firstname); 
    console.log(lastname); 
    console.log(language); 
    console.log(arguments); 
    console.log(other); 
    console.log("arg 0: " + arguments[0]);
    console.log(other[0]);
    console.log("------------"); 
}

greet("John", "Oliver", "en", "Birmingham", "Funny", "LW2N");