function range(start, end, step){
    let array = new Array; 
    if (step == undefined ) {
        if (end < start) {
            return "end must greater than start!"
        } else {
            for (let i = start; i <= end; i++){
                array.push(i); 
            }
        }
    } else if (step == 0) {
        return 0; 
    } else {
        for (let i = start; i <= end; i += step){
            array.push(i); 
        }
    }
    return array 
}

function sum(arr){
    let n = 0;
    for (let e of arr){
        n += e
    }
    return n 
}