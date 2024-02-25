import React from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import getAllProducts from "../../../public/data/products";

const Products = () => {
    const products = getAllProducts();
   
  return (
    <div className="grid md:grid-cols-5 gap-4 lg:grid-cols-5 mt-4">
      {products?.slice(0, 15)?.map((product: any, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;