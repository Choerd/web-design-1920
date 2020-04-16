const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')

function runAudit(url) {
    let audit

    return chromeLauncher.launch({ chromeFlags: ['--headless', '--disable-gpu'] })
        .then(chrome => {
            const opts = { port: chrome.port }
            return lighthouse(url, opts).then(data => chrome.kill().then(() => {
                const results = data.lhr
                const categories = results.categories
                const criteria = Object.getOwnPropertyNames(categories)

                audit = criteria.map(crit => {
                    return { [crit]: categories[`${crit}`].score * 100 }
                })

                return audit
            }))
        })
}

module.exports = runAudit