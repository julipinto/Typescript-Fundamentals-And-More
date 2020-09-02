class Animal {
    hunger: number;
    health: number;
    //alows the child to access
    protected cordX: number;
    protected cordY: number;

    constructor() {
        this.hunger = 0;
        this.health = 0;
        this.cordX = 0;
        this.cordY = 0;
    }

    setCordX(cordX: number) {
        this.cordX = cordX;
    }

    setCordY(cordY: number) {
        this.cordY = cordY;
    }

    eat() {
        console.log("I'm eating");
    }

    sleep() {
        console.log("I'm sleeping");
    }

    move() {
        console.log("I'm moving");
    }

    makeNoise() {
        console.log("I'm making noise");
    }
}

class Dog extends Animal {
    //overiding a method
    makeNoise() {
        console.log("Bark");
    }

    //new method
    returnToOwner() {
        console.log(
            `I'm at (${this.cordX}, ${this.cordY}), and now I'm returning to owner`
        );
    }
}

class Cat extends Animal {}
