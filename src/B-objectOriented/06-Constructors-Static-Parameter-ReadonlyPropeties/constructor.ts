class Character2 {
    private hunger: number;
    private health: number;

    constructor(hunger: number, health: number) {
        this.health = health;
        this.hunger = hunger;
    }

    setHunger(hunger: number): void {
        this.hunger = hunger;
    }

    getHunger(): number {
        return this.hunger;
    }

    setHealth(health: number): void {
        this.health = health;
    }

    getHealth(): number {
        return this.health;
    }
}

const jeff = new Character2(100, 100);
console.log("the hunger is: " + jeff.getHunger); // the hunger is: 100
console.log("the health is: " + jeff.getHealth); // the health is: 100

class Hero4 extends Character2 {
    private heroId: number;

    constructor(heroId: number, hunger: number, health: number) {
        super(hunger, health);
        this.heroId = heroId;
    }

    setHeroId(heroId: number): void {
        this.heroId = heroId;
    }
}

// Another way to set the instances of the class

class Hero5 {
    constructor(public hunger: number, public health: number) {}
}

const joe = new Hero5(100, 100);
console.log(joe.health); // 100
console.log(joe.hunger); // 100
