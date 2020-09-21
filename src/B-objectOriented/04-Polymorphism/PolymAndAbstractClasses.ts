abstract class Hero2 {
    //abstract classes prevent the class to be initialized
    hunger: number;
    heath: number;

    constructor() {
        this.hunger = 0;
        this.heath = 0;
    }

    /*
        - The abstract method obligates other classes
        that's going to extends Hero to implements that
        method as well
        - You can't implement the abstract method, just
        override it
    */
    abstract attack(): void;

    move(): void {
        console.log("I'm moving");
    }

    eat(): void {
        console.log("I'm eating");
    }
}

class Archer2 extends Hero {
    arrows: number;

    constructor() {
        super();
        this.arrows = 10;
    }

    attack() {
        console.log("Firing arrow");
        this.arrows -= 1;
    }
}

class Knight2 extends Hero {
    shield: number;

    constructor() {
        super();
        this.shield = 10;
    }

    attack() {
        console.log("I'm swinging with a sword");
    }
}

//Abstract class
const archer: Hero2 = new Archer2(); //that's ok!
const knight2: Hero2 = new Knight2(); //that's ok!
//const bob: Hero2 = new Hero2(); //error

//Abstract method
/*
class Mage2 extends Hero2 {  //error: Non-abstract class 'Mage2' does not implement 
    mana: number;            //inherited abstract member 'attack' from class 'Hero2'.
    
    constructor() {
        super();
        this.mana = 10;
    }
}
*/
