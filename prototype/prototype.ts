
interface CarPrototype {
  clone(): CarPrototype
}

class Audi implements CarPrototype {
  clone(): CarPrototype {
    return new Audi()
  }
}

class Benz implements CarPrototype {
  clone(): CarPrototype {
    return new Benz()
  }
}

class BMW implements CarPrototype {
  clone(): CarPrototype {
    return new BMW()
  }
}

abstract class CarFactory {
  abstract createCar(brand): CarPrototype;
}

class ChineseCarFactory extends CarFactory {
  private brands: { [brand: string]: CarPrototype; } = {};

  constructor() {
    super()
    this.brands['Audi'] = new Audi()
    this.brands['Benz'] = new Benz()
    this.brands['BMW'] = new BMW()
  }

  createCar(brand): CarPrototype {
    return this.brands[brand].clone()
  }
}

(function main() {
  const factory = new ChineseCarFactory()
  const prototypes = ['Audi', 'Benz', 'BMW'].map((brand) => {
    return factory.createCar(brand)
  })
  console.log(prototypes)
})()