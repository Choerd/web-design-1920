import * as utter from './speaker'

let used = 0

export function render(data) {
    const
        margin = { top: 20, right: 0, bottom: 30, left: 40 },
        width = 1500,
        height = 500

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

    const element = document.querySelectorAll('section svg')[1]

    const svg = d3.select(element)
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
            const message = `${d.name} heeft een waarde van ${d.score}`
            utter.speak(message)
            console.log(d)
        })

        // Style
        .merge(bars)
        .transition().duration(1000)
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.score))
        .attr("height", d => y(0) - y(d.score))
        .attr("width", x.bandwidth())

    used++
}