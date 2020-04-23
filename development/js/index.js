import * as graph from './modules/graph'

const
    submit = document.querySelector('section form input[type="submit"]'),
    input = document.querySelector('section form input[type="text"]'),
    loading = document.querySelector('[loading]')


submit.addEventListener('click', (event) => {
    event.preventDefault()

    const html = [...document.querySelector('section').children]
    html.shift()

    console.log('fetching data started')
    loading.className = 'block'

    fetch('/', {
        method: 'POST',
        body: JSON.stringify({ url: input.value }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {

            title(data.url)
            graph.render(data.audits)
            info(data.accessibility)

            loading.className = 'hide'
        })

    input.value = ''
})

function title(data) {
    document.querySelector('[title]').textContent = `Deze data is afkomstig van: ${data}`
}

function info(data) {
    const array = ["Good", "Decent", "Bad"]
    const container = document.querySelector('[buttons]')

    container.innerHTML = ''

    if (document.querySelector('.more-info')) {
        document.querySelector('.more-info').remove()
    }

    const div = document.createElement('div')
    div.className = 'more-info'
    document.querySelector('section').insertAdjacentElement('beforeend', div)

    array.forEach(string => {
        const div = document.createElement('div')
        div.textContent = string
        container.insertAdjacentElement('afterbegin', div)

        div.addEventListener('click', (event) => {
            const buttons = [...document.querySelectorAll('[buttons] div')]
            buttons.forEach(button => {
                button.className = ''
            })
            event.target.className = 'active'

            appendDetails(event.target.textContent, data)
        })
    })
}

function appendDetails(button, data) {
    const seperate = seperatedData(button, data)
    const container = document.querySelector('.more-info')

    container.innerHTML = ''

    seperate.map(entry => {
        container.append(article(entry))
    })

}

function seperatedData(button, data) {
    if (button === 'Bad') {
        return data.filter(entry => entry.score < 50)
    } else if (button === 'Decent') {
        return data.filter(entry => entry.score >= 50 && entry.score < 75)
    } else if (button === 'Good') {
        return data.filter(entry => entry.score >= 75)
    }
}

function article(data) {
    const article = document.createElement('article')

    const title = document.createElement('p')
    const description = document.createElement('p')
    const score = document.createElement('p')

    title.textContent = data.title
    description.textContent = data.description
    score.textContent = `Score: ${data.score}`

    article.append(title)
    article.append(description)
    article.append(score)

    return article
}