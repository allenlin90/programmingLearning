let message1 = "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!";
let message2 = "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut";
let message3 = "sentence may end with a punctuation";

function sort(message){
    //Check all words of the message by spliting a whitespace 
    let texts = message.split(" ");
    //Clean words and punctuations in the sentence
    let charList = [];
    for (let i = 0; i < texts.length; i++){
        for (let char of texts[i]){
            if (char < "A" || char > "z") {
                charList.push(char); //All punctuations in the message
            };
        };
        texts[i] = texts[i].replace(/\W/g,""); //text is cleaned and without punctuation
    }; 
    //separate text starting with upper and lowercase into different array
    let arrUpper = [];
    let arrLower = [];
    for (let text of texts) {
        if(text[0]<"a"){
            arrUpper.push(text);
        } else {
            arrLower.push(text);
        }
    };
    arrUpper.sort().reverse();
    arrLower.sort();
    return arrLower.concat(arrUpper).join(" ");
}

console.log(sort(message1));
//console.log(sort(message2));
//console.log(sort(message3));

