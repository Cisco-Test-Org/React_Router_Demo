import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductCount from "./components/ProductCount";
import PRODUCTS from "./db/products";
import AddProduct from "./pages/AddProduct";
import DisplayProduct from "./pages/DisplayProduct";
import Welcome from "./pages/Welcome";

const App = () => {

  const [productList, setProductList] = useState(PRODUCTS)

  const addProduct = product => {
    const newProduct = {id: Math.random().toString(),product}
    setProductList(prevData => {
      return[newProduct, ...prevData]
    })
  }

  const clearAllProducts = () => {
    setProductList([])
  }

  const deleteItem = id => {
    setProductList(prevData => {
      return [...prevData.filter(data => data.id != id)]
    })
  }

  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path='/add' element={<AddProduct onAddProduct={addProduct}/>} />
        <Route path='display' element={<DisplayProduct productList={productList}
        onClearAll={clearAllProducts} onDelete={deleteItem} />} />
        <Route path='/' exact element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
