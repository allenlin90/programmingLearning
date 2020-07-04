function unique(arr){
    let list = [] 
    for (let e of arr) {
        if (!list.includes(e)) {
            list.push(e); 
        }
    }
    return list;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O