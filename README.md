# d3-circleCollision

Circle collision detection for D3

## Installing

### NPM
run `npm install d3-circleCollision` 

### CDN
https://cdn.jsdelivr.net/npm/d3-circleCollision@1.0.0
```html
<script src="https://cdn.jsdelivr.net/npm/d3-circleCollision@1.0.0"></script>
```
### Download
Download the [latest release](https://github.com/d3/d3-circleCollision/releases/latest).

## API Reference

YOUR API DOCUMENTATION HERE. Use bold for symbols (such as constructor and method names) and italics for instances. See the other D3 modules for examples.

<a href="#circleCollision" name="circleCollision">#</a> <b>circleCollision</b>(*circles*)

takes in a selection of circles and returns an array of objects. Each object in the array represents a group in which the circles collide. The object includes:
- a. the coordinates of collisions
- b. combined data in the form of an array of the collided circles
