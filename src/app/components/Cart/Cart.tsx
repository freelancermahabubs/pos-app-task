import {useAppSelector} from "@/redux/hook";
import React from "react";
import ProductTable from "../ProductTable/ProductTable";

const Cart = () => {
  const products = useAppSelector((store) => store?.cart?.products);
  const { tax, subtotal  } =
  useAppSelector((store) => store.cart);

  const shipping = 5.50;
  const discount = 10.50;
  // const grandTotal = subtotal + tax + shipping - discount;
  return (
    <div className="overflow-x-auto w">
      <div className="space-y-5 lg:mt-0 mt-5">
        {products?.length ? (
          products?.map((product: any) => (
            <ProductTable key={product.id} product={product} />
          ))
        ) : (
          <p className="text-2xl text-red-500"> not product found</p>
        )}
      </div>



      <div className="mt-4 text-slate-400 float-end  ">
        <div className="flex items-center gap-2 border-y px-4 py-2 justify-between">
          <h3 className="text-lg">Sub Total</h3>
          <h2 className="text-lg font-bold text-black">${subtotal.toFixed(2)}</h2>
        </div>
        <div className="flex items-center gap-2 border-y px-4 py-2 justify-between">
          {" "}
          <h3 className="text-lg">TAX</h3>
          <h2 className="text-lg font-bold text-black">$ {tax.toFixed(2)}</h2>
        </div>
        <div className="flex items-center gap-2 border-y px-4 py-2 justify-between">
          {" "}
          <h3 className="text-lg">Shipping</h3>
          <h2 className="text-lg font-bold text-black">$ {shipping.toFixed(2)}</h2>
        </div>
        <div className="flex items-center gap-2 border-y px-4 py-2 justify-between">
          {" "}
          <h3 className="text-lg text-blue-500">Discount on Cart</h3>
          <h2 className="text-lg font-bold text-black">$ {discount.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
