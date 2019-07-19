const { JSDOM } = require("jsdom");
const d3Selection = require('d3-selection');

function render() {
    let DOM = new JSDOM("<html><body></body></html>");
    const window = DOM.window;

    return d3Selection.select(window.document)
        .select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);
}

test("svg gets created", () => {
    let circles = render();

    expect(circles.attr('height')).toBe("500");
    expect(circles.attr('width')).toBe("500");
});
