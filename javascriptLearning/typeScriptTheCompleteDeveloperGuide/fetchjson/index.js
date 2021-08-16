"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
})["catch"](function (err) { return console.log(err); });
var logTodo = function (id, title, completed) {
    console.log("\n    The todo with id: " + id + "\n    Has a title of: " + title + "\n    Is it finished? " + completed + "\n  ");
};
