
interface Action {
  move(location: [number, number]): void;
  shoot?(target: string, location: [number, number]): void;
  cure?(mate: string, location: [number, number]): void;
}

class Soldier implements Action {

  private equipmentSet: string;
  number: number;

  constructor(set: string, number: number) {
    // initialization consumes time
    this.equipmentSet = set;
    this.number = number;
    console.log(`new soldier ${number}`);
  }

  move(location: [number, number]): void {
    console.log(`move to ${location}`)
  }

  shoot?(target: string, location: [number, number]): void {
    console.log(`damage ${target} at ${location}`);
  }

  cure?(mate: string, location: [number, number]): void {
    console.log(`cure ${mate} at ${location}`);
  }
}

class SoldierAcademy {
  private static groups: { [set: string]: Soldier } = {}

  public static getSoldier(set: string, num: number) {
    let soldier = SoldierAcademy.groups[set];

    if (!soldier) {
      soldier = new Soldier(set, num);
      SoldierAcademy.groups[set] = soldier;
    } else {
      soldier.number = num;
      console.log(`shared soldier ${soldier.number}`);
    }

    return soldier;
  }
}

(function main() {
  const start = Math.floor(Date.now());
  for (let i = 0; i < 1000000; i++) {
    // new Soldier('normal-set', i); // create 1m real soldiers
    SoldierAcademy.getSoldier('normal-set', i); // create 1 soldier
  }
  const end = Math.floor(Date.now());
  console.log(end - start);
})()