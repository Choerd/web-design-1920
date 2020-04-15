function reduce(data, number) {
    const topTen = data.slice(0, number)

    topTen.forEach(entry => {
        entry.day = changeDate(entry.day)
    })

    return topTen
}

function changeDate(date) {
    var temp = date.split("-")
    return `${temp[2]}-${temp[1]}-${temp[0]}`
}

module.exports = reduce