import './App.css'
import ProductCard from './ProductCard'
import { listaProdutos } from './products'

function App() {

  return (
    <>
    <h2>Itens:</h2>
    <ul>
      {listaProdutos.map((produto) => <li key={produto.id}><ProductCard produto={produto}/> <br /></li>)}
      
    </ul>
    </>
  )
}

export default App