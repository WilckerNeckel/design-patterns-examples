// o design pattern mixin permite adicionar funcionalidades em uma classe sem mofica-la, é útil quando várias classes compartilham a mesma funcionalidade, mas não têm uma relação de herança direta.
// nesse exemplo foi utilizado o mixin para adicionar a funcionalidade de pular em uma classe que já existe (Human) sem precisar modificar a classe original.

class Human {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    walk() {
        console.log(`My name is ${this.name} and i can walk`);
    }
}

// aqui é uma tipagem que força o parametro baseClass a ser uma classe e não outra tipo
type Constructor<T = {}> = new (...args: any[]) => T;

function CanJump<TBase extends Constructor<{ name: string }>>(
    BaseClass: TBase
) {
    return class extends BaseClass {
        jump() {
            console.log(`${this.name} jumped`);
        }
    };
}

// uso
const Jumper = CanJump(Human);
const humanWhoCanJump = new Jumper("John");

humanWhoCanJump.walk();
humanWhoCanJump.jump();
