let animalPopulation = 0;
let allAnimals = [];
var foodLog = "";
const animals = document.getElementById("animals");
window.addEventListener("load", run);
document.getElementById("newAnimal").addEventListener("click", createAnimal);
document.getElementById("feed").addEventListener("click", feedAnimals);
document.getElementById("delete").addEventListener("click", deleteAnimal);
document.getElementById("newName").addEventListener("click", changeName);

function run() {
    let tigger=new Tiger("Tigger");
    let pooh=new Bear("Pooh");
    let rarity=new Unicorn("Rarity");
    let gemma=new Giraffe("Gemma");
    let stinger=new Bee("Stinger");
    allAnimals.push(tigger,pooh,rarity,gemma,stinger);
    listAnimals();
    for (let i=0; i<5; i++) {
        animals.options[animals.options.length] = new Option(allAnimals[i].name,(i));
    }
    
    

}


class Animal {

    constructor(name,favoriteFood,species) {
        this.name=name;
        this.favoriteFood=favoriteFood;
        this.species=species;
        animalPopulation++;
    }
    
    static getPopulation() {
        return animalPopulation;
    }
    
    sleep() {
        foodLog+=this.name + " sleeps for 8 hours"+". ";
    }

    eat(food) {
        foodLog+=this.name+" eats "+food+". ";
        if(food==this.favoriteFood) {
            foodLog+="YUM!!! "+this.name+" wants more "+food+". ";
        } else {
            this.sleep(this.name);
        }
    }
}

class Tiger extends Animal {

    constructor(name) {
        super(name,"meat","Tiger");
    }

    
}

class Bear extends Animal {
    constructor(name) {
        super(name,"fish","Bear");
    }
    
    sleep() {
        foodLog+=this.name + " hibernates for 4 months"+". ";
    }
    
}

class Unicorn extends Animal {
    constructor(name) {
        super(name,"marshmallows","Unicorn");
    }
    
    sleep() {
        foodLog+=this.name+" sleeps in a cloud"+". ";
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name,"leaves","Giraffe");
    }
    
    eat(food) {
        if (food==this.favoriteFood) {
            super.eat(food);
            super.sleep();
        } else {
            foodLog+="YUCK!!! "+this.name +" will not eat "+food+". ";
        }
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name,"pollen","Bee");
    }
    
    eat(food) {
        if (food==this.favoriteFood) {
            super.eat(food);
            this.sleep();
        } else {
            foodLog+="YUCK!!! "+this.name +" will not eat "+food+". ";
        }
    }
    
    sleep() {
        foodLog+=this.name+" never sleeps"+". ";
    }
}




function createAnimal() {
    let name = document.getElementById("name").value;
    let temp;
    let val = document.getElementById("animal").value;
    
    if (val==1) {
        temp = new Tiger(name);
    } else if(val==2) {
        temp = new Bear(name);
    } else if(val==3) {
        temp = new Unicorn(name);
    } else if(val==4) {
        temp = new Giraffe(name);
    } else if (val==5) {
        temp = new Bee(name);
    }
    allAnimals.push(temp);
    animals.options[animals.options.length] = new Option(name,animalPopulation-1);
    listAnimals();
}


function feedAnimals() {
    foodLog="";
    let food = document.getElementById("food").value;
    
    for (let i=0; i<allAnimals.length; i++) {
        allAnimals[i].eat(food);
    }
    document.getElementById("foodLog").innerHTML=foodLog;
}

function listAnimals() {
    tempStr=""
    for(let i=0; i<allAnimals.length; i++) {
        tempStr+=allAnimals[i].species+": "+allAnimals[i].name+", ";
    }
    document.getElementById("animalList").innerHTML=tempStr;
}

function deleteAnimal() {
    animalPopulation--;
    let index = animals.value;
    allAnimals.splice(index,1);

    while (animals.options.length>0) {
        animals.remove(0);
    }
    for (let i=0; i<allAnimals.length; i++){
        animals.options[animals.options.length] = new Option(allAnimals[i].name,i);
    }
    listAnimals();
}

function changeName() {
    let index = animals.value;
    let name = document.getElementById("new").value;
    allAnimals[index].name=name;
    console.log(index+" "+name)
    animals.options[index]=new Option(name,index);
    listAnimals();
}
