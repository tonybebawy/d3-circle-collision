const { JSDOM } = require("jsdom");
const d3Selection = require('d3-selection');
let d3 = require('../');

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

// test with no collisions

// test with 1 collision

// test with more then 1 collision

// test with no collisions and hide set to true

// test with 1 collision and hide set to true

// test with more then 1 collision and hide set to true