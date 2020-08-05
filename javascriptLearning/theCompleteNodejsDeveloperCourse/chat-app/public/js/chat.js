const socket = io();

socket.on('welcome', message => {
    console.log(message);
});

socket.on('message', message => {
    console.log(message);
})

document.querySelector('#message-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const message = event.target.elements.message.value;
    socket.emit('sendMessage', message);
});

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    });
});