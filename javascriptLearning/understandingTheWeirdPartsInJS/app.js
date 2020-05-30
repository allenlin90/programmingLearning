function log(a) {
    a();
}

log(function(){
    console.log("Hi");
})