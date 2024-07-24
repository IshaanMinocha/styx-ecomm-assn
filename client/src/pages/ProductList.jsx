import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/api/products`);
        setProducts(data.data);
        console.log(data.data[0].name);
      } catch (error) {
        toast.error("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <>
      <div>
        <h1 className="text-6xl font-bold mt-10 text-primary text-center">All Products</h1>
      </div>
      <div className="flex pb-12 justify-center flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            imgSrc={product.image}
            name={product.name}
            price={product.price}
            id={product._id}
            countInStock={product.countInStock}
            category={product.category}
            rating={product.rating}
            handler={addToCartHandler}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
