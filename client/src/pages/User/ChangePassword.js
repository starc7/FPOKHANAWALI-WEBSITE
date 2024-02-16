import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../Admin/AdminDashboard';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');


    // const handleChange = (e) => {
    //     const inputValue = e.target.value;
    //     const regex = /^\d*$/; 
    //     if (regex.test(inputValue) || inputValue === '') {
    //       setPhone(inputValue);
    //     }
    //   };

      const ChangePasswordSubmitHandler = async(e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("oldPassword", oldPassword);
          formData.append("newPassword", newPassword);
          formData.append("reNewPassword", reNewPassword);

          const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/update-password/${auth.user.id}`, formData);
          
          if(res.data.success) {
            toast.success('Password changed successfully')
            setTimeout(() => {
              setAuth({
                ...auth,
                user: null,
                token: ''
              })
              localStorage.removeItem('auth')
              navigate('/login')
            }, 3000)
          } else {
            toast.error(res.data.message);
          }

        } catch (error) {
          console.log(error);
          toast.error('Something went wrong');
        }
      }

  return (
    <>
    {auth?.user?.role === 0 ? (
    <Dashboard>
      <div className="form-body">
        <div className="form-container mt-4 mb-4" style={{ width: "400px" }}>
          <h1>Change Password</h1>
          <form onSubmit={ChangePasswordSubmitHandler}>
            <div className="mb-3">
              <input
                type="password"
                id="userName"
                className="form-control"
                onChange={(e)=>setOldPassword(e.target.value)}
                placeholder="Enter Current Password"
                required
              />
            </div>
            <div className="mb-3">
            <input
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                placeholder="Enter new Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="userAddress"
                className="form-control"
                onChange={(e)=>setReNewPassword(e.target.value)}
                placeholder="Re-enter New Password"
                required
              />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">
                Change
            </button>
          </form>
        </div>
      </div>
    </Dashboard> ) : (
      <AdminDashboard>
              <div className="form-body">
        <div className="form-container mt-4 mb-4" style={{ width: "400px" }}>
          <h1>Change Password</h1>
          <form onSubmit={ChangePasswordSubmitHandler}>
            <div className="mb-3">
              <input
                type="password"
                id="userName"
                className="form-control"
                onChange={(e)=>setOldPassword(e.target.value)}
                placeholder="Enter Current Password"
                required
              />
            </div>
            <div className="mb-3">
            <input
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                placeholder="Enter new Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                id="userAddress"
                className="form-control"
                onChange={(e)=>setReNewPassword(e.target.value)}
                placeholder="Re-enter New Password"
                required
              />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">
                Change
            </button>
          </form>
        </div>
      </div>
      </AdminDashboard>
    )}
    </>
  )
}

export default ChangePassword