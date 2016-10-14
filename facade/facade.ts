class EngineSystem {
  activate() {
    console.log('Activate the engine');
  }
}

class MonitorSystem {
  check() {
    console.log('Check system situations');
  }
}

class OxygenSystem {
  generate() {
    console.log('Oxygen will be generated');
  }
}

class RocketTestingOperation {

  private _engineSys: EngineSystem;
  private _monitorSys: MonitorSystem;
  private _oxygenSys: OxygenSystem;

  constructor() {
    this._engineSys = new EngineSystem();
    this._monitorSys = new MonitorSystem();
    this._oxygenSys = new OxygenSystem();
  }

  operationStart() {
    this._monitorSys.check();
    this._oxygenSys.generate();
    this._engineSys.activate();

  }
}

(function main() {
  const operation = new RocketTestingOperation();
  operation.operationStart();
})();