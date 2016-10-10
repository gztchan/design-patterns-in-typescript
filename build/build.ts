enum Size {
  Small,
  Medium,
  Big
}

interface FastFoodBuilder {
  buildBurger(name: string, options: Object): FastFoodBuilder;
  buildFries(size: Size, options: Object): FastFoodBuilder;
  buildCola(size: Size, options: Object): FastFoodBuilder;
  getMeal(): FastFood;
}

class FastFood {

  private _burger: Object;
  private _fires: Object;
  private _cola: Object;

  constructor(burger: Object = {}, fires: Object = {}, cola: Object = {}) {
    this._burger = burger;
    this._fires = fires;
    this._cola = cola
  }

  public get burger() {
    return this._burger;
  }

  public get fires() {
    return this._fires;
  }

  public get cola() {
    return this._cola;
  }
}

class Mcdonalds implements FastFoodBuilder {

  private _meal: Object = {};

  constructor(options) {
    console.log('basic info');
  }

  buildBurger(name: string, options: Object): FastFoodBuilder {
    this._meal['burger'] = {
      type: 'burger',
      name,
      options
    }
    return this;
  }

  buildFries(size: Size, options: Object): FastFoodBuilder {
    this._meal['fires'] = {
      type: 'fires',
      size,
      options
    }
    return this;
  }

  buildCola(size: Size, options: Object): FastFoodBuilder {
    this._meal['cola'] = {
      type: 'cola',
      size,
      options
    }
    return this;
  }

  getMeal(): FastFood {
    const meal: FastFood = new FastFood(this._meal['burger'], this._meal['fires'], this._meal['cola']);
    return meal;
  }
}

(function main() {
  const mcd: Mcdonalds = new Mcdonalds({ location: 'Zhujiang New Town, Canton, China' });
  const meal: FastFood = mcd
                          .buildBurger('Big Mac', { sauce: false })
                          .buildCola(Size.Medium, { ice: false })
                          .buildFries(Size.Big, { 'sauce-amount': 2 })
                          .getMeal();
  console.log(meal);
})();
