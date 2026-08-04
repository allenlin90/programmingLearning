const {SCRIPTS, countBy, characterScript} = require("./scripts.js"); 


function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
      }).filter(({direction}) => direction != "none");
    let name = scripts.reduce(function(a,b){
        return a.count < b.count ? b : a; 
    }); 
    return name.name; 
}
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl 