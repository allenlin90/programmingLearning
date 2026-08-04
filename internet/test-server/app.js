const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// render static HTML file
// app.use(express.static('public'));

app.get('/', (req, res) => {
    // return header info in the requst send with HTTP GET method 
    res.send(req.header('user-agent'));
    // res.send(req.rawHeader);
});

app.post('/login', (req, res) => {
    if (!req.header('x-auth-token')) {
        return res.status(400).send('No Token');
    }

    // '123456' is just a mock-up. This JSON token should be generated with other function or library
    if (req.header('x-auth-token') !== '123456') {
        return res.status(401).send('Not authorized');
    }

    res.send('Logged in');
});

app.put('/post/:id', (req, res) => {
    res.json({
        id: req.params.id,
        title: req.body.title
    });
});

app.delete('/post/:id', (req, res) => {
    res.json({
        message: `Post ${req.params.id} is deleted`
    });
});

app.listen(port, function () {
    console.log(`Server started at port: ${port}`);
});