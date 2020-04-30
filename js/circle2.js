const svg = d3.select('#svg');
const c = svg.append('circle')
    .attr('cx', 200)
    .attr('cy', 200)
    .attr('r', 90)
    .style('fill', 'green');

c.transition()
.duration(1000)
.delay(1000)
.attr('cx', 500);

c.on('click', function() {
    d3.select(this).transition()
                    .duration(3000)
                    .style('fill', 'red');
});