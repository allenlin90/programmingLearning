const fs = require('fs');
const chalk = require('chalk');

function getNotes() {
    return 'Your notes...'; 
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title); 
    const duplicateNote = notes.find((note) => note.title === title);

    debugger

    if (!duplicateNote) {  
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse(`New '${title}' is added`));
    } else {
        console.log(chalk.red.inverse(`Note '${title}' is taken!`));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    
    const notesToKeep = notes.filter((note) => note.title !== title); 

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse(`Note "${title}" is removed!`));
        saveNotes(notesToKeep); 
    } else {
        console.log(chalk.red.inverse(`Note "${title}" is not found!`));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Listing the note!'));
    notes.forEach( note => {
        console.log(chalk.blue.inverse(note.title));
        console.log(chalk.yellow.inverse(note.body), '\n');
    });
}

const readNote = function(title) {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(`Reading Title: '${chalk.inverse(note.title)}'`);
        console.log(`${note.body}`);
    } else {
        console.log(chalk.red.inverse(`'${title}' is not found!`));
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err){
        return [];
    }    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};