"use client";
import React, {useState} from "react";
import categoriesData from "./../../../../public/data/categories.json";
import {FaSearch, FaBarcode, FaTimes} from "react-icons/fa";
import {TbDotsVertical} from "react-icons/tb";
import CategoryModal from "../Modal/CategoryModal";

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    categoriesData?.categories[0]?.id
  );

  const handleCategoryClick = (categoryId: any) => {
    setActiveCategory(categoryId);
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container mx-auto">
      <div className="flex items-center  border rounded-md p-2">
        <FaSearch className="text-gray-500 mr-2 cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none px-2 py-1 flex-1"
        />
        <div>
          <FaBarcode className="text-gray-500 cursor-pointer" />
        </div>
      </div>
      <ul className="md:flex space-y-2 md:space-y-0 px-2 pl-5 md:pl-0  text-center gap-2 mt-2 items-center" onClick={toggleModal}>
        {categoriesData?.categories?.slice(0, 5).map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`mr-4 px-3 py-2 cursor-pointer text-gray-400 font-semibold border-2 border-gray-300 rounded-md shadow-md hover:shadow-lg ${
              activeCategory === category.id
                ? "border-blue-500 text-blue-500"
                : ""
            }`}>
            {category.name}
          </li>
        ))}
        {categoriesData.categories.length > 5 && (
          <li className="px-2 py-2 cursor-pointer text-gray-400 font-semibold">
            <TbDotsVertical size={20} />
          </li>
        )}
      </ul>
      {isOpen && (
        <div
          onClick={toggleModal}
          className="fixed top-0 left-0 right-0 bottom-0 z-[8000] bg-gray-900 bg-opacity-50 flex items-center justify-end">
          <FaTimes
            size={30}
            className="absolute top-2 right-0 left-[48%]  text-white cursor-pointer"
            onClick={toggleModal}
          />
          <div className="bg-white p-4 rounded-md w-[50%] h-full">
            <h2 className="my-2 text-center font-semibold text-xl">
              Categories
            </h2>
            <CategoryModal
              categoriesData={categoriesData}
              toggleModal={toggleModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
