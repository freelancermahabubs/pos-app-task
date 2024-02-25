"use client";
import {FaTimes} from "react-icons/fa";
import {IoIosArrowBack, IoMdAdd} from "react-icons/io";

const CustomerModal = ({toggleModal}: any) => {
  // Sample data for dropdown options
  const currencies = ["USD", "EUR", "GBP", "JPY"];

  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 z-[5000] flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
        {/* Modal container */}
        <div className="relative bg-white rounded-lg w-96">
          {/* Modal header */}
          <div className="flex items-center gap-6 p-4 border-b border-gray-200">
            <IoIosArrowBack
              className="text-gray-500 cursor-pointer"
              onClick={toggleModal}
            />
            <h2 className="text-xl font-semibold text-center text-black">
              Add New Customer
            </h2>
            {/* Close button */}
          </div>
          {/* Modal body */}
          <div className="p-4">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-b w-full"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-b w-full"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="border-b w-full"
              />
            </div>
            {/* Dropdown for Currency */}
            <div className="mb-2">
              <select
                id="currency"
                name="currency"
                className="w-full py-2  text-gray-400  border-b ">
                <option> Currency</option>
                {/* Populate dropdown options */}
                {currencies?.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <input
                type="text"
                id="taxId"
                name="taxId"
                className="w-full  py-2 border-b "
                placeholder=" Tax ID"
              />
            </div>
            <div className="flex gap-2 items-center text-blue-500 mt-2">
            <IoMdAdd />

            <button >
              Add More Details
            </button>
            </div>
          </div>
          {/* Modal footer */}
          <div className=" p-4 border-t border-gray-200">
          

        
            <button className="px-4 py-2 bg-blue-500 w-full text-center text-white rounded-md">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerModal;
