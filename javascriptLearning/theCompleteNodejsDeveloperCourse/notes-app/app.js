const fs = require('fs');

let notes = 'notes.txt';

fs.writeFileSync(notes, 'This file was created by Node.js!'); 

fs.appendFileSync(notes, '\nThis line is appended!');