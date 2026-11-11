import "./App.css";
import ProductCard from "./ProductCard";
import { listaProdutos } from "./products";
import { useState } from "react";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const somaTotal = carrinho.reduce((acc, valorItem) => {
    return acc + valorItem.preco;
  }, 0)

  function adicionarProduto(novoProduto) {
    setCarrinho((valorCarrinho) => [...valorCarrinho, novoProduto]);
  }

  function removerItemCarrinho(posicao) {
    setCarrinho((itensCarrinho) => itensCarrinho.filter((item, indicePosicao) => indicePosicao !== posicao))
  }

  

  return (
    <>
      <h2>Itens no carrinho: {carrinho.length}</h2>
        <p>Total: {somaTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
      <ul>
        {carrinho.map((produto, indice) => (
          <li key={indice}>
            {produto.item}
            <button onClick={() => removerItemCarrinho(indice)}>Remover</button>
          </li>
        ))}
      </ul>

      <ul>
        {listaProdutos
          .filter((produto) => produto.estoque === true)
          .map((produto) => (
            <li key={produto.id}>
              <ProductCard produto={produto} aoSomarItens={adicionarProduto} /> <br />
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;