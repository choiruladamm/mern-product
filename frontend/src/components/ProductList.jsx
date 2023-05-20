import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";
import useSWR from "swr";
import { MutatingDots } from "react-loader-spinner";

const ProductList = () => {
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/api/products");
    return response.data;
  };

  const { data } = useSWR("/api/products", fetcher);
  if (!data)
    return (
      <div className="grid h-screen place-items-center">
        <MutatingDots
          height="100"
          width="100"
          color="#202226"
          secondaryColor="#202226"
          radius="9.5"
          ariaLabel="mutating-dots-loading"
          visible={true}
        />
      </div>
    );

  return (
    <div className="mt-5">
      <div className="text-center">
        <Link to="/">
          <Button title={"Go to Home"} />
        </Link>
      </div>
      <div className="flex flex-col mx-[10rem]">
        <div className="w-full ">
          <Link to="/add">
            <Button title="Add New" />
          </Link>
          <div className="relative mt-3 rounded-lg shadow">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-1 py-3 text-center">No</th>
                  <th className="px-6 py-3 ">Product Name</th>
                  <th className="px-6 py-3 ">Price</th>
                  <th className="px-1 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((product, index) => (
                  <tr className="bg-white border-b" key={product.id}>
                    <td className="px-1 py-3 text-center">{index + 1}</td>
                    <td className="px-6 py-3 font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-3">{product.price}</td>
                    <td className="px-1 py-3 text-center">
                      <Link to={`/products/${product.id}`}>
                        <Button
                          title="Delete"
                          styles={`bg-red-500 hover:bg-red-600 focus:ring-red-300 py-[6px] px-4 mr-1`}
                        />
                      </Link>
                      <Link to={`/products/${product.id}`}>
                        <Button
                          title="Update"
                          styles={`bg-green-500 hover:bg-green-600 focus:ring-green-300 py-[6px] px-4 ml-1`}
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
