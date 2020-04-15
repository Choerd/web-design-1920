function reduce(data, number) {
    const topTen = data.slice(0, number)

    topTen.forEach(entry => {
        // Change date
        entry.day = changeDate(entry.day)

        // Change null into 0
        Object.entries(entry.cases).forEach(row => {
            if (row[1] === null) {
                entry.cases[row[0]] = 0
            }
        })
    })

    return topTen
}

function changeDate(date) {
    var temp = date.split("-")
    return `${temp[2]}-${temp[1]}-${temp[0]}`
}

module.exports = reduce