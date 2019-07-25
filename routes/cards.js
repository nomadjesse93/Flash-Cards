const express = require('express');
const router = express.Router();
const {
    data
} = require('../data/flashCardData.json')
const {
    cards
} = data;

router.get('/:id', function (req, res) {


    let {
        id
    } = req.params

    res.locals.id = id;

    const {
        side
    } = req.query;

    const text = cards[id][side];

    const {
        hint
    } = cards[id];

    const name = req.cookies.username;

    const templateData = {
        text,
        id,
        name
    };

    if (!name) {
        res.redirect('/hello')
    }

    if (side !== "question" && side !== 'answer') {
        res.redirect(`/cards/${id}?side=question`)
    }


    if (side === 'question') {
        templateData.sideToShow = 'answer';
        templateData.otherSide = 'Answer';
        templateData.hint = hint;
    } else if (side === 'answer') {
        templateData.sideToShow = 'question';
        templateData.otherSide = 'Question';
    }

    res.render('cards', templateData);


});


router.use(function (req, res, next) {
    let id = res.locals.id;
    if (!id) {
        id = Math.floor(Math.random() * (cards.length - 0) + 0);
        res.redirect(`/cards/${id}?side=question`)
    }

});


module.exports = router;