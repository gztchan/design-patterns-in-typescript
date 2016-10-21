interface Coffee {
  cost(): Number;
}

class GeneralCoffee implements Coffee {
  cost(): Number {
    return 10;
  }
}

class CoffeeExtraDecorator implements Coffee {
  private _coffee: Coffee;

  constructor(coffee: GeneralCoffee) {
    this._coffee = coffee;
  }

  cost(): Number {
    return this._coffee.cost();
  }
}

class BubbleDecorator extends CoffeeExtraDecorator {
  private _price: Number = 3;

  cost(): Number {
    return super.cost().valueOf() + this._price.valueOf();
  }
}

class MilkDecorator extends CoffeeExtraDecorator {
  private _price: Number = 2.5;
  private _freshExtra: Number = 1.5;

  cost(): Number {
    return super.cost().valueOf() + this._price.valueOf() + this._freshExtra.valueOf();
  }
}

(function main() {
  const general = new GeneralCoffee();
  const withBubble = new BubbleDecorator(general);
  const withMilk = new MilkDecorator(withBubble);
  console.log(`Total: ${withMilk.cost()}`);
})();