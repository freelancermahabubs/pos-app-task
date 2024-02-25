"use client";
import { useState } from "react";
import AddCustomer from "./components/AddCustomer/AddCustomer";
import Cart from "./components/Cart/Cart";
import CartFooter from "./components/CartFooter/CartFooter";
import CartNav from "./components/CartNav/CartNav";
import Categories from "./components/Categories/Categories";
import ProductTable from "./components/ProductTable/ProductTable";
import Total from "./components/Total/Total";
import Payment from "./payment/page";
import Products from "./products/page";

export default function Home() {
  const [showPayment, setShowPayment] = useState(false);

  const togglePayment = () => {
    setShowPayment(!showPayment);
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-4">
        <CartNav />
        <AddCustomer />
        <Cart />
        <Total />
        <CartFooter togglePayment={togglePayment} />
      </div>

      <div className="bg-slate-50 lg:mt-0 mt-8">
        {!showPayment && (
          <div>
            <Categories />
            <Products />
          </div>
        )}

        {showPayment && <Payment  togglePayment={togglePayment}/>}
      </div>
    </main>
  );
}
