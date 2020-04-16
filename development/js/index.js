import * as audits from './modules/module'

const
    margin = {
        top: 20,
        right: 0,
        bottom: 30,
        left: 40
    },
    width = 1000,
    height = 500

const data = audits.get()

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

function render() {
    const svg = d3.select("svg")
        .attr("viewBox", [0, 0, width, height])

    svg.append("g")
        .attr("class", "bars")
        .attr("fill", "red")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))

        // Added accessibility
        .attr("tabindex", '0')
        .on('focus', (d) => {
            const message = `${d.name} heeft een waarde van ${d.value}`
            speak(message)
            console.log(d)
        })

        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth())

    svg.append("g")
        .attr("class", "x-axis")
        .call(xAxis)

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis)
}

const auditData = document.querySelector('#audit-data')
if (auditData) {
    render()
}

const synth = window.speechSynthesis
function speak(message) {
    synth.cancel()

    const utter = new SpeechSynthesisUtterance()
    utter.text = message

    synth.speak(utter)
}