
import React from 'react'
import SearchInput from './User/SearchInput'
import { useSearch } from '../context/search'
import Layout from '../components/LayoutComp/Layout';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './User/AddToCartButton';

const Search = () => {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();

    //eslint-disable-next-line
    setValues
  return (
    <Layout>
        <div className='container'>
            <div className='text-center'>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}><SearchInput/></div>
                <h1>Search Results</h1>
                <h6>{values?.result.length < 1 ? 'No Product Found' : `Found ${values?.result.length} items`}</h6>
                <div className="d-flex flex-wrap mt-4">
          {values?.result.map((p) => (
            <div className="card m-2" style={{width: "19rem"}}>
              <img src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${p._id}`}
              className="card-img-top img-fluid"
              alt={p.name} />
              <div className="card-body">
                <h5 className="card-title"><strong>{p.name}</strong></h5>
                <h6 className="card-text">Price: <strong>₹ {p.price}/kg</strong></h6>
                <h6 className="card-text">Shipping: {p.shipping ? 'Available': 'Not Available'}</h6>
                <button className="btn btn-css ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                {p.shipping ?
                  <AddToCartButton p={p} /> :
                  <h6 style={{border: 'solid skyblue', borderRadius: '5px'}}>Out of stock</h6>
                }
              </div>
            </div>
          ))}
        </div>
            </div>
        </div>
    </Layout>
  )
}

export default Search