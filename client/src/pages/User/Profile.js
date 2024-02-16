import React from "react";
import { useAuth } from "../../context/auth";
import Dashboard from "./Dashboard";

const Profile = () => {
  const [auth] = useAuth();
  return (
    <Dashboard>
      <div className="card bg-light">
        <div className="card-body">
          <h4 className="card-title text-primary">Profile</h4>
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
    </Dashboard>
  );
};

export default Profile;