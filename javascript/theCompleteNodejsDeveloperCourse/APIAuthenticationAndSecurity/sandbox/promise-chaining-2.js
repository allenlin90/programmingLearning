require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5f1d969510ec5c02cc377501').then(user => {
//     console.log(user);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result)
// }).catch(e => {
//     console.log(e);
// });

async function deleteTaskAndCount(id) {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5f1d969510ec5c02cc377502').then(task => {
    console.log(task);
}).catch(error => {
    console.log(error);
})