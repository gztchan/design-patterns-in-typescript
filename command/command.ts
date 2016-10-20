interface Command {
  execute(): void;
}

interface Receive {
  action(): void;
}

interface Invoke {
  runCommand(command?: Command): void;
}

class CommandReceiver implements Receive {
  action(): void {
    console.log('Receiver takes action');
  }
}

class LaunchCommand implements Command {
  private receiver: Receive;

  constructor(receiver: Receive) {
    this.receiver = receiver;
  }

  execute(): void {
    console.log('Launch!!!');
    this.receiver.action();
  }
}

class StopCommand implements Command {
  private receiver: Receive;

  constructor(receiver: Receive) {
    this.receiver = receiver;
  }

  execute(): void {
    console.log('Stop!!!');
    this.receiver.action();
  }
}

class Invoker implements Invoke {
  private commands: Command[];

  constructor() {
    this.commands = [];
  }

  addCommand(command: Command) {
    this.commands.push(command);
  }

  runCommand(command?: Command) {
    if (command) {
      this.commands.push(command);
    }
    const commandOnFire = this.commands.shift();
    commandOnFire.execute();
  }
}

(function main() {
  const receiver = new CommandReceiver();

  const launch = new LaunchCommand(receiver);
  const stop = new StopCommand(receiver);

  const invoker = new Invoker();

  invoker.addCommand(launch);
  invoker.runCommand();

  invoker.addCommand(stop);
  invoker.runCommand();
})();
