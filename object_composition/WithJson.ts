// O design pattern object composition permite adicionar funcionalidades a um objeto sem a necessidade de herança, o que torna o código mais flexível e reutilizável.
// Neste exemplo o composition foi usado para adicionar funcionalidades de pular e atacar a um objeto sem precisar criar subclasses ou modificar a classe original.

type BarkBehavior = {
    bark: () => void;
};

type FlyBehavior = {
    fly: () => void;
};

// Reusable behaviors
const canBark: BarkBehavior = {
    bark: () => console.log("Woof!"),
};

const canFly: FlyBehavior = {
    fly: () => console.log("Flap flap!"),
};

// Factory function using composition
function createDog(name: string) {
    return {
        name,
        ...canBark,
    };
}

function createBird(name: string) {
    return {
        name,
        ...canFly,
    };
}

// Usage
const dog = createDog("Buddy");
dog.bark();

const bird = createBird("Tweety");
bird.fly();

// another example ------------------------------

type Position = { x: number; y: number };

const canMove = {
  move(position: Position) {
    console.log(`Moving to (${position.x}, ${position.y})`);
  }
};

const canAttack = {
  attack(target: string) {
    console.log(`Attacking ${target}`);
  }
};

function createWarrior(name: string) {
  return {
    name,
    ...canMove,
    ...canAttack
  };
}

const warrior = createWarrior("Thor");
warrior.move({ x: 10, y: 20 });
warrior.attack("Goblin");
