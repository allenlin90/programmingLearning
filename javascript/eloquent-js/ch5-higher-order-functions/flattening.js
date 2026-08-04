/*Using both reduce and concat method*/
let arrays = [[1, 2, 3], [4, 5], [6]];
function arrconcat(arr){
    let array = []; 
    array = arr.reduce(function(c, e){
       return c.concat(e);
    });
    return array 
}
console.log(arrconcat(arrays));

//Given solution from textbook
console.log(arrays.reduce( (a,b) => a.concat(b), new Array));
console.log(arrays.reduce(function(a,b){return a.concat(b)}, new Array));