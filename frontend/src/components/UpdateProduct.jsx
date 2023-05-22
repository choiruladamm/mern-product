import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(response.data.name);
      setPrice(response.data.price);
    };
    getProductById();
  }, [id]);

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/products/${id}`, {
      name: product,
      price: parseInt(price),
    });
    navigate("/dashboard");
    alert('Update Succes')
  };

  return (
    <div className="grid h-screen place-items-center rounded-xl shadow-slate-300">
      <form className="m-10 my-10" onSubmit={saveProduct}>
        <h2 className="mb-10 text-2xl font-medium text-center">
          Update Product
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
          <Button type="submit" title="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
