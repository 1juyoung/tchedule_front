import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <>
      <div className="fixed top-8 left-9 right-0 h-16 flex items-center justify-between px-4 bg-opacity">
        <Link to='/' className="sm:text-sm text-xl font-bold text-neutral-50">
          T-Chedule
        </Link>
        <AiOutlineUser className="fixed sm:mt-0 mt-3 right-12 text-neutral-50 sm:text-xl text-3xl " />
      </div>
    </>
  );
}

export default Header;
