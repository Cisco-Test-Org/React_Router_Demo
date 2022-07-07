import { useState } from "react";

const AddProduct = ({onAddProduct}) => {

    const [product, setProduct] = useState('')

    const handleAddProduct = () => {
        onAddProduct(product)
        setProduct('')
    }

    return(
        <div>
            <h1 className="fw-bold text-primary">AddProduct</h1>
            <div className="col-3">
                <input value={product} onChange={(e) => setProduct(e.target.value)} type="email" className="form-control mt-5 mb-2" id="exampleFormControlInput1" placeholder="Add here" />
            </div>
            <button type="button" onClick={handleAddProduct} className="btn btn-primary col-3">Add</button>
        </div>
        
    )
}

export default AddProduct;