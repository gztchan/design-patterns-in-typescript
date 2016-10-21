class Handler {
  private _successor: Handler;

  public set successor(successor: Handler) {
    this._successor = successor;
  }

  public get successor() {
    return this._successor;
  }

  public handleRequest(msg: Number): void {};
}

class ConcreteHandlerA extends Handler {

  handleRequest(req: Number): void {
    if (req > 0) {
      console.log(`Hanlder A process ${req}`);
    } else {
      this.successor.handleRequest(req);
    }
  }
}

class ConcreteHandlerB extends Handler {

  handleRequest(req: Number): void {
    if (req < 0) {
      console.log(`Hanlder B process ${req}`);
    } else {
      this.successor.handleRequest(req);
    }
  }
}

class ConcreteHandlerC extends Handler {

  handleRequest(req: Number): void {
    if (req === 0) {
      console.log(`Hanlder C process ${req}`);
    } else {
      this.successor.handleRequest(req);
    }
  }
}


(function main() {
  const reqA = new ConcreteHandlerA();
  const reqB = new ConcreteHandlerB();
  const reqC = new ConcreteHandlerC();

  reqA.successor = reqB;
  reqB.successor = reqC;

  reqA.handleRequest(0);
  reqA.handleRequest(1);
  reqA.handleRequest(-1);
})();
