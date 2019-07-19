const { JSDOM } = require("jsdom");
const d3Selection = require('d3-selection');

function render() {
    let DOM = new JSDOM("<html><body></body></html>");
    let window = DOM.window;

    let data = [{
        "title": "circle1",
        "coordinates": {
            "x": 10,
            "y": 10
        }
    }, {
        "title": "circle2",
        "coordinates": {
            "x": 13,
            "y": 13
        }
    }];

    return d3Selection.select(window.document)
        .select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500)
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr("transdform", function (d) {
            return `translate(${d.coordinates.x},${d.coordinates.y})`
        })
        .attr('r', 10);
}

test("circles get created", () => {
    let circles = render();

    expect(circles.nodes().length).toBe(2);
});
