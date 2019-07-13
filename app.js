const express = require('express');
//Middleware
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/cards', function (req, res) {

    res.render('cards', {
        prompt: "Who is buried in Grant's tomb?",
        hint: "Think about who's tomb it is!"
    });
});

app.get('/hello', (req, res) => {
    res.render('hello')
})

app.post('/hello', (req, res) => {
    res.render('hello', {
        name: req.body.username
    });
})


app.listen(3000);