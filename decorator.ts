// O design pattern decorator permite adicionar funcionalidades a um objeto de forma dinâmica, sem a necessidade de modificar a classe original. Isso torna o código mais flexível e reutilizável.
// Exemplo: I.A retorna o estoque dos 10 produtos mais em falta em formato de texto. Porém recentemente foi adicionado uma opção de também pode retornar os metadados caso o cliente quiser, ao invés de modificar a classe e quebrar o princípio open closed, utilizamos um decorator.

// Interface comum
interface ProdutosEmFaltaService {
    execute(): Produto[];
}

// Tipo do produto
type Produto = {
    nome: string;
};

// Implementação base: retorna produtos em falta
class ProdutosEmFaltaPorEmpresa implements ProdutosEmFaltaService {
    constructor(private readonly empresaId: string) {}

    public execute(): Produto[] {
        // Lógica real aqui — simulada com retorno fixo
        return [{ nome: "Produto1" }, { nome: "Produto2" }];
    }
}

// Decorador que adiciona metadados ao resultado
class ProdutosEmFaltaComMetadados implements ProdutosEmFaltaService {
    constructor(private readonly baseService: ProdutosEmFaltaService) {}

    public execute(): Produto[] {
        const produtos = this.baseService.execute();

        // Adiciona metadados aos produtos
        return produtos.map((produto) => ({
            ...produto,
            ultimoEstoque: "2025-01-12",
        }));
    }
}

// uso

const empresaId = "1";

// Cria o serviço base
let produtosService: ProdutosEmFaltaService = new ProdutosEmFaltaPorEmpresa(
    empresaId
);

// Aplica o comportamento adicional com metadados
produtosService = new ProdutosEmFaltaComMetadados(produtosService);

// Executa a lógica com o decorator
const resultado = produtosService.execute();

console.log(resultado);
