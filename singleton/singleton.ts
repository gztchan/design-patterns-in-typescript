class Singleton {
  private static instance: Singleton;

  static get sharedInstance() {
    if (!Singleton.instance) {
       Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  };
}
