import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default [
{
    input: './index.js',
    output: {
        extend: true,
        name: 'd3',
        file: './dist/d3-circleCollision.min.js',
        format: 'umd',
        globals: {
            'd3-selection': "d3Selection"
        }
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs(),
        uglify()
    ]
},
{
    input: './index.js',
    output: {
        extend: true,
        name: 'd3',
        file: './dist/d3-circleCollision.js',
        format: 'umd',
        globals: {
            'd3-selection': "d3Selection"
        }
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        commonjs()
    ]
}];