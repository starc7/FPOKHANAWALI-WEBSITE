import React, { useEffect, useState } from 'react'
import Layout from '../components/LayoutComp/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import AddToCartButton from './User/AddToCartButton';

const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        if(params?.slug) getProduct()
        //eslint-disable-next-line
    }, [params?.slug])

    const getProduct = async() => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/products/${params.slug}`)
            setProduct(data?.product)
            console.log(data.product._id)
            console.log(product)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    // <Layout>
    //     <div style={{display: 'flex', justifyContent: 'center'}}>
    //     <div className='mx-1 row mt-3'>
    //     <div className="card m-2" style={{display: 'flex'}}>
    //           <div>
    //           <img src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${product._id}`}
    //           className="card-img-top img-fluid" style={{width: '25rem'}}
    //           alt={product.name} />
    //           </div>
    //           <div className="card-body">
    //             <h5 className="card-title">{product.name}</h5>
    //             <h6 className="card-text">Price: <strong>{product.price} INR/kg</strong></h6>
    //             <h6 className="card-text">{product.shipping ? 'Available' : 'Not Avaialable'}</h6>
    //             <h6 className="card-text">Description: {product.description}</h6>
    //             <button className="btn btn-outline-primary ms-1">ADD TO CART</button>
    //           </div>
    //         </div>
    //     </div>
    //     </div>
    // </Layout>
    <Layout>
      <div className='container mt-4 mb-4' style={{display: 'flex', justifyContent: 'center'}}>
       <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
        <img src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${product._id}`}
              className="card-img-top img-fluid mt-1" style={{width: '19rem'}}
              alt={product.name} />
        </div>
        <div className='mx-4'>
          <h2><strong>{product.name}</strong></h2>
          <br />
          <h4>Price: <strong>₹ {product.price}/kg</strong></h4>
          <h4>Shipping: <i>{product.shipping ? 'Available' : 'Not Avaialable'}</i></h4>
          <div style={{maxWidth: '300px'}}><p className='mt-1'><strong>Description: </strong>{product.description}</p></div>
          <br />
          {product.shipping ? (
                      <div className='mt-1'>
                        <AddToCartButton p={product} />
                      </div>
                    ) : (
                      <>
                      <button className="btn btn-outline-danger mt-1" style={{minWidth: '130px'}} disabled>
                        Out Of Stock
                      </button>
                      <br />
                      </>
                    )}
          <button className="btn btn-outline-danger mt-1" style={{minWidth: '130px'}} onClick={() => {navigate(-1)}}>Back</button>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default ProductDetails