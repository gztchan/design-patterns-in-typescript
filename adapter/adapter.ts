interface Adapter {
  request(newParam: string): void;
}

class InterfaceAdapter implements Adapter {
  request(newParam: string): void {
    const old = new OldInterface();
    old.requestInOldWay({});
  };
}

class OldInterface {
  requestInOldWay(oldParam: any): void {};
}

(function main() {
  const adapter = new InterfaceAdapter();
  adapter.request('param');
});
