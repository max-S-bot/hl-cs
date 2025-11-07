

const animals = [Bear,Fish,Fox];
const w = self.innerHeight*.95-50;
const h = w;
const initNum = 7



function setup() {
    for (let i=0; i<50; i++) new Fish();
    for(let i=0; i<10; i++) new Fox();
    for(let i=0; i<3; i++) new Bear();
}

function draw() {
    createCanvas(w,h);
    background(500);
    animalInteraction();
    for (const organism of Organism.orgs) {
        organism.move();
    }
    Organism.orgs = Organism.orgs.filter(e=>e.health>0);
}

//makes animal eat each other
function animalInteraction() {
    for (const org of Organism.orgs) {
        for (const other of Organism.orgs) {
            if (d(org,other)<3.69420)
                org.interact(other);
        }
    }
}

function d(e,el) {
    const centDist = Math.sqrt((e.x-el.x)**2+(e.y-el.y)**2);
    return centDist-(e.rad+el.rad);
}