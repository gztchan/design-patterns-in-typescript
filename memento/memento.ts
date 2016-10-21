
class State {
  private _value: String;

  constructor(value) {
    this._value = value;
  }

  public set value(newValue: String) {
    this._value = newValue;
  }

  public get value() {
    return this._value;
  }
}

interface StateInterface {
  state: State;
}

class Memeto implements StateInterface {
  private _state: State;

  constructor(state: State) {
    this._state = state;
  }

  public set state(newState: State) {
    this._state = newState;
  }

  public get state() {
    return this._state;
  }
}

class Originator implements StateInterface {
  private _state: State;

  constructor(state: State) {
    console.log(state.value);
    this._state = state;
  }

  public set state(state: State) {
    console.log(state.value);
    this._state = state;
  }

  public get state() {
    return this._state;
  }

  public createMemeto() {
    console.log(`create ${this._state.value} memeto`);
    return new Memeto(this._state);
  }

  public restoreMemeto(memeto: Memeto) {
    console.log(`restore ${memeto.state.value}`);
    this._state = memeto.state;
  }
}

class CareTaker {
  private _memeto: Memeto;

  public set memeto(memeto: Memeto) {
    // memeto saved
    this._memeto = memeto;
  }

  public get memeto() {
    return this._memeto;
  }
}

(function main(){
  // Save check point
  const oldState = new State('check point');
  const originator = new Originator(oldState);
  const careTaker = new CareTaker();
  careTaker.memeto = originator.createMemeto();

  // Player dies
  const currentState = new State('die');
  originator.state = currentState;

  // Player reset to check point
  originator.restoreMemeto(careTaker.memeto);

  // Player gain medel
  const medalState = new State('get medal');
  originator.state = medalState;
  // Save
  careTaker.memeto = originator.createMemeto();

})();