"use client";


import React from "react";
import {FaHandBackFist} from "react-icons/fa6";
import {GiPayMoney} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";
import {TbShoppingBagDiscount} from "react-icons/tb";

const CartFooter = ({togglePayment}: any) => {
  
  return (
    <div className="md:flex gap-2 space-y-2 md:space-y-0 text-center items-center md:text-xl lg:text-xl sm:text-xs  text-blue-800 font-semibold  mt-4">
      <div

        className="flex items-center cursor-pointer gap-2 bg-red-300 rounded-md p-3 text-red-500">
        <RxCross2 />
        <h3>Cancel</h3>
      </div>
      <div className="flex items-center gap-2 bg-slate-200 rounded-md p-3 ">
        <FaHandBackFist />
        <h3>Hold</h3>
      </div>
      <div className="flex items-center gap-2 bg-slate-200 rounded-md p-3">
        <TbShoppingBagDiscount />
        <h3>DisCount</h3>
      </div>
      <button
        className="flex items-center gap-2 bg-slate-200 rounded-md p-3"
        onClick={togglePayment}>
        <GiPayMoney />
        <h3>Pay Now</h3>
      </button>


    </div>
  );
};

export default CartFooter;
