import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <>  <h1>Admin Panel</h1>
            <div className="list-group bg-light">
                <NavLink to='/dashboard/admin/profile' className="list-group-item list-group-item-action bg-light text-dark">
                    Profile
                </NavLink>
                <NavLink to='/dashboard/admin/edit-profile' className="list-group-item list-group-item-action bg-light text-dark">
                    Edit Profile
                </NavLink>
                <NavLink to='/dashboard/admin/change-password' className="list-group-item list-group-item-action bg-light text-dark">
                    Change Password
                </NavLink>
                <NavLink to='/dashboard/admin/add-product' className="list-group-item list-group-item-action bg-light text-dark">
                    Add New Product
                </NavLink>
                <NavLink to='/dashboard/admin/products' className="list-group-item list-group-item-action bg-light text-dark">
                    All Products
                </NavLink>
                <NavLink to='/dashboard/admin/users' className="list-group-item list-group-item-action bg-light text-dark">
                    All Users
                </NavLink>
                <NavLink to='/dashboard/admin/orders' className="list-group-item list-group-item-action bg-light text-dark">
                    All Orders
                </NavLink>

            </div>
            
        </>
    );
};

export default AdminMenu;
