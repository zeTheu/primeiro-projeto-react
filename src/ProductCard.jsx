function ProductCard({ produto }) {

    const preco = produto.preco
    

    return (

        <div>
            <p>Produto: {produto.item}</p>
            <p>Preço: {preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
            <p>Estoque: {produto.estoque ? "Disponível" : "Indisponível"}</p>
        </div>
    )
}

export default ProductCard