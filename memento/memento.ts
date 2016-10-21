
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

class Memento implements StateInterface {
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

  public createMemento() {
    console.log(`create ${this._state.value} memento`);
    return new Memento(this._state);
  }

  public restoreMemento(memento: Memento) {
    console.log(`restore ${memento.state.value}`);
    this._state = memento.state;
  }
}

class CareTaker {
  private _memento: Memento;

  public set memento(memento: Memento) {
    // memento saved
    this._memento = memento;
  }

  public get memento() {
    return this._memento;
  }
}

(function main(){
  // Save check point
  const oldState = new State('check point');
  const originator = new Originator(oldState);
  const careTaker = new CareTaker();
  careTaker.memento = originator.createMemento();

  // Player dies
  const currentState = new State('die');
  originator.state = currentState;

  // Player reset to check point
  originator.restoreMemento(careTaker.memento);

  // Player gain medel
  const medalState = new State('get medal');
  originator.state = medalState;
  // Save
  careTaker.memento = originator.createMemento();

})();