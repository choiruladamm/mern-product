import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProductList />} />
          <Route path="/dashboard/add" element={<AddNewProduct />} />
          <Route path="/dashboard/products/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
