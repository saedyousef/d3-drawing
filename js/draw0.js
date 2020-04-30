const svg = d3.select('#svg');

function draw_point()
{
    const coords = d3.mouse(this);
    svg.append('circle')
        .attr('cx', coords[0])
        .attr('cy', coords[1])
        .attr('r', 5)
        .style('fill', 'black')
}

svg.on('mousemove', draw_point);