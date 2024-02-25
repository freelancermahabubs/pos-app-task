import React from "react";
import PaymentSiteNav from "../components/PaymentSiteNav/PaymentSiteNav";
import {RxCross2} from "react-icons/rx";
import {GiPayMoney} from "react-icons/gi";

const Payment = ({togglePayment}: any) => {
  return (
    <div className="px-12 my-4  ">
      <div className=" bg-white border border-slate-400 flex items-center justify-between p-5">
        <h2 className="text-xl font-semibold">Order Amount</h2>
        <h2 className="text-2xl font-semibold text-black">$5000.50</h2>
      </div>

      <div className="grid grid-cols-12 mt-4 border-2 h-[100vh] bg-white  ">
        <div className="col-span-4 border-r-2  ">
          {" "}
          <PaymentSiteNav />
        </div>
        <div className="col-span-8 ">
          <h1>hello</h1>

          <div className="flex items-center gap-3 absolute -bottom-24 mr-2 pl-2">
            <button
              onClick={togglePayment}
              className="flex items-center cursor-pointer gap-2  bg-red-300 rounded-md p-3 text-red-500">
              <RxCross2 />
              Cancel
            </button>
            <div>
              <button className="flex items-center gap-2 bg-blue-600 text-white rounded-md p-3">
                <GiPayMoney />
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
