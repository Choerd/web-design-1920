const reduce = require('../modules/manipulation')

const
    express = require('express'),
    router = express.Router(),
    fetcher = require('../modules/data')

router.get('/', async (req, res) => {
    const data = await fetcher(`https://covid-193.p.rapidapi.com/statistics`)

    const topTen = reduce(data.response, 10)

    res.render('index', {
        data: topTen
    })
})

module.exports = router