const express = require('express');

const app = express();

const firstNames = ['Dwayne', 'Dana', 'Jesse', 'John', 'Billy']

const lastNames = ['Johnson', 'Hodges', 'Sanderson', 'Cena', 'Eilish']

const sandboxNames = [{
        First: 'Paul',
        Last: 'Jones'
    },
    {
        First: 'David',
        Last: 'Smith'
    },
    {
        First: 'Jason',
        Last: 'Camp'
    },
    {
        First: 'Bella'
    },
    {
        Last: 'Jones'
    }
];

app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index')
})
app.get('/cards', function (req, res) {

    res.render('cards', {
        prompt: "Who is buried in Grant's tomb?",
        hint: "Think about who's tomb it is!"
    });
})

//Sandbox
//Firstname | Lastname + 5 names 
app.get('/sandbox', (req, res) => {
    res.render('sandbox', {
        firstNames,
        lastNames,
        sandboxNames
    })
})
app.listen(3000);