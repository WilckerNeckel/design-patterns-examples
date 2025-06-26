import { Command } from "./ICommand";

// invokerr
export class ControleRemoto {
  private command: Command | null = null;
  private history: Command[] = [];

  setCommand(command: Command): void {
    this.command = command;
  }

  pressionarBotao(): void {
    if (this.command) {
      this.command.execute();
      this.history.push(this.command);
    }
  }

  desfazerUltimo(): void {
    const comandoAnterior = this.history.pop();
    if (comandoAnterior) {
      comandoAnterior.undo();
    }
  }
}
