interface Observer {
  uniqueID: string;
  update(): void;
}

class ConcreteObserver implements Observer {
  public uniqueID: string
  constructor(uniqueID: string) {
    this.uniqueID = uniqueID;
  }

  update(): void {
    console.log(`${this.uniqueID} updates something...`);
  }
}

function findObserver(obs: Observer[], uniqueID: string) {
  let index = 0;
  const existed = obs.some((observer, idx) => {
    index = idx;
    return observer.uniqueID === uniqueID;
  });
  return {
    existed,
    index
  };
}

class Subject {
  private _observers: Observer[];
  constructor() {
    this._observers = [];
  }

  registerObserver(ob: Observer) {
    const id: string = ob.uniqueID;
    if (findObserver(this._observers, id).existed) {
      return console.log(`Observer ${id} is already in list`);
    }
    this._observers.push(ob);
    console.log(`Observer ${ob.uniqueID} is pushed into list`);
    console.log(this._observers);
  }

  removeObserver(uniqueID: string) {
    const { existed, index } = findObserver(this._observers, uniqueID);
    if (existed) {
      this._observers.splice(index, 1);
      console.log(`Observer ${uniqueID} is removed from list`);
    } else {
      console.log('Observer not existed');
    }
  }

  notifyObservers() {
    console.log('Subject notify all observers >>');
    this._observers.map((observer) => {
      observer.update();
    });
  }
}

(function main() {
  const subject = new Subject();

  const obA = new ConcreteObserver('A');
  const obB = new ConcreteObserver('B');
  const obC = new ConcreteObserver('C');

  subject.registerObserver(obA);
  subject.registerObserver(obA); // already existed

  subject.registerObserver(obB);
  subject.registerObserver(obC);

  subject.notifyObservers();
})();
