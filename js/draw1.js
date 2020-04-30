const svg = d3.select('#svg');
let drawing = false;

function draw_point()
{
    if (drawing === false)
        return;
    const coords = d3.mouse(this);
    svg.append('circle')
        .attr('cx', coords[0])
        .attr('cy', coords[1])
        .attr('r', 5)
        .style('fill', 'black')
}

svg.on('mousedown', () => {
    drawing = true;
})

svg.on('mouseup', () => {
    drawing = false;
})

svg.on('mousemove', draw_point);