const app = require('express')();

app.get('/', (req, res) => {
    res.setHeader('set-cookie', [`setfromserver=1`, `jscantseethis=1; httponly`]);
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/path1', (req, res) => {
    res.send(`Path 1: I have been sent these cookies ${req.headers.cookie}`);
});

app.get('/path2', (req, res) => {
    res.send(`Path 2: I have been sent these cookies ${req.headers.cookie}`);
});

const PORT = 5500;
app.listen(PORT, (err) => console.log(`server starts on port ${PORT}`));