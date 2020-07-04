let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

let usersById = groupById(users);

console.log(usersById);

// function groupById(users) {
//     return users.reduce(function(acc, item){
//         acc[item.id] = item;
//         return acc;
//     }, {})
// }

function groupById(users){
    return users.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
}