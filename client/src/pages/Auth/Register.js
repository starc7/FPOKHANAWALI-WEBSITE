import React, { useState } from 'react'
import Layout from '../../components/LayoutComp/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Register.css'


const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [answer, setAnswer] = useState('')
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
          const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {name,email,password,phone,address, answer});
          if(res.data.success) {
            toast.success(res.data.message)
            setTimeout(() => {
              navigate('/login')
            }, 3000);
          } else {
            toast.error(res.data.message)
          }
        } catch(error) {
          console.log(error)
          toast.error('Something went wrong')
        }
    }

    const handleChange = (e) => {
      const inputValue = e.target.value;
      const regex = /^\d*$/; 
      if (regex.test(inputValue) || inputValue === '') {
        setPhone(inputValue);
      }
    };

    return (
      <Layout>
        <div className='form-body'>
        <div className="form-container" style={{width: '370px'}}>
          <h1>REGISTER</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                // id="exampleInputEmail1"
                // aria-describedby="emailHelp"
                placeholder="Enter your Name"
                maxLength={22}
                required
              />
            </div>
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
                minLength={6}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="phone"
                value={phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your Phone no."
                maxLength={10}
                minLength={10}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                placeholder="Enter your Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                placeholder="Who is your favourite movie character?"
                required
              />
            </div>
            {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div> */}
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
        </div>
      </Layout>
    );
}


export default Register