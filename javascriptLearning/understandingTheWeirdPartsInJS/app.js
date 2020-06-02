function findOdd(arr) {
    let obj = {}; 
    arr.forEach(function(e){
        if (!obj[e]) {
            obj[e] = 1; 
        } else {
            obj[e] += 1; 
        }
    });
    let list = Object.keys(obj);
    for (let e of list) {
        if(obj[e] % 2 !== 0) {
            return e;
        }
    };
}
let arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]; 
console.log(findOdd(arr)); 
