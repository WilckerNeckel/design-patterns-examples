import { Command } from "./ICommand";
import { Luz } from "./Luz";

export class LigarLuzCommand implements Command {
    // Luz é o receiver
    private luz: Luz;

    constructor(luz: Luz) {
        this.luz = luz;
    }

    execute(): void {
        this.luz.ligar();
    }

    undo(): void {
        this.luz.desligar();
    }
}
