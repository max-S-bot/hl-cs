'use strict';
//const print = console.log;

let H, W;
const P = .5;
const RES = 15;
const DELAY = 300;

const alive = [255, 255, 255];
const dead = [0, 0, 0];

let grid;
let interval;

const inRange = (k, l) => k >= 0 && k < H && l >= 0 && l < W;

const drawCell = (i, j) => {
    fill(...(grid[i][j] ? alive : dead)); // eslint-disable-line
    rect(j*RES, i*RES, RES, RES); // eslint-disable-line
    return grid[i][j];
}

const drawAndNext = (i, j) => { 
    drawCell(i, j);
    let liveNeighbors = 0;
    for (let k = i-1; k <= i+1; k++)
        for (let l = j-1; l <= j+1; l++)
            liveNeighbors += (k != i || l != j) && inRange(k, l) && grid[k][l];
    return liveNeighbors == 3 || (grid[i][j] && liveNeighbors == 2);
}

const doGrid = () => 
    grid = Array.from(new Array(H), () => 
        Array.from(new Array(W), () => 
            Math.random() < P));

const draw = (func) => {
    background(240); // eslint-disable-line
    grid = grid.map((r, i) => r.map((e, j) => func(i, j)));
}

const makeInterval = () => 
    interval = !interval ? setInterval(draw, DELAY, drawAndNext) : interval;

const button = (name, func) => {
    const b = document.createElement('button');
    b.innerHTML = name;
    b.addEventListener('click', func);
    b.style = "margin: 10px"
    document.body.appendChild(b);
}

function setup() { // eslint-disable-line
    W = Math.floor(windowWidth / RES); // eslint-disable-line
    H = Math.floor((windowHeight-50) / RES); // eslint-disable-line
    createCanvas(RES*W, RES*H); // eslint-disable-line
    doGrid();
    makeInterval();
    button('restart', doGrid);
    button('pause', () => interval = clearInterval(interval));
    button('unpause', makeInterval);
}

// works kind of approximately
function mousePressed(event) { // eslint-disable-line
    const i = Math.floor(event.y / RES);
    const j = Math.floor(event.x / RES) - 1;
    if (inRange(i, j))
        grid[i][j] = !grid[i][j];
    draw(drawCell);
}

