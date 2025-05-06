// o padrão de projeto strategy é usado principalmente quando você está enfrentando algum problema de open closed principle e você quer abrir a classe somente
// para extensão e não para modificação, ai você segue o padrão, criar strategy, criar implmentações do strategy, setar strategy na classe que vai usar, usar o strategy

abstract class Discount {
  double apply(double amount);
}

class PercentageDiscount implements Discount {
  double percentage;

  PercentageDiscount(this.percentage);

  double apply(double amount) {
    return amount - amount * percentage;
  }
}

class FixedDiscount implements Discount {
  double fixed;

  FixedDiscount(this.fixed);

  double apply(double amount) {
    return amount - fixed;
  }
}

class Order {
  String identifier;
  List<String> products;
  double _totalValue;
  Discount? _discount;

  Order(this.identifier, this.products, this._totalValue);

  set discount(Discount discount) {
    this._discount = discount;
  }

  Discount get discount {
    if (this._discount == null) {
      throw Exception("no discount seted");
    }
    return this._discount!;
  }

  double get totalValue {
    var amount = _totalValue;
    if (_discount != null) {
      amount = discount.apply(amount);
    }
    return amount;
  }
}

// cliente

void main() {
  var request1 = {
    "body": {"discountType": "percentage"}
  };
  var request2 = {
    "body": {"discountType": "fixed"}
  };
  Order orderOne = Order("123", ["coca", "x-tudo"], 40);
  Order orderTwo = Order("123", ["coca", "x-salada"], 40);

  if (request1["body"]?["discountType"] == "percentage") {
    orderOne.discount = PercentageDiscount(0.1);
  } else if (request1["body"]?["discountType"] == "fixed") {
    orderOne.discount = FixedDiscount(10);
  }

  if (request2["body"]?["discountType"] == "percentage") {
    orderTwo.discount = PercentageDiscount(0.1);
  } else if (request2["body"]?["discountType"] == "fixed") {
    orderTwo.discount = FixedDiscount(10);
  }

  print("Total value after discount (Order one): ${orderOne.totalValue}");
  print("Total value after discount (Order two): ${orderTwo.totalValue}");
}
