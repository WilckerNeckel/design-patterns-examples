// factory é um desin pattern usado para criar objetos a partir de uma função ou classe responsável por costruir o objeto
// neste exemplo vamos criar um objeto humano com atributos e métodos e depois retorná-lo

function factoryHuman(name, age) {
    const obj = {};

    obj.name = name;

    obj.getAge = () => {
        return age;
    };

    obj.isAdult = function () {
        return age > 18;
    };

    return obj;
}

const human = factoryHuman("Wilcker", 22);

console.log(human.age); // undefined, this is a private attribute
console.log(human.name);
console.log(human.getAge());
console.log(human.isAdult());
