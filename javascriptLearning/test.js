let table = {
    area: [
    'Bangkok to Bangkok', 
    'Bangkok to Greater Bangkok', 
    'Greater Bangkok to Greater Bangkok', 
    'Temp. control Bangkok to Bangkok', 
    'Temp. control Bangkok to Greater Bangkok', 
    'Temp. control Greater Bangkok to Greater Bangkok', 
    ], 
    size: [
    'Poly M', 
    'Poly L',
    'S40', 
    'S50',
    'S60',
    'S80',
    'S100',
    'S120',
    'S140',
    'S160',
    'S800',
    'S200',
    ],
  };

let data = [40.0, 55.0, 55.0, 75.0, 75.0, 85.0, 149.0, 199.0, 299.0, 399.0, 399.0, 399.0, 80.0, 90.0, 100.0, 110.0, 130.0, 160.0, 220.0, 260.0, 340.0, 430.0, 480.0, 520.0, 110.0, 120.0, 130.0, 140.0, 160.0, 190.0, 250.0, 290.0, 370.0, 460.0, 510.0, 550.0, 95.0, 125.0, 145.0, 180.0, 220.0, 280.0, 145.0, 175.0, 195.0, 230.0, 270.0, 330.0];

let b2b = [];
let b2g = [];
let g2g = [];
let cb2b = [];
let cb2g = []; 
for (let i = 0; i < 12; i++) {   
    b2b.push(data[i]);     
    b2g.push(data[i+12]); 
    g2g.push(data[i+24]); 
    cb2b.push(data[i+36]); 
    cb2b = cb2b.slice(0,6); 
    cb2g.push(data[i+42]); 
    cb2g = cb2g.slice(0,6);
}
let arr = [];
arr.push(b2b, b2g, g2g, cb2b, cb2g); 
// console.log(arr);
let obj = table.size.reduce(function(prev, item, index){
    prev[item] = b2b[index];
    return prev;
}, {})
let price = {};
// for (let e of table.area) {}
let list = [];
    for (let i = 0; i < arr.length; i++) {
    list.push(table.size.reduce(function(prev, item, index){
            prev[item] = arr[i][index];
            return prev;
        }, {}))
    }   

console.log(list);