import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiFillCreditCard } from "react-icons/ai";
import { FaRegMoneyBillAlt, FaMoneyCheckAlt } from "react-icons/fa";
import Link from "next/link";

const PaymentSiteNav = ({onCardClick }: any) => {
  return (
    <nav className="p-4 ">
      <div className="max-w-7xl mx-auto   ">
        <div >
          <NavItem href="/cash" icon={<RiMoneyDollarCircleLine />} text="Cash" />
          <NavItem href="/card" icon={<AiFillCreditCard />} text="Card" />
          <NavItem href="/on-account" icon={<FaRegMoneyBillAlt />} text="On Account" />
          <NavItem href="/cheque" icon={<FaMoneyCheckAlt />} text="Cheque" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, text }: any) => {
  return (
    <Link href={href}>
      <div className="flex items-center text-gray-400 space-y-1 mr-4 text-xl font-semibold ">
        <span className="mr-2">{icon}</span>
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default PaymentSiteNav;
