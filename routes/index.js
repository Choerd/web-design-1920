const runAudit = require('../modules/audit')

const
    express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

// Routes
router.get('/', async (req, res) => res.render('index'))

router.post('/', (req, res) => {
    runAudit(`https://${req.body.url}`)
        .then(data => {
            data = {
                url: req.body.url,
                audit: data
            }
            res.send(data)
        })
        .catch(error => console.log(error))
})

module.exports = router