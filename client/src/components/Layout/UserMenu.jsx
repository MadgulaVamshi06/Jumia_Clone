import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu m-5">
        <div className="list-group">
          <NavLink to="/dashboard/user" className="nav-link">
            <h4>Dashboard</h4>
          </NavLink>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;