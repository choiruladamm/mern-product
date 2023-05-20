import { useState } from "react";
import Button from "./Button";

const AddNewProduct = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="grid h-screen place-items-center rounded-xl shadow-slate-300">
      <form className="m-10 my-10">
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
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Price</label>
            <input
              type="text"
              className="w-full px-3 py-3 mt-1 border rounded-lg focus:outline-none focus:border-slate-500 hover:shadow border-slate-200"
              placeholder="Product Name"
            />
          </div>
          <Button title="Save" />
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
