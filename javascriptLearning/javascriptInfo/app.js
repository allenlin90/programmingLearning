let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break; // stop iteration if substring isn't found
    console.log( `Found at ${foundPos}` );
    pos = foundPos + 1; // continue the search from the next position
}
pos = 0;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log(pos);
}