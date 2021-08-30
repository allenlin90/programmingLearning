//starting with a semi-column to prevent that other source code doesn't close the last statement or expression 
;(function (global, $) {
    //Create a Greetr object with constructor function when invocation
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    //variables declared here can't access or be changed from outside
    var supportedLangs = ['en', 'es']; 

    //informal greetings 
    var greetings = { 
        en: 'Hello', 
        es: 'Halo'
    };

    //formal greetings 
    var formalGreetings = { 
        en: 'Greetings', 
        es: 'Saludos'
    };

    //logger messages
    var logMessages = { 
        en: 'Logged in', 
        es: 'Inicio sesion'
    };

    //properties and methods of Greetr objects which can be access after the object is created 
    Greetr.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName; 
        }, 

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) { //if the given language isn't found in the supportedLangs array, index will reutrn -1 as not found 
                throw 'Invalid language'; //return an error as the given language isn't found 
            } 
        },

        greeting: function(){ //checks the object variable above for and return the text with aligned language
            return greetings[this.language] + ' ' + this.firstName + '!'; 
        }, 

        formalGreeting: function(){
            return formalGreetings[this.language] + ' ' + this.fullName(); 
        }, 

        greet: function(formal){
            var msg; 
            
            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting(); 
            }

            if (console){
                console.log(msg); 
            }

            //'this' refers to the calling object at execution time 
            //makes the method chainable 
            return this; 
        }, 

        log: function(){
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName())
            }
            return this;
        }, 

        setLang: function(lang){
            this.language = lang;

            this.validate(); 

            return this;
        }, 

        HTMLGreeting: function(selector, formal){
            if (!$) {//check if jQuery is imported, so $ dolloar sign variable is not empty
                throw 'jQuery not loaded'; 
            } 
    
            if (!selector) {//check if a selector to pass to jQuery is given 
                throw 'Missing jQuery selector'; 
            }
    
            var msg; 
            if(formal) { //use formal greeting function
                msg = this.formalGreeting();
            } else { //use regular greeting function
                msg = this.greeting(); 
            }
    
            $(selector).html(msg); //jQuery DOM to modify the message on page 
    
            return this; //make the method chainable 
        }
    }; 

    //initiation of a Greetr object. The actual object is created here, allowing us to 'new' an object without using 'new' 
    Greetr.init = function(firstName, lastName, language) {
        var self = this; 
        self.firstName = firstName || ''; //set default value as empty if argument isn't given
        self.lastName = lastName || ''; //set default value as empty if argument isn't given
        self.language = language || 'en'; //set default value as english if argument isn't given
        
        self.validate(); 

    }
    
    //link new created Greetr objects with added methods. 
    Greetr.init.prototype = Greetr.prototype; 

    //align variables with shorthands
    global.Greetr = global.G$ = Greetr; 

}(window, $));//pass global object and jQuery library (variable $ or jQuery) to this library 