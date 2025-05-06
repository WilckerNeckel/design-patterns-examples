abstract class TaxType {
  double calculate(double amount);
}

class ICMS implements TaxType {
  @override
  double calculate(double amount) {
    return amount - amount * 0.2;
  }
}

class IPI implements TaxType {
  @override
  double calculate(double amount) {
    return amount - amount * 0.4;
  }
}

class PIS implements TaxType {
  @override
  double calculate(double amount) {
    return amount - amount * 0.6;
  }
}

class TaxCalculator {
  late TaxType _taxType;

  setTaxType(TaxType taxType) {
    _taxType = taxType;
  }

  calculate(double amount) {
    return this._taxType.calculate(amount);
  }
}

void main() {
  TaxCalculator taxCalculator = TaxCalculator();
  double tax = 0;
  if (true) {
    taxCalculator.setTaxType(PIS());
    tax = taxCalculator.calculate(10);
  }

  print(tax);
}
