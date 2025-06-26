import { Command } from "./ICommand";
import { Luz } from "./Luz";

export class DesligarLuzCommand implements Command {
    // Luz é o receiver
    private luz: Luz;

    constructor(luz: Luz) {
        this.luz = luz;
    }

    execute(): void {
        this.luz.desligar();
    }

    undo(): void {
        this.luz.ligar();
    }
}
