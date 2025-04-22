import { v4 as uuidv4 } from "uuid";
import { Produto } from "../model/Produto.model.js";

class ProdutoController {
  getProdutos(req, res) {
    // const { qtd } = req.body;
    const { qtd } = req.params;
    console.log(qtd);

    // Validando os dados do usuário
    if (!qtd || qtd < 0 || !Number.isInteger(qtd)) {
      res.json({
        message:
          "Deve se ter no mínimo 1 ou mais quantidades passadas 'Somente números inteiros'",
      });
    }

    // RETORNA A QUANTIDADE DE PRODUTOS DE ACORDO COM O QUE FOI RECEBIDO DO PARAMETRO DO ENDPOINT
    const result = Produto.produtos.slice(0, qtd);

    // EXIBE O RESULTADO
    res.json({ produtos: result });
  }

  cadProduto(req, res) {
    const { nome, marca, categoria, preco, qtdEstoque } = req.body;

    //Validação
    if ((!nome, !marca, !categoria, !preco, !qtdEstoque)) {
      res.json({ message: "Você deve fornecer todas as informações" });
    }
    const novoProduto = new Produto(
      uuidv4(),
      nome,
      marca,
      categoria,
      preco,
      qtdEstoque
    );

    // SALVA O PRODUTO NO ARRAY DE PRODUTOS
    novoProduto.salvaproduto(novoProduto);

    // EXIBE UMA MENSAGEM DE SUCESSO
    res.json({
      message: "Produto cadastrado com sucesso",
      produto: novoProduto,
    });
  }
}
export default new ProdutoController();
