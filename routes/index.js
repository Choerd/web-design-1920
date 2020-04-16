const bodyParser = require('body-parser')
const runAudit = require('../modules/audit')

const
    express = require('express'),
    router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))

// Routes
router.get('/', async (req, res) => res.render('index'))

router.post('/', (req, res) => {
    runAudit(`https://${req.body.url}`)
        .then(data => {

            console.log(data)

            res.render('index', {
                data
            })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router

