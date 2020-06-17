function Accumulator(startingValue) {
    this.value = startingValue; 
    this.read = function(){
        this.value += +prompt('A new value'); 
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);