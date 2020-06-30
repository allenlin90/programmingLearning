let numArr = [1, -2, 3, 4, -9, 6]; 

console.log(getMaxSubSum(numArr));
console.log(getMaxSubSum([-1, 2, 3, -9])); //5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6 
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6

function getMaxSubSum(arr) {
    let number = 0; 
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        let list = [];
        for (let j = i; j < arr.length; j++) {
            list.push(arr[j]);
        }
        numbers.push(list); 
    }
    // return numbers;
    let empty = [];
    numbers.forEach(function(ele){
        let num = 0;
        ele.forEach(function(element){
            num += element;
            empty.push(num);
        })
    })
    // return empty;
    for (let e of empty) {
        if (e > number) {
            number = e;
        }
    }
    return number; 
}