const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/cards', function (req, res) {
    res.locals.prompt = "Who is buried in Grant's tomb?"
    res.locals.hint = "Think about who's tomb it is!"
    res.render('cards');
})
app.listen(3000);