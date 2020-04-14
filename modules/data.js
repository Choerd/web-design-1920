const fetch = require('node-fetch')

async function fetcher(url) {
    const
        host = `covid-193.p.rapidapi.com`,
        key = `4ba18b4ebdmsh3e5b56d2a35470fp1ec696jsn3d2bc898bd20`

    const response = await fetch(url, { "headers": { "x-rapidapi-host": host, "x-rapidapi-key": key } })
    const data = await response.json()

    return data
}

module.exports = fetcher