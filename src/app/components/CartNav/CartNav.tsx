"use client";
import React, {useState} from "react";
import {FaRegEdit, FaShippingFast, FaTimes} from "react-icons/fa";
import {IoAddCircleSharp} from "react-icons/io5";
import {RxHamburgerMenu} from "react-icons/rx";
import {TbPlaceholder} from "react-icons/tb";
import SiteNav from "../Modal/SiteNav";

const CartNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md:flex md:space-y-0 space-y-2  gap-5 items-center md:text-xl lg:text-xl sm:text-xs text-blue-800 font-semibold  mt-4">
      <button onClick={toggleModal}>
        <RxHamburgerMenu size={35} />
      </button>
      <div className="flex items-center gap-2 bg-slate-200 rounded-md px-3 py-1">
        <FaRegEdit />
        <h3>Note</h3>
      </div>
      <div className="flex items-center gap-2 bg-slate-200 rounded-md px-3 py-1 ">
        <FaShippingFast />
        <h3>Shipping</h3>
      </div>
      <div className="flex items-center gap-2 bg-slate-200 rounded-md px-3 py-1">
        <TbPlaceholder />
        <h3>Hold Orders</h3>
      </div>
      <div className="flex items-center gap-2 bg-slate-200 rounded-md  px-3 py-1 ">
        <IoAddCircleSharp />
        <h3>New Item</h3>
      </div>
      {isOpen && (
        <div
          // onClick={toggleModal}
          className="fixed top-0 left-0 right-0 bottom-0 z-[8000] bg-gray-900 bg-opacity-50 flex items-center ">
          <FaTimes
            size={30}
            className="absolute top-1 right-0 md:left-[15%] lef-[10%] text-white cursor-pointer"
            onClick={toggleModal}
          />
          <div className="bg-white  rounded-md md:w-[15%] w-[50%] h-full">
            <div className="bg-slate-200 w-full mb-4">
              <h2 className="pt-2  text-center font-semibold md:text-2xl text-xs">
                Company Logo
              </h2>
              <div className="px-2">
                {" "}
                <span className="text-xs text-gray-600">Location:</span>
                <h2 className="text-black">Los Angeles, California</h2>
              </div>
            </div>
            <SiteNav />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartNav;
