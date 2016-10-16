
interface Mediator {
  send(msg: String, sender: Colleague): void;
}

class Colleague {
  public mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  send(msg: String): void {
    this.mediator.send(msg, this);
  };

  receiveMsg(msg: String): void {
    console.log(msg);
  };
}

class ConcreteMediator implements Mediator {
  public A: Colleague;
  public B: Colleague;

  send(msg: String, sender: Colleague): void {
    if (sender === this.A) {
      this.A.receiveMsg(msg);
      this.B.receiveMsg(msg);
    } 

    if (sender === this.B) {
      this.A.receiveMsg(msg);
    }
  }
}

class ClassAColleague extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  send(msg: String) {
    console.log('A customized logic');
    super.send(msg);
  }
}

class ClassBColleague extends Colleague {
  constructor(mediator: Mediator) {
    super(mediator);
  }

  send(msg: String) {
    console.log('B customized logic');
    super.send(msg);
  }
}

(function main() {
  const mediator = new ConcreteMediator();
  const a = new ClassAColleague(mediator);
  const b = new ClassBColleague(mediator);

  mediator.A = a;
  mediator.B = b;

  a.send('A sends message to A, B');
  b.send('B sends message to A');

})();