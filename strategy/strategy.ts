interface WorkoutStrategy {
  fire(): void;
  stop?(): void;
}

class Running implements WorkoutStrategy {
  public fire(): void {
    console.log('Running')
  }
}

class Basketball implements WorkoutStrategy {
  public fire(): void {
    console.log('Basketball')
  }
}

class Swimming implements WorkoutStrategy {
  public fire(): void {
    console.log('Swimming')
  }
}

class Person {
  public strategy: WorkoutStrategy;
  public name: String;
  constructor(name: string, strategy: WorkoutStrategy) {
    this.name = name;
    this.strategy = strategy
  }

  workout(): void {
    console.log(`${ this.name } starts:`)
    this.strategy.fire();
  };
}

(function main() {
  const amanda = new Person('Amanda', new Running())
  amanda.workout()
})()
