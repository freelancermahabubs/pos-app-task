import { useAppSelector } from "@/redux/hook";
import React from "react";

const Total = () => {
  const products = useAppSelector((store) => store?.cart?.products);
  return (
    <div className=" bg-slate-200 rounded-md text-blue-800 flex justify-between items-center mt-4 py-3 px-3 text-xl font-semibold">
      <div className=" text-xs">
        <h3>Product Count({products?.length})</h3>
      </div>
      <div>
        <h1>Total</h1>
      </div>
      <div>
        <h1>$5005.50</h1>
      </div>
    </div>
  );
};

export default Total;
