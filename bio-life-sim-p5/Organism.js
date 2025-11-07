class Organism {
    static orgs = [];
    constructor(color,dx,dy,minRad,maxRad) {
        this.x = Organism.randX();
        this.y = Organism.randY();
        this.color = color;
        this.dx = dx;
        this.dy = dy;
        this.rad = random(minRad,maxRad);
        this.health = 100;
        this.fert = true;
        Organism.orgs.push(this);
        Object.seal(this);
    }

    move() {
        if (this.y+this.rad>=h||this.y-this.rad<=0) this.dy *= -1; 
        if (this.x+this.rad>=w||this.x-this.rad<=0) this.dx *= -1;
        this.x += this.dx;
        this.y += this.dy;
        this.display();
    }

    display() {
        this.health-=.01;
        fill(this.color);
        circle(this.x,this.y,2*this.rad);
    }
    
    interact(other) {
        if (other.constructor.name===other.constructor.name) {
            if (other.fert&&this.fert&&this!==other) {
                this.fert = false;
                other.fert = false;
                console.log("new "+this.constructor.name)
                new this.constructor();
                setTimeout(()=>{this.fert=true;other.fert=true;},20000);
            }
        }
    }

    static randX() {
        return Math.floor(w*Math.random());
    }

    static randY() {
        return Math.floor(h*Math.random());
    }
}

class Bear extends Organism {
    constructor() {
        super('brown',1,1,20,30);
    }

    interact(other) {
        super.interact(other);
        if (other.constructor.name==="Fox") {
            this.health+=3;
        }
        if(other.constructor.name==="Fish") {
            this.health+=1;
        }
    }
}

class Fish extends Organism {
    constructor() {
        super('yellow',2,2,5,10);
    }

    interact(other) {
        super.interact(other);
        if(other.constructor.name==="Bear") {
            this.health-=5;
        } 
        if(other.constructor.name==="Fox") {
            this.health-=3;
        }
    }
}

class Fox extends Organism {
    constructor() {
        super('red',3,3,10,20);
    }

    interact(other) {
        super.interact(other);
        if (other.constructor.name==="Bear") {
            this.health-=3;
        } 
        if(other.constructor.name==="Fish") {
            this.health+=2;
        }
    }
}