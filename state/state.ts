interface ATMState {
  name?: string;
  takeCash(cash: number): void;
}

class ATMHasCashState implements ATMState {
  private _machine: ATMMachine;
  name: string;
  constructor(machine: ATMMachine, name: string) {
    this.name = name;
    this._machine = machine;
  }

  takeCash(cash: number): void {
    if (this._machine.cash < cash) {
      this._machine.state = this._machine.noCashState();
      console.log('Not enough cash');
      return;
    } else if (this._machine.cash === cash) {
      this._machine.state = this._machine.noCashState();
      console.log('No cash after cash token');
    }
    console.log(`${this._machine.cash} - ${cash}`);
    this._machine.cash -= cash;
  }
}

class ATMNoCashState implements ATMState {
  private _machine: ATMMachine;
  name: string;
  constructor(machine: ATMMachine, name: string) {
    this.name = name;
    this._machine = machine;
  }

  takeCash(cash: number): void {
    throw new Error('ATMMachine has no cash');
  }
}

class ATMMachine implements ATMState {

  private _hasCashState: ATMHasCashState;
  private _noCashState: ATMNoCashState;

  private _currentState: ATMState;
  
  public cash: number;
  
  constructor(cash: number) {
    this.cash = cash;

    this._hasCashState = new ATMHasCashState(this, 'HasCash');
    this._noCashState = new ATMNoCashState(this, 'NoCash');

    this._currentState = this.cash ? this._hasCashState : this._noCashState;
  }

  public set state(value: ATMState) {
    console.log(`Current state is ${value.name}`);
    this._currentState = value;
  }

  public get state() {
    return this._currentState;
  }

  takeCash(cash: number): void {
    this._currentState.takeCash(cash);
  }

  // Get states
  public hasCashState() {
    return this._hasCashState;
  }

  public noCashState() {
    return this._noCashState;
  }
}

(function main() {
  const machine  = new ATMMachine(1000);
  machine.takeCash(200); // has cash
  machine.takeCash(1000); // not enough
})();
