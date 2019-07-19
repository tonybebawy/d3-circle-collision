import * as d3Selection from "d3-selection";
// const d3Selection = require("d3-selection");

function distance(pos1, pos2) {
    let [x1, y1] = pos1;
    let [x2, y2] = pos2;

    let dx = x1 - x2;
    let dy = y1 - y2;

    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}

function parseTransform(value) {
    let values = value.substring(10, value.length - 1).split(',');
    return [+values[0], +values[1]];
}

function groups(circles) {
    let groups = [];

    circles.each(function (d) {
        let c1 = d3Selection.select(this);
        let pos1 = parseTransform(c1.attr("transform"));

        circles.each(function (k) {
            let c2 = d3Selection.select(this);
            let pos2 = parseTransform(c2.attr("transform"));

            if (+c1.attr("r") + +c2.attr("r") >= distance(pos1, pos2)) {
                let addToGroup = false;
                let groupIndex = 0;

                groups.forEach(function (el, i) {
                    if (el.includes(c1.node())) {
                        addToGroup = true;
                        groupIndex = i;
                    }
                });

                if (addToGroup) {
                    if (!groups[groupIndex].includes(c2.node()))
                        groups[groupIndex].push(c2.node());
                } else {
                    if (c1.node() != c2.node())
                        groups.push([c1.node(), c2.node()]);
                }
            }
        });
    });

    return groups;
}


function groupData(groups, hide) {
    let newlyBoundData = [];

    groups.forEach(function (group) {
        let xSum = 0;
        let ySum = 0;

        let obj = { "data": [], "coordinates": { "x": 0, "y": 0 } };

        group.forEach(function (element) {
            let circle = d3Selection.select(element);

            obj.data.push(circle.datum());

            let [x, y] = parseTransform(circle.attr("transform"));
            xSum += x;
            ySum += y;

            if (hide) {
                circle.style("display", "none");
            }
        });

        let ax = Math.floor(xSum / group.length);
        let ay = Math.floor(ySum / group.length);

        obj.coordinates.x = ax;
        obj.coordinates.y = ay;

        newlyBoundData.push(obj);
    });

    return newlyBoundData;
}

export default function (selection, hide = false) {
    return groupData(groups(selection), hide);
}
