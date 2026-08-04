var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var todoRoutes = require('./routes/todos');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hi there from Express')
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});