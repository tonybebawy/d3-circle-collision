const { JSDOM } = require("jsdom");
const d3Selection = require('d3-selection');

test("svg gets created", () => {
    let DOM = new JSDOM("<html><body></body></html>");
    const window = DOM.window;

    let svg = d3Selection.select(window.document)
        .select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    expect(svg.attr('height')).toBe("500");
    expect(svg.attr('width')).toBe("500");
});
