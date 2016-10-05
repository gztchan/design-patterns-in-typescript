interface IResource {
  fetch(): void;
}

class ResourceProxy implements IResource {
  private resource: Resource;

  constructor() {
    this.resource = new Resource();
  }

  fetch(): void {
    //
    console.log('invoke resource fetch method')
    this.resource.fetch();
  }
}

class Resource implements IResource {
  fetch(): void {
    console.log('fetch resource')
  }
}

(function main() {
  const proxy = new ResourceProxy();
  proxy.fetch();
})()