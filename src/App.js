import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddProduct from "./pages/AddProduct";
import DisplayProduct from "./pages/DisplayProduct";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path='/add' element={<AddProduct />} />
        <Route path='display' element={<DisplayProduct />} />
        <Route path='/' exact element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
