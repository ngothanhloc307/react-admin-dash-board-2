import React from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/menu";
import Sidebar from "./Sidebar";

function SideBarContainer() {
  const [{ isCollapsed }] = React.useContext(MenuContext);
  return (
    <div className="menu">
      <div className="navbar-brand-box my-3">
        {!isCollapsed && (
          <Link to="/" className="logo mx-4 px-4 text-decoration-none">
            NGOLOC
          </Link>
        )}
      </div>
      <div data-simplebar className="h-100">
        <Sidebar />
      </div>
    </div>
  );
}

export default SideBarContainer;
