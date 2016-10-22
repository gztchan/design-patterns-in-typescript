class Commander {
  executeObject: Executive;

  constructor(executeObject: Executive) {
    this.executeObject = executeObject;
  }

  order(): void {
    this.executeObject.operate();
  }
}

class AirForceCommander extends Commander {
  order(): void {
    console.log('Air Force commander make order')
    // extra logics here
    super.order();
  }
}

class SpecialForceCommander extends Commander {
  order(): void {
    console.log('Special Force commander make order')
    // extra logics here
    super.order();
  }
}

interface Executive {
  operate(): void;
}

class Pilot implements Executive {
  operate(): void {
    console.log('Fly');
  }
}

class Soldier implements Executive {
  operate(): void {
    console.log('Shoot');
  }
}

(function main() {
  const commanderA = new AirForceCommander(new Pilot());
  const commanderB = new SpecialForceCommander(new Soldier());

  commanderA.order();
  commanderB.order();
})();