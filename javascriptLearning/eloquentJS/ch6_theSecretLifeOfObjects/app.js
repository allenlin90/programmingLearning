class Rabbit {
    constructor(type) {
        this.type = type; 
    }
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`); 
    }
}

let killerRabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

Rabbit.prototype.eat = function(food){
    console.log(`The ${this.type} rabbit eats '${food}'`);
};
Rabbit.prototype.eyeColor = function(color){
    this.eyeColor = color;
};

blackRabbit.eyeColor('black'); 

blackRabbit.speak('dark');
killerRabbit.eat('pudding');
console.log(blackRabbit);

// let object = new class { getWord() { return "hello"; } };
// console.log(object);