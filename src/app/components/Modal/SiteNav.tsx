"use client";

import React, { useState } from "react";
import { FaCog, FaHome, FaMapMarkerAlt, FaReceipt } from "react-icons/fa";
import SettingsModal from "./SettingsModal";
import Link from "next/link";

const SiteNav = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (title: string) => {
    setActiveItem(title);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { title: "Dashboard", icon: <FaHome /> },
    { title: "Location", icon: <FaMapMarkerAlt /> },
    { title: "POS Invoice", icon: <FaReceipt /> },
    { title: "Settings", icon: <FaCog /> },
  ];

  return (
    <>
      <div className="text-sm lg:flex-grow">
        {navItems?.map((item, index) => (
          <Link href={`#${item.title.toLowerCase()}`}
            key={index}
            onClick={() => {
              handleItemClick(item.title);
              if (item.title === "Settings") {
                toggleModal();
              }
            }}
            className={`flex items-center text-xl space-y-2 text-slate-500 px-3 ${
              activeItem === item.title ? "bg-gray-200 rounded w-full" : ""
            }`}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </div>
      {isOpen && <SettingsModal toggleModal={toggleModal} />}
    </>
  );
};

export default SiteNav;
