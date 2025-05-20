// esse design pattern é usado para gerenciar estados de um objeto de maneira mais robusta e profissional, muitas vezes os estados são controlados por strings de controle, flags e ifs para validar regras de negócio
// no state pattern são utilizados classes para controlar o estado, onde em cada transição a própria classe sabe se a trasição é válida ou não, essa regra não precisa ser feitas por ifs no cliente por exemplo, o que torna muito mais confiável e coeso
// nesse exemplo utilizamos estados de um pedido onde existe os estados feito, entrega iniciada, entrega finalizada, cada estado implementa esses métodos de transição, porém as regras de como essas transições devem ser feitas são de responsabilidade da implementação do estado
// por mais que pareceça, esse design pattern não quebra o L do SOLID por que os métodos que as classes não tem mas estão implementando fazem parte da regra de negócio, elas não tem por que faz parte da regra do domínio não ter e lançar uma execeção caso alguém tentar usar, e não simplemente por que foi forçado a implementar algo que não faz parte das regras do domínio
interface OrderState {
    prepare(order: Order): void;
    startDelivery(order: Order): void;
    finishDelivery(order: Order): void;
}

// 1 state
class Made implements OrderState {
    prepare(order: Order): void {
        order.setState(new Preparing());
    }
    startDelivery(order: Order): void {
        throw new Error("Order have not prepared yet");
    }
    finishDelivery(order: Order): void {
        throw new Error("Delivery have not started yet");
    }
}

// 2 state
class Preparing implements OrderState {
    prepare(order: Order): void {
        throw new Error("Order is already being prepared");
    }
    startDelivery(order: Order): void {
        order.setState(new StartedDelivery());
    }
    finishDelivery(order: Order): void {
        throw new Error("Order is being prepared");
    }
}

// 3 state
class StartedDelivery implements OrderState {
    prepare(order: Order): void {
        throw new Error("Order was already prepared");
    }
    startDelivery(order: Order): void {
        throw new Error("Delivery was already started");
    }
    finishDelivery(order: Order): void {
        order.setState(new FinishedDelivery());
    }
}

// 4 state
class FinishedDelivery implements OrderState {
    prepare(order: Order): void {
        throw new Error("Order was already delivered");
    }
    startDelivery(order: Order): void {
        throw new Error("Order was already delivered");
    }
    finishDelivery(order: Order): void {
        throw new Error("Order was already delivered");
    }
}

class Order {
    private state: OrderState;
    // the first state is made, is did by the constructor
    constructor() {
        this.state = new Made();
    }

    public setState(newState: OrderState) {
        this.state = newState;
    }

    public prepare(): void {
        this.state.prepare(this);
    }

    public startDelivery(): void {
        this.state.startDelivery(this);
    }

    public finishDelivery(): void {
        this.state.finishDelivery(this);
    }
}


// cliente

const order = new Order();
order.prepare();
order.startDelivery();
order.finishDelivery();

const order2 = new Order();

order2.startDelivery(); // error, from made to start delivery is not allowed