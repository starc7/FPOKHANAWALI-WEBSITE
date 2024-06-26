import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const Spinner = ({path = 'login'}) => {
    const [count, setCount] = useState(5)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => --prev );
        }, 1000);
        count === 0 && navigate(`/${path}`, {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location, path])
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center"
      style={{height: '100vh'}}>

        <div className='Text-center'>Redirecting in {count} second</div>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default Spinner;