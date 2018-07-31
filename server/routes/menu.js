
const express = require('express');
const router = express.Router();

const menus = [
    {
        title: 'Games',
        url: '/#'
    },
    {
        title: 'Consoles',
        url: '/#'
    },
    {
        title: 'Community',
        url: '/#'
    }
];

router.get('/', function (req, res) {
        res.status(200).send(menus);
});



module.exports = router;
