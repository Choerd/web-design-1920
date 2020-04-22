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
            const restructured = data.map(entry => {
                return {
                    name: Object.keys(entry)[0],
                    value: Object.values(entry)[0]
                }
            })

            const alldata = {
                url: req.body.url,
                audit: restructured
            }

            res.send(alldata)
        })
        .catch(error => console.log(error))
})

module.exports = router