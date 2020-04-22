const
    submit = document.querySelector('section form input[type="submit"]'),
    input = document.querySelector('section form input[type="text"]')

submit.addEventListener('click', (event) => {
    event.preventDefault()

    const url = { url: input.value }

    fetch('/', {
        method: 'POST',
        body: JSON.stringify(url),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => {
            createTitle(data.url)
            render(data.audit)
        })

    input.value = ''
})

function createTitle(data) {
    document.querySelector('[title]').textContent = `Deze data is afkomstig van: ${data}`
}

const
    margin = {
        top: 20,
        right: 0,
        bottom: 30,
        left: 40
    },
    width = 1000,
    height = 500

let used = 0

function render(data) {
    const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([margin.left, width - margin.right])
        .padding(0.2)

    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height - margin.bottom, margin.top])

    const xAxis = g => g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))

    const yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())

    const svg = d3.select("svg")
        .attr("viewBox", [0, 0, width, height])

    if (used === 0) {
        svg.append("g")
            .call(xAxis)
            .attr('class', 'xAxis')

        svg.append("g")
            .call(yAxis)
            .attr('class', 'yAxis')

        svg.append("g")
            .attr('class', 'bars-container')
    }

    const bars = d3.select('.bars-container')
        .selectAll('rect')
        .data(data)

    bars
        .enter().append("rect")

        // Interaction
        .attr("tabindex", '0')
        .on('focus', (d) => {
            const message = `${d.name} heeft een waarde van ${d.value}`
            speak(message)
            console.log(d)
        })

        // Style
        .attr("fill", "red") // css
        .merge(bars)
        .transition().duration(1000)
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth())

    used++
}

const synth = window.speechSynthesis
function speak(message) {
    synth.cancel()

    const utter = new SpeechSynthesisUtterance()
    utter.text = message

    synth.speak(utter)
}