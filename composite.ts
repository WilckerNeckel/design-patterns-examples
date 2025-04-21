// O design pattern composite permite tratar objetos individuais e composições de objetos de maneira uniforme, o que simplifica o código e melhora a legibilidade.

// neste exemplo foi usado esse design pattern por que facilita verificar o preço de um produto individual e o preço de um conjunto de produtos (composite) sem precisar de lógica adicional para cada tipo de produto.
interface IProduct {
    getPrice: () => number;
}

interface ICompositeProduct extends IProduct {
    addProduct: (product: IProduct) => void;
}

class CommonProduct implements IProduct {
    constructor(private price: number) {}
    getPrice(): number {
        return this.price;
    }
}

class CompositeProduct implements ICompositeProduct {
    private products: IProduct[] = [];
    getPrice() {
        return this.products.reduce(
            (total, product) => total + product.getPrice(),
            0
        );
    }

    addProduct(product: IProduct) {
        this.products.push(product);
    }
}

const individualProduct = new CommonProduct(10);
console.log(individualProduct.getPrice());

const productsBought = new CompositeProduct();
productsBought.addProduct(new CommonProduct(50));

// creating a new composite product (cartProducts) to add inside another composite product (productsBought)
const cartProducts = new CompositeProduct();
cartProducts.addProduct(new CommonProduct(10));
cartProducts.addProduct(new CommonProduct(5));

productsBought.addProduct(cartProducts);

console.log(productsBought.getPrice());
