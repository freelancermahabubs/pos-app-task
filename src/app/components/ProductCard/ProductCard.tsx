"use client";
import {addToCart} from "@/redux/features/cart/cartSlice";
import {useAppDispatch} from "@/redux/hook";
import React from "react";

const ProductCard = ({product}: any) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white border border-gray-300">
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart(product);
        }} className="cursor-pointer">
        <img src={product?.img} alt="Product Image" />
        <p className="text-center font-semibold text-gray-400 bg-slate-100">
          ${product?.price}
        </p>
        <p className="text-center text-xs mt-2">{product?.name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
