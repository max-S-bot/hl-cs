const H = 8;
const W = 8;
const P = .5

const grid = Array.from(new Array(H), () => Array.from(new Array(W), () => Math.random() < P));

const inRange = (k, l) =>  k >= 0 && k < H && l >= 0 && l < W

function nextStatus(val, i, j) { 
    let liveNeighbors = 0
    for (let k = i-1; k < i+1; i++)
        for (let l = j-1; j < j+1; j++)
            liveNeighbors += (k != i || l != j) && inRange(k, l) && grid[k][l];
    return liveNeighbors == 3 || (val && liveNeighbors == 2);
}
