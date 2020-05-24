//Using .some() method 
function everys(array, test){
    return !array.some(function(e){
        return !test(e); 
    })
}

console.log(everys([1, 3, 5], n => n < 10));
// → true
console.log(everys([2, 4, 16], n => n < 10));
// → false
console.log(everys([], n => n < 10));
// → true

//using a loop 
function everyl(array,test){
    for (e of array){
        if (!test(e)){
            return false
        } 
    }
    return true; 
}

console.log(everyl([1, 3, 5], n => n < 10));
// → true
console.log(everyl([2, 4, 16], n => n < 10));
// → false
console.log(everyl([], n => n < 10));
// → true

/*Solution from textbook using for loop*/
function every2(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
}

/*Solution from textbook using for loop*/
function every1(array, test){
    return !array.some(function(e){
        return !test(e); 
    })
}