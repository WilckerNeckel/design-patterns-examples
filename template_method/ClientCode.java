/* 
esse design patter é útil quando você nota que tem várias classes em seu sistema fazendo coisas parecidas, muitas vezes com alguns comportamentos idênticos 
e muda algumas implementações, então o design pattern cria uma classe abstrata, implementa métodos que são idênticos e deixa livre para as classes implementarem
métodos que muda a implementação

Esse design pattern não deve ser usado quando há apenas uma estimativa de futuros comportamentos semelhantes, este deve ser usado quando os compartamentos ou 
etapas semelhantes já foram notadas e confirmadas

No exemplo temos csv, doc e pdf miner que fazem a mesmo coisa, porém com 3 métodos que precisam de implementação diferente (open, extract e parse) e dois que
possuem implementação idêntica (mine, analyse e report)

*/ 

class ClientCode {
    public static void main(String[] args) {
        String filePath = "example";

        CsvMiner csvMiner = new CsvMiner();
        csvMiner.mine(filePath);

        DocMiner docMiner = new DocMiner();
        docMiner.mine(filePath);

        PdfMiner pdfMiner = new PdfMiner();
        pdfMiner.mine(filePath);
    }
}