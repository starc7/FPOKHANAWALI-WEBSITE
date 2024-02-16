import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
    return (
        <>
            <h2 className='text-center pt-2' >Dashboard</h2>
            <div className="list-group bg-light">
                <NavLink to='/dashboard/user/profile' className="list-group-item list-group-item-action bg-light text-dark">
                    Profile
                </NavLink>
                <NavLink to='/dashboard/user/edit-profile' className="list-group-item list-group-item-action bg-light text-dark">
                    Edit Profile
                </NavLink>
                <NavLink to='/dashboard/user/change-password' className="list-group-item list-group-item-action bg-light text-dark">
                    Change Password
                </NavLink>
                <NavLink to='/dashboard/user/orders' className="list-group-item list-group-item-action bg-light text-dark">
                    Orders
                </NavLink>
            </div>
            
        </>
    );
};

export default UserMenu;
