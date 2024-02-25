"use client";
import React, {useState} from "react";
import {IoMdAddCircleOutline} from "react-icons/io";
import {IoPeopleCircle} from "react-icons/io5";
import CustomerModal from "../Modal/CustomerModal";

const AddCustomer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        onClick={toggleModal}
        className=" bg-slate-200 cursor-pointer rounded-md text-blue-800 flex justify-between items-center mt-4 py-3 px-3 text-xl font-semibold">
        <div className="flex items-center gap-2 ">
          <IoPeopleCircle />
          <h3>Steve Jobs</h3>
        </div>
        <div>
          <IoMdAddCircleOutline />
        </div>

        {isOpen && <CustomerModal toggleModal={toggleModal} />}
      </div>
    </>
  );
};

export default AddCustomer;
