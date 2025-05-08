// o design pattern adapter é útil quando em uma classe de alto nível você precisa utilizar uma implementação de baixo nível, terceiros, bibliotecas, apis, ou até mesmo sua implementação que tem risco de mudar e você não quer acoplar isso em uma classe de baixo nível, então você cria portas que são os contratos que os adpatores devem seguir, e utiliza essas portas na classe de alto nível
// nesse exemplo foi utilizado uma classe que envia impressão para impressora pos, em uma classe pedido de alto nível

// ----- ports -----
abstract class PrintSenderPort {
  bool send(
      Map<String, String> data,
      String
          printerIp); // the parameter is simuling a document ready to be printed
}

abstract class DocumentGeneratorPort {
  Map<String, String> generate60mm(
      Map<String, String>
          data); // simuling a return of a document ready to be printed
}

// ---- adapters -----
class PrinterSender implements PrintSenderPort {
  @override
  bool send(Map<String, String> data, String printerIp) {
    try {
      print("Send document to printer located in ${printerIp}");
      return true;
    } catch (err) {
      return false;
    }
  }
}

class DocumentGenerator implements DocumentGeneratorPort {
  @override
  Map<String, String> generate60mm(Map<String, String> data) {
    print("Generating document ready to be printed with 60mm in size");
    return {"document": "document-ready-to-print"};
  }
}

class Order {
  DocumentGeneratorPort documentGenerator;
  PrintSenderPort printerSender;
  Map<String, String> data;

  Order(this.documentGenerator, this.printerSender, this.data);

  void finish() {
    final document = this.documentGenerator.generate60mm(data);
    printerSender.send(document, "1.1.1.1");
  }
}

// client
void main() {

  final documentGenerator = DocumentGenerator();
  final printerSender = PrinterSender();
  final order = Order(documentGenerator, printerSender, {"data": "orderData"});

  order.finish();
}