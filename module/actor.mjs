export class PlayerActor extends Actor {
    async changeHealth(change) {
        change = Math.round(change);
        const { value } = this.system.health;
        await this.update({"system.health.value": value + change});
    }

    async changeCursedEnergy(change) {
        change = Math.round(change);
        const { value } = this.system.cursedEnergy;
        await this.update({"system.cursedEnergy.value": value + change});
    }

    prepareBaseData() {
        super.prepareBaseData();

        const { health, cursedEnergy, armorClass, speed, stats } = this.system;
        
        // Calculate base character values
        health.max = 10 + stats.power * 5;
        cursedEnergy.max = 15 + stats.technique * 5;
        armorClass = stats.technique + stats.speed;
        speed = 30 + (stats.speed * 5);
    }

    prepareDerivedData() {
        super.prepareDerivedData();

        const { health, cursedEnergy } = this.system;
        
        // Clamp health & CE values within range
        health.value = Math.min(Math.max(health.value,health.min),health.max)
        cursedEnergy.value = Math.min(Math.max(cursedEnergy.value,cursedEnergy.min),cursedEnergy.max)
    }
}