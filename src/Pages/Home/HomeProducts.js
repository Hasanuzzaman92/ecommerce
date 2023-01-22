import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-3xl text-center font-semibold mb-10">Our Products</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.slice(0, 3).map((product) => (
          <HomeProduct key={product.id} product={product}></HomeProduct>
        ))}
      </div>
      <Link
        to="/products"
        className="text-center block my-10 font-semibold cursor-pointer hover:underline "
      >
        See More....
      </Link>
    </div>
  );
};

export default HomeProducts;
