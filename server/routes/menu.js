
const express = require('express');
const router = express.Router();

const menus = [
    {
        id: Date.now(),
        title: 'Games',
        url: '/',
        submenu: [
                    {
                        id: Date.now() + 1,
                        title: 'Submenu 1.1',
                        url: '/'
                    },
                    {
                        id: Date.now() + 2,
                        title: 'Submenu 1.2',
                        url: '/'
                    },
                    {
                        id: Date.now() + 3,
                        title: 'Submenu 1.3',
                        url: '/'
                    },
                    {
                        id: Date.now() + 4,
                        title: 'Submenu 1.4',
                        url: '/'
                    }
                ]
    },
    {
        id: Date.now() + 11,
        title: 'Consoles',
        url: '/topic',
        submenu: [
            {
                id: Date.now() + 7,
                title: 'Subparagraph 2.1',
                url: '/topic'
            },
            {
                id: Date.now() + 8,
                title: 'Subparagraph 2.2',
                url: '/topic'
            },
            {
                id: Date.now() + 9,
                title: 'Subparagraph 2.3',
                url: '/topic'
            }
        ]
    },
    {
        id: Date.now() + 22,
        title: 'Community',
        url: '/topic'
    }
];

router.get('/', function (req, res) {
        res.status(200).send(menus);
});



module.exports = router;
