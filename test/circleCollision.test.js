const { JSDOM } = require("jsdom");
const d3Selection = require('d3-selection');

function render() {
    let DOM = new JSDOM("<html><body></body></html>");
    let window = DOM.window;


    return d3Selection.select(window.document)
        .select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);
}

test("svg rendering", () => {
    let svg = render();
    expect(svg.node().tagName.toLowerCase()).toBe("svg");
    expect(svg.attr("height")).toBe("500");
    expect(svg.attr("height")).toBe("500");
});

test("circle collisions", () => {
    let svg = render();
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

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr("transdform", function (d) {
            return `translate(${d.coordinates.x},${d.coordinates.y})`
        })
        .attr('r', 10);
});
