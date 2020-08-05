const path = require("path");
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// let count = 0;

io.on('connection', (socket) => {
    console.log('New WebSocket connection');
    socket.emit('welcome', 'Welcome!');
    // socket.broadcast.emit() sends message all the users except the connection of the socket 
    socket.broadcast.emit('message', 'A new user has joined!');

    socket.on('sendMessage', message => {
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    });

    socket.on('sendLocation', coords => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`);
    });
});

server.listen(PORT, () => {
    console.log(`local server starts on PORT ${PORT}`);
});