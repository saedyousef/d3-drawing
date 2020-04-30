const svg = d3.select('#svg');
svg.append('rect')
    .attr('x', 100)
    .attr('y', 10)
    .attr('width', 200)
    .attr('height', 500)
    .style('fill', 'black');

const red = svg.append('circle')
                .attr('cx', 200)
                .attr('cy', 100)
                .attr('r', 75)
                .style('fill', 'grey');

const green = svg.append('circle')
                .attr('cx', 200)
                .attr('cy', 260)
                .attr('r', 75)
                .style('fill', 'grey');

const yellow = svg.append('circle')
                .attr('cx', 200)
                .attr('cy', 420)
                .attr('r', 75)
                .style('fill', 'grey');

red.on('click', () => {
    red.style('fill', 'red');
    yellow.style('fill', 'grey');
    green.style('fill', 'grey');
});

yellow.on('click', () => {
    red.style('fill', 'grey');
    yellow.style('fill', 'yellow');
    green.style('fill', 'grey');
});

green.on('click', () => {
    red.style('fill', 'grey');
    yellow.style('fill', 'grey');
    green.style('fill', 'green');
});