import React from "react";
import AdminDashboard from "./AdminDashboard";
import { useAuth } from "../../context/auth";

const AdminProfile = () => {
  const [auth] = useAuth();
  return (
    <AdminDashboard>
      <div className="card bg-light">
        <div className="card-body">
          <h4 className="card-title text-primary">Admin Profile</h4>
          <div className="row">
            <div className="col-md-3">
              <strong>Name:</strong>
            </div>
            <div className="col-md-9">
              <p>{auth?.user?.name || "Not available"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <strong>Email:</strong>
            </div>
            <div className="col-md-9">
              <p>{auth?.user?.email || "Not available"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <strong>Phone no:</strong>
            </div>
            <div className="col-md-9">
              <p>{auth?.user?.phone || "Not available"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <strong>Address:</strong>
            </div>
            <div className="col-md-9">
              <p>{auth?.user?.address || "Not available"}</p>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default AdminProfile;
