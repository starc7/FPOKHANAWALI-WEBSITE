import React, { useState } from 'react'
import Layout from '../../components/LayoutComp/Layout'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate,useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const location = useLocation();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {email, password});
            if(res.data.success) { 
                setAuth(
                  {...auth,
                  user: res.data.user,
                  token: res.data.token}
                )
                localStorage.setItem('auth', JSON.stringify(res.data))
                toast.success(res.data.message)
                navigate(location.state || '/');
                
            } else {
                toast.error(res.data.message)
            }

        } catch(error) {
            console.error(error)
            toast.error('Something went wrong')
        }
    }

  return (
    <Layout>
        <div className='form-body'>
        <div className="form-container" style={{width:'300px'}}>
          <h1>LOG IN</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your Password"
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary mb-2">
              Log In
            </button>
            <br />
            <button type="button"  onClick={() => {navigate('/forgot-password')}} className="btn btn-danger mb-2">
              Forgot Password
            </button>
          </form>
        </div>
        </div>
    </Layout>
  )
}

export default Login