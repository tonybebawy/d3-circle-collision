# d3-circleCollision

Circle collision detection for D3

## Installing

### NPM
run `npm install d3-circleCollision` 
```javascript
const d3CircleCollision = require('d3-circleCollision');
```

### CDN
https://cdn.jsdelivr.net/npm/d3-circleCollision@1.0.0
```html
<script src="https://cdn.jsdelivr.net/npm/d3-circleCollision@1.0.0"></script>
```
### Download
Download the [latest release](https://github.com/d3/d3-circleCollision/releases/latest).

## API Reference

<a href="#circleCollision" name="circleCollision">#</a> <b>circleCollision</b>(*circles*, *hide*)

takes in a selection of circles and whether the old circles should be hidden or not and returns an array of objects. Each object in the array represents a group in which the circles collide and contains the collision coordinates and the combined data in the form of an array of the collided circles.
