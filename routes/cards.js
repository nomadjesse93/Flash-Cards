const express = require('express');
const router = express.Router();
const {
    data
} = require('../data/flashCardData.json')
const {
    cards
} = data;


router.get('/:id', function (req, res) {

    const {
        id
    } = req.params;

    const {
        side
    } = req.query;

    const text = cards[id][side];

    const {
        hint
    } = cards[id];


    const templateData = {
        text,
        hint
    };



    if (side === "question") {
        res.render('cards', {
            ...templateData
        });
    } else {
        res.render('cards', {
            text: templateData.text
        });
    }



});


module.exports = router;