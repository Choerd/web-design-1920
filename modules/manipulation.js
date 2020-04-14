function reduce(data, number) {

    console.log(data[0].day)
    console.log(changeDate(data[0].day))

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