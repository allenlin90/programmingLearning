const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');
const log = console.log;

// Customize yargs 
yargs.version('1.1.0');

// Create add command 
yargs.command({
    command: 'add', 
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note contents',
            demandOption: true,
            type: 'string',
        }, 
    }, 
    handler: function(argv) {
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`);
    },
});

// Create remove command 
yargs.command({
    command: 'remove', 
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!');
    },
});

// Create list command 
yargs.command({
    command: 'list',
    describe: 'List all the notes!',
    handler: function(){
        console.log('Listing the note!');
    }
});

// Create read command
yargs.command({
    command: 'read', 
    describe: 'Read only mode',
    handler: function(){
        console.log('You can read the notes only!');
    }
});

yargs.parse();