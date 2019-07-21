const express = require('express');
//Middleware
//You end middle ware calls by either sending a response
//to the client or calling next()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    const name = req.cookies.username;
    name ? res.render('index', {
        name
    }) : res.redirect('hello');
});

app.get('/cards', function (req, res) {

    res.render('cards', {
        prompt: "Who is buried in Grant's tomb?",
        hint: "Think about who's tomb it is!"
    });
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username
    name ? res.redirect('/') : res.render('hello')
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username)
    res.redirect('/')
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username')
    res.redirect('hello')
});

app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status);
    res.render('error', {
        error: err
    });
});

app.listen(3000);