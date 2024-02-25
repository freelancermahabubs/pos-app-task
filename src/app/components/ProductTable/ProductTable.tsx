import {removeFromCart, updateQuantity} from "@/redux/features/cart/cartSlice";
import {useAppDispatch} from "@/redux/hook";
import React from "react";
import {FaEdit} from "react-icons/fa";
import {FaCircleMinus} from "react-icons/fa6";
import {IoAddCircleSharp} from "react-icons/io5";
import {RiDeleteBin6Line} from "react-icons/ri";

const ProductTable = (product: any) => {
  const dispatch = useAppDispatch();
  const handleQuantity = (type: string, id: string) => {
    const payload = {type, id};
    dispatch(updateQuantity(payload));
  };
  const handleRemove = (e: any, id: string) => {
    e.stopPropagation();
    dispatch(removeFromCart({id}));
  };

  return (
    <div className="overflow-x-auto">
      <div className="mt-4 text-slate-400">
        <div className="flex items-center justify-between">
          <FaEdit className="mr-2" />
          <div className="border md:w-full w-[80%] px-2 gap-2 py-2 flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <div className="md:text-lg font-bold w-full md:w-[300px]">
                {product?.product?.name}
              </div>
            </div>
            <div className="flex items-center md:gap-2">
              <span className="font-bold">$</span>
              {product?.product?.price}
            </div>
            <div className="flex items-center md:gap-2">
              <button
                onClick={() =>
                  handleQuantity("decrement", product?.product?.id)
                }>
                <FaCircleMinus size={18} className="text-gray-500" />
              </button>
              {product?.product?.quantity}
              <button
                onClick={() =>
                  handleQuantity("increment", product?.product?.id)
                }>
                <IoAddCircleSharp size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
          <button
            onClick={(e) => {
              handleRemove(e, product?.product?.id);
            }}>
            {" "}
            <RiDeleteBin6Line className="ml-2 text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
