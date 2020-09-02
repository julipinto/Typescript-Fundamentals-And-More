//By default, typescript set all variables as public

class Player2 {
    private health: number;
    private speed: number;

    constructor() {
        this.health = 5;
        this.speed = 1;
    }

    setHealth(health: number) {
        if (health < 0) {
            console.log("You can't set the health below 0");
            return;
        }
        this.health = health;
    }

    getHealth(): number {
        return this.health;
    }

    setSpeed(speed: number) {
        this.speed = speed;
    }

    getSpeed(): number {
        return this.speed;
    }
}

const mario2 = new Player2();
mario2.setHealth(10);
