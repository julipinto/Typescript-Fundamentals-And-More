abstract class Character {
    hunger: number;
    health: number;

    constructor() {
        this.health = 10;
        this.hunger = 10;
    }

    abstract eat(): void;
}

class Hero3 extends Character {
    heroId: number;

    constructor() {
        super();
        this.heroId = 0;
    }

    eat() {
        this.hunger += 1;
    }
}

class Enemy extends Character {
    enemyId: number;

    constructor() {
        super();
        this.enemyId = 0;
    }

    eat() {
        this.hunger += 1;
    }
}

//Spy IS-A Hero, IS-A enemy
//class Spy extends Hero3, Enemy{} --> error

interface IHero extends Character {
    heroId: number;
}

interface IEnemy extends Character {
    enemyId: number;
}

class Spy implements IHero, IEnemy {
    heroId: number;
    enemyId: number;
    hunger: number;
    health: number;

    constructor() {
        this.heroId = 0;
        this.enemyId = 0;
        this.hunger = 10;
        this.health = 10;
    }

    eat() {
        this.hunger -= 1;
    }
}

const hero: IHero = new Spy();
const enemy: IEnemy = new Spy();
