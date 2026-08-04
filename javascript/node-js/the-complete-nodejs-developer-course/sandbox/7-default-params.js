const greeter = function (name = "user", age) {
  console.log("Hello " + name);
};

greeter("Allen"); // Hello Allen
greeter(); // Hello user
