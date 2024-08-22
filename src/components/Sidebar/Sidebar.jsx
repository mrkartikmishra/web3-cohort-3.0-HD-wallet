import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import "./Sidebar.css";

const Sidebar = ({ isSidebarOpened }) => {
  return (
    <div className={`sidebar ${isSidebarOpened && "active"}`}>
      <div className="top_icons">
        <CgProfile size={25} className="icon" />
        <CgProfile size={25} className="icon" />
        <CgProfile size={25} className="icon" />
      </div>
      <div className="bottom_icons">
        <FaPlus size={20} className="icon" />
        <IoSettingsOutline size={20} className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
