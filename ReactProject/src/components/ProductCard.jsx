function ProductCard (){
    const productName = "Teclado Mecânico"
    const price = 49.99
    const inStock =true
    return(
        <div>
            <h2>{productName}</h2>
                <p>{price}</p>
                <p>{(inStock) === true ? "Em Stock" : "Esgotado"}</p>
        </div>
    )
}

export default ProductCard