import "./App.css";
import ProductCard from "./ProductCard";
import { listaProdutos } from "./products";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  function somaCarrinho() {
    setContador((valorCarrinho) => valorCarrinho + 1);
  }

  

  return (
    <>
      <h2>Itens no carrinho: {contador}</h2>

      <ul>
        {listaProdutos
          .filter((produto) => produto.estoque === true)
          .map((produto) => (
            <li key={produto.id}>
              <ProductCard produto={produto} aoSomarItens={somaCarrinho} /> <br />
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
