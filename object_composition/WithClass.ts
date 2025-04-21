// O design pattern object composition permite adicionar funcionalidades a um objeto sem a necessidade de herança, o que torna o código mais flexível e reutilizável.
// Neste exemplo o composition foi usado para adicionar funcionalidades de pular e atacar a um objeto sem precisar criar subclasses ou modificar a classe original.
class CanBark {
    bark() {
        console.log("Woof!");
    }
}

class CanFly {
    fly() {
        console.log("Flap flap!");
    }
}

// esses exemplos foram utilizados tipagem da própria implementação da classe mas poderia ser de uma interface
class Dog {
    private barkBehavior: CanBark;

    constructor(barkBehavior: CanBark) {
        this.barkBehavior = barkBehavior;
    }

    bark() {
        this.barkBehavior.bark();
    }
}

class Bird {
    private flyBehavior: CanFly;
    constructor(canFly: CanFly) {
        this.flyBehavior = canFly;
    }

    fly() {
        this.flyBehavior.fly();
    }
}

// Usage
const dogg = new Dog(new CanBark());
dogg.bark();

const birdd = new Bird(new CanFly());
birdd.fly();
