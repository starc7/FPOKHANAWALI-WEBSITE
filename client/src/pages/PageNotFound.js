import React from 'react'
import Layout from '../components/LayoutComp/Layout'
// import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Layout>
        <div className='pnf'>
          <h1 className='pnf-h1'>404</h1>
          <h2 className='pnf-h2'>Oops! Page not found</h2>
          <button onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }} className='pnf-btn'>
          Go Back
          </button>
        </div>

    </Layout>
  )
}

export default PageNotFound;