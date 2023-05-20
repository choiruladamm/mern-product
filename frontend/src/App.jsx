import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProductList />} />
          <Route path="/add" element={<AddNewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
