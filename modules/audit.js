const lighthouse = require('lighthouse')
const puppeteer = require('puppeteer')

async function runAudit(url) {
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: ['--no-sandbox']
    })

    const { lhr } = await lighthouse(url, {
        port: (new URL(browser.wsEndpoint())).port,
        output: 'json',
        logLevel: 'info',
    })

    await browser.close()

    const categories = Object.entries(lhr.categories)
    const data = categories.map(category => {
        return {
            name: Object.entries(category)[1][1].title,
            score: Object.entries(category)[1][1].score * 100
        }
    })

    return data
}

module.exports = runAudit