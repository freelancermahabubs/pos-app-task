"use client";
import React, {useState} from "react";

const CategoryModal = ({categoriesData}: any, {toggleModal}: any) => {
  const [activeCategory, setActiveCategory] = useState(
    categoriesData?.categories[0]?.id
  );

  const handleCategoryClick = (categoryId: any) => {
    setActiveCategory(categoryId);
  };
  return (
    <div>
      <ul className="grid md:grid-cols-5 lg:grid-cols-5 gap-y-2" onClick={toggleModal} >
        {categoriesData?.categories?.map((category: any) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`mr-4 px-4 py-2 cursor-pointer text-gray-400 font-semibold border-2 border-gray-300 rounded-md shadow-md hover:shadow-lg ${
              activeCategory === category.id
                ? "border-blue-500 text-blue-500"
                : ""
            }`}>
            {category.name}
          </li>
        ))}
      
      </ul>
    </div>
  );
};

export default CategoryModal;
