// builder is a crational pattern used to construct a complex object step by step, often when the object has many optional parts and would be harder to instance a object since with many parameter you will suffer
// to identify what really means each param, in additional to that this is useful when you want to set default object without repeat yourself every time

class Car {
    constructor(
        public type: string,
        public color?: string,
        public sunroof?: boolean,
        public gps?: boolean,
        public autopilot?: boolean
    ) {}
}

interface CarBuilder {
    setType(type: string): CarBuilder;
    setColor(color: string): CarBuilder;
    addSunroof(): CarBuilder;
    addGPS(): CarBuilder;
    addAutopilot(): CarBuilder;
    build(): Car;
}

class ConcreteCarBuilder implements CarBuilder {
    private type: string = "";
    private color?: string;
    private sunroof: boolean = false;
    private gps: boolean = false;
    private autopilot: boolean = false;

    setType(type: string): CarBuilder {
        this.type = type;
        return this;
    }

    setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }

    addSunroof(): CarBuilder {
        this.sunroof = true;
        return this;
    }

    addGPS(): CarBuilder {
        this.gps = true;
        return this;
    }

    addAutopilot(): CarBuilder {
        this.autopilot = true;
        return this;
    }

    buildDefaultSedan(): CarBuilder {
        this.type = "sedan";
        this.color = "white";
        this.sunroof = true;
        this.gps = true;
        this.autopilot = false;
        return this;
    }

    build(): Car {
        return new Car(
            this.type,
            this.color,
            this.sunroof,
            this.gps,
            this.autopilot
        );
    }
}

// usage
const sedan1 = new ConcreteCarBuilder().buildDefaultSedan().build();

const sedan2 = new ConcreteCarBuilder().buildDefaultSedan().build();

const pickup = new ConcreteCarBuilder()
    .setType("pickup")
    .setColor("red")
    .addSunroof()
    .addGPS()
    .addAutopilot()
    .build();

console.log("Sedan 1", sedan1);
console.log("Sedan 2", sedan2);
console.log("Pickup", pickup)
