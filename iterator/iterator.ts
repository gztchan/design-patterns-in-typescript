interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

interface Collection {
  createIterator(): Iterator<Number>;
}

class ConcreteIterator implements Iterator<Number> {
  private _collection: Number[];
  private _index: number = 0;

  constructor(newCollection: Number[]) {
    this._collection = newCollection;
  }

  next(): any {
    const result = this._collection[this._index];
    this._index += 1;
    return result;
  }

  hasNext(): boolean {
    return this._index < this._collection.length;
  }

  private log(): void {
    console.log(`Logging ${this._collection[this._index]}`);
  }
}

class ConcreteCollection implements Collection {
  private _collection: Number[] = [];

  constructor(collection: Number[]) {
    this._collection = collection;
  }

  createIterator(): Iterator<Number> {
    return new ConcreteIterator(this._collection);
  }
}

(function main() {
  const collection: ConcreteCollection = new ConcreteCollection([0, 1, 2, 3]);
  const iterator: Iterator<Number> = collection.createIterator();

  while (iterator.hasNext()) {
    const number: Number = iterator.next();
    console.log(`Logging: ${number.valueOf()}`);
  }
})();
