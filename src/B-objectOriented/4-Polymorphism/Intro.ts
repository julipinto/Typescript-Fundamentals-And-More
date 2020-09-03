class Hero {
    hunger: number;
    heath: number;

    constructor() {
        this.hunger = 0;
        this.heath = 0;
    }

    attack() {
        console.log("I'm attacking");
    }

    move() {
        console.log("I'm moving");
    }

    eat() {
        console.log("I'm eating");
    }
}

class Acher extends Hero {
    arrows: number;

    constructor() {
        super();
        this.arrows = 10;
    }

    attack() {
        super.attack();
        console.log("Firing arrow");
        this.arrows -= 1;
    }
}

class Mage extends Hero {
    mana: number;

    constructor() {
        super();
        this.mana = 10;
    }

    attack() {
        super.attack();
        console.log("Throwing a potion");
        this.mana -= 1;
    }
}

class Knight extends Hero {
    shield: number;

    constructor() {
        super();
        this.shield = 10;
    }

    attack() {
        super.attack();
        console.log("I'm swinging with a sword");
    }
}

class Tribe {
    private heroes: Hero[];

    constructor() {
        this.heroes = [];
    }

    setHeroes(heroes: Hero[]) {
        this.heroes = heroes;
    }

    attack(): void {
        for (let hero of this.heroes) {
            hero.attack();
        }
    }
}

const acher: Hero = new Acher();
const mage = new Mage();
const knight = new Knight();

const heroes: Hero[] = [acher, mage, knight];

const tribe = new Tribe();
tribe.setHeroes(heroes);

tribe.attack();

class Thief extends Hero {
    attack() {
        super.attack();
        console.log("Pick pocket");
    }
}

class Wizard extends Mage {}
class Witch extends Mage {}

const wizard: Hero = new Wizard();
const wizard2: Mage = new Wizard();
const wizard3: Wizard = new Wizard();
