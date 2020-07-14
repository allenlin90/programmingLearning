const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');
const log = console.log;

const msg = getNotes();
log(getNotes());
log(chalk.red('Error!'));
log(chalk.inverse.bold.yellow('hi'));