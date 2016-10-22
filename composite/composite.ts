interface ArmyObject {
  seq: String;
  operate(): void;
}

class Team implements ArmyObject {
  seq: String;
  private _soldiers: ArmyObject[];

  constructor(seq: String) {
    this.seq = seq;
    this._soldiers = [];
  }

  operate(): void {
    console.log(`Team: ${this.seq} operates`)
    this._soldiers.map((soldier: ArmyObject) => {
      soldier.operate();
    });
  }

  addSoldier(newSoldier: ArmyObject) {
    const soldiers = this._soldiers.filter((soldier: ArmyObject, index) => {
      return soldier.seq === newSoldier.seq;
    })
    if (soldiers.length < 1) {
      console.log(`Soldier: ${newSoldier.seq} comes in ${this.seq}`);
      this._soldiers.push(newSoldier);
    } else {
      console.log('The soldier is already in the team');
    }
  }

  soldierGone(deadSoldier: ArmyObject) {
    const deads = this._soldiers.map((soldier: ArmyObject, index) => {
      if (soldier.seq === deadSoldier.seq) {
        return index;
      }
    })
    if (deads.length > 0) {
      console.log(`Soldier: ${deadSoldier.seq} died in the fight`);
      this._soldiers.slice(deads[0], 1);
    } else {
      console.log('No one dies');
    }
  }
}

class Soldier implements ArmyObject {
  seq: String;

  constructor(seq: String) {
    this.seq = seq;
  }

  operate() {
    console.log(`Soldier: ${this.seq} soldier operates`);
  }
}

(function main() {
  const team = new Team('Seal Team 6');
  const specialSquad = new Team('Seal Team 6 - Special Squad');

  const soldierJoe = new Soldier('Joe');
  const soldierJames = new Soldier('James');
  const soldierRoy = new Soldier('Roy');
  team.addSoldier(soldierJoe);
  team.addSoldier(soldierJames);
  team.addSoldier(soldierRoy);

  const specialForceTommy = new Soldier('Tommy');

  specialSquad.addSoldier(specialForceTommy);

  team.operate();
  specialSquad.operate();

  team.soldierGone(soldierJames);
})();
