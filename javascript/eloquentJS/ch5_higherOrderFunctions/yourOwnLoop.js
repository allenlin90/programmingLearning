
function loop(val, tfunc, ufunc, bfunc){
    for (let n = val; tfunc(n); n = ufunc(n)) {
        bfunc(n); 
    }
}

loop(3, n => n > 0, n => n - 1, console.log); 