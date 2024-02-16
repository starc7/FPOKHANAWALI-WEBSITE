import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from '../Admin/AdminDashboard';

const EditUserProfile = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const getSingleUser = () => {
        try {
            setName(auth?.user?.name);
            setPhone(auth?.user?.phone);
            setEmail(auth?.user?.email);
            setAddress(auth?.user?.address);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleUser()
    //eslint-disable-next-line
    }, [])

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const regex = /^\d*$/; 
        if (regex.test(inputValue) || inputValue === '') {
          setPhone(inputValue);
        }
      };

      const editUserProfileSubmitHandler = async(e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("phone", phone);
          formData.append("email", email);
          formData.append("address", address);

          const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/update-user/${auth.user.id}`, formData);
          
          if(res.data.success) {
            setAuth(auth => ({
              ...auth,
              user: {
                ...auth.user,
                email: email,
                name: name,
                address: address,
                phone: phone
              }
            }));
            localStorage.setItem('auth', JSON.stringify({
              user: {
                  id: auth.user.id,
                  email: email,
                  name: name,
                  address: address,
                  phone: phone,
                  role: auth.user.role
                  },
              token: auth.token
            }))
            setTimeout(()=>{
              if(auth?.user?.role === 0) {
                navigate('/dashboard/user/profile');
              } else {
                navigate('/dashboard/admin/profile')
              }
            }, 3000)
            toast.success('Details updated successfully');
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
          <h1>Edit Profile</h1>
          <form onSubmit={editUserProfileSubmitHandler}>
            <div className="mb-3">
              <input
                type="text"
                id="userName"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="userEmail"
                value={email}
                className="form-control"
                readOnly
              />
            </div>
            <div className="mb-3">
            <input
                type="phone"
                value={phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your Phone no."
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="userAddress"
                className="form-control"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                placeholder="Enter Your Address"
                required
              />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </Dashboard>) : 
    (
    <AdminDashboard>
            <div className="form-body">
        <div className="form-container mt-4 mb-4" style={{ width: "400px" }}>
          <h1>Edit Profile</h1>
          <form onSubmit={editUserProfileSubmitHandler}>
            <div className="mb-3">
              <input
                type="text"
                id="userName"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="userEmail"
                value={email}
                className="form-control"
                readOnly
              />
            </div>
            <div className="mb-3">
            <input
                type="phone"
                value={phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your Phone no."
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="userAddress"
                className="form-control"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                placeholder="Enter Your Address"
                required
              />
            </div>
            <button type="submit" className="mb-3 btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </AdminDashboard>
    )}
    </>
  )
}

export default EditUserProfile