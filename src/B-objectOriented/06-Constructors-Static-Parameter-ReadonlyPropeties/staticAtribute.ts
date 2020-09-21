class Character3 {
    static characterCount = 0;

    constructor(private hunger: number, private health: number) {
        Character3.characterCount += 1;
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

Character3.characterCount; // can be accessed everywhere

//readOnly prop -> doesn't have access to change it (setters)
