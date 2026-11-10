function ProductCard({ produto, aoSomarItens }) {

    const preco = produto.preco 
    return (
        
        <div>
            <button onClick={() => aoSomarItens(produto)}>Adicionar</button>

            <p>Produto: {produto.item}</p>
            <p>Preço: {preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
            <p>Categoria: {produto.categoria}</p>
            <p>Estoque: {produto.estoque == true ? "Disponível" : "Indisponível"}</p>
        </div>
    )
}

export default ProductCard