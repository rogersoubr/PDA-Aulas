import { Router } from "express";
import ProdutoController from "../controller/produto.controller.js";

const produto = Router();

// produto.post("/", ProdutoController.getProdutos);
produto.get("/:qtd", ProdutoController.getProdutos);

// POST Serve para receber dados da requisição, de forma mais "segura"
produto.post("/cadastra", ProdutoController.cadProduto);

export default produto;
