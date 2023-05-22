import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/products", {
      name: product,
      price: parseInt(price),
    });
    navigate("/dashboard");
  };

  return (
    <div className="grid h-screen place-items-center rounded-xl shadow-slate-300">
      <form className="m-10 my-10" onSubmit={saveProduct}>
        <h2 className="mb-10 text-2xl font-medium text-center">
          Add New Product
        </h2>
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">Product Name</label>
            <input
              type="text"
              className="w-full px-3 py-3 mt-1 border rounded-lg focus:outline-none focus:border-slate-500 hover:shadow border-slate-200"
              placeholder="Product Name"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Price</label>
            <input
              type="text"
              className="w-full px-3 py-3 mt-1 border rounded-lg focus:outline-none focus:border-slate-500 hover:shadow border-slate-200"
              placeholder="Product Name"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <Button type="submit" title="Save" />
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
