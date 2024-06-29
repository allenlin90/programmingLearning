const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(dataJSON);

const data = JSON.parse(fs.readFileSync('1-json.json').toString());
data.name = 'Allen';
data.age = 30;

const dataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataJSON);