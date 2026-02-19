'use strict';

let H, W;
const P = .5;
const RES = 15;
const DELAY = 400;

const alive = [255, 255, 255];
const dead = [0, 0, 0];

let grid;

let interval;

const inRange = (k, l) => k >= 0 && k < H && l >= 0 && l < W;

const drawAndNext = (i, j) => { 
    fill(...(grid[i][j] ? alive : dead));
    rect(j*RES, i*RES, RES, RES);
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

const makeInterval = () => 
    interval = setInterval(() => {
        background(240);
        grid = grid.map((r, i) => r.map((e, j) => drawAndNext(i, j)));    
    }, DELAY);

function setup() {
    W = Math.floor(windowWidth / RES);
    H = Math.floor((windowHeight-50) / RES);
    createCanvas(RES*W, RES*H);
    doGrid();
    makeInterval()
    button('restart', doGrid);
    button('pause', clearInterval, () => [interval]);
    button('unpause', makeInterval);
}

function button(name, func, args = () => []) {
    const b = document.createElement('button');
    b.innerHTML = name;
    b.addEventListener('click', () => func(...args()));
    document.body.appendChild(b);
}