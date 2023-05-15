import React from 'react';
import { CgChevronDown, CgChevronLeft, CgChevronRight } from "react-icons/cg";

const UsersTableFooter = () => {
    return (
      <div className="flex gap-4 justify-end items-center mt-3 text-sm  me-6">
        <p>Rows per page:</p>
        <div className="flex items-center  cursor-pointer">
          <span>5</span>
          <CgChevronDown className="font-extrabold text-lg w-[11px]" />
        </div>
        <p>6-10 of 11</p>
        <div className="flex gap-3 font-bold cursor-pointer w-[40px]">
          <CgChevronLeft className="text-gray-400 font-extrabold text-lg" />
          <CgChevronRight className="font-extrabold text-lg" />
        </div>
      </div>
    );
};

export default UsersTableFooter;