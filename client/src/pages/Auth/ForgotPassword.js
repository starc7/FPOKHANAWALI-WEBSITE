import React, { useState } from 'react'
import Layout from '../../components/LayoutComp/Layout'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("email", email);
            formData.append("answer", answer);
            formData.append("newPassword", newPassword);

            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, formData);
            if(res.data.success) { 
              toast.success(res.data.message)
              setTimeout(() => {
                navigate('/login');
              }, 2000)
                
                
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
        <div className="form-container">
          <h1>Reset Password</h1>
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
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                placeholder="Who is your favourite Movie character?"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                placeholder="Enter New Password"
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary mb-2">
              Reset
            </button>
          </form>
        </div>
        </div>
    </Layout>
  )
}

export default ForgotPassword;