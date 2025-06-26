export class Luz {
    private ligada: boolean = false;

    ligar(): void {
        console.log("💡 Luz ligada");
        this.ligada = true;
    }

    desligar(): void {
        console.log("💤 Luz desligada");
        this.ligada = false;
    }

    estaLigada(): boolean {
        return this.ligada;
    }
}
