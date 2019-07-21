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

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards')

app.use(mainRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600)
        res.status(err.status);
    else
        res.status(500);
    res.render('error');
});

app.listen(3000);