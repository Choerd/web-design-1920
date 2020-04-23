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
    const audits = categories.map(category => {
        return {
            name: Object.entries(category)[1][1].title,
            score: Object.entries(category)[1][1].score * 100
        }
    })

    const response = Object.entries(lhr.audits)
    const raw = response.filter(entry => entry[1].score !== null)
    const accessibility = raw.map(entry => {
        return entry[0] = {
            id: entry[1].id,
            title: entry[1].title,
            description: entry[1].description,
            score: entry[1].score * 100
        }
    })
    accessibility.sort((a, b) => a.score - b.score)

    const total = {
        audits: audits,
        accessibility: accessibility
    }

    return total
}

module.exports = runAudit