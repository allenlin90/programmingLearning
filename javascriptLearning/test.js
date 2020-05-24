//let arr = [1,2,3,4,5,6]; 

let obj = {
    a:1, 
    b:2, 
}
//arr.push(7);

var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr);
arr.splice(2, 0, "Lene");
let names = arr.filter(function(e){
    return e.length > 4; 
})

console.log(names);
