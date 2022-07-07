import ProductCount from "../components/ProductCount"

const DisplayProduct = ({productList, onClearAll, onDelete, count}) => {

    const handleClear = () => {
        onClearAll()
    }

    const handleDelete = id => {
        onDelete(id)
    }

    return(
        <div>
            <h1 className="fw-bold text-primary">Product List</h1>
            <ProductCount count={productList.length}/>
            <ul className="list-group col-3">
                {productList.length === 0 && <p>No products found!</p>}
                {productList.map(item => (
                    <li key={item.id} className="list-group-item">
                        <span className="m-2">{item.product}</span>
                        <button type="button" onClick={() => handleDelete(item.id)} className="btn btn-info">Delete</button>
                    </li>
                ))}
            </ul>
            {productList.length > 0 && <button type="button" onClick={handleClear} className="btn btn-danger col-3 mt-3">Clear</button>}
        </div>
    )
}

export default DisplayProduct;