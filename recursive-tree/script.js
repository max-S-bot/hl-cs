// Fractal Tree
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/14-fractal-trees-recursive
// https://youtu.be/0jjeOYMjmDU

// comment

// https://editor.p5js.org/codingtrain/sketches/xTjmYXU3q
document.getElementById("do stuff").addEventListener("click", () => {
    options[document.getElementById("options").value]();
})

let angle = 0;
let slider;
let dif = .01;
let color = [50, 150, 130];

function setup() {
  createCanvas(640, 360);
  //slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(0);
  angle = (angle + dif) % TWO_PI;
  stroke(...color);
  strokeWeight(2);
  translate(width * 0.5, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}

const options = {
    "colorize": () => {
        color = [Math.random()*256, Math.random()*256, Math.random()*256];
    },
    "go faster": () => {
        dif += .01;
    },
    "go slower": () => {
        dif -= .01;
    }
}
