// const square = function(x) {
//     return x * x;
// }

// const square = x => x * x;

// console.log(square(2));

const event = {
    name: 'Birthday Party',
    guestList: [
        'Allen',
        'Jen',
        'Mike',
    ],
    printGuestList () {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((el) => {
            console.log(`${el} is attending ${this.name}`)
        });
    },
}

event.printGuestList();