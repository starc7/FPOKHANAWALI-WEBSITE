// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
// import axios from 'axios'
// import Layout from '../components/LayoutComp/Layout';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/products`);
//         setProducts(response.data.products)
//       } catch (error) {
//         console.log(error)
//         toast.error(error);
//       }
//     };
//     fetchData();
//     // eslint-disable-next-line
//   }, [])
//   return (
//     <Layout>
//       <div className="container mt-4">
//       <h2 className='text-center'>Our Products</h2>
//       <div className='mt-2'>
//         {products.map((product) => (
//           <div className='mb-4 mt-1 card'>
//             <div className='d-flex flex-wrap'>
//               <img src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${product._id}`} alt={product.name} height={200} width={200}/>
//               <div className='dette'>
//                 <h4>{product.name}</h4>
//                 <h6>{product.price}</h6>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </Layout>
//   )
// }

// export default AllProducts;
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../components/LayoutComp/Layout";
import { Radio } from "antd";
import { Prices } from "../components/Prices";
import SearchInput from "./User/SearchInput";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./User/AddToCartButton";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [radio, setRadio] = useState([]);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/products`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (!radio.length) getAllProducts();
  }, [radio.length]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filter`,
        { radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (radio.length) filterProduct();
    //eslint-disable-next-line
  }, [radio]);

  return (
    <Layout title={"Our Products"}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='ml-3 mt-3 col-md-3'>
          <div className="mb-2">
            <SearchInput />
          </div>
          <h4 className="text-center mt-3">Filter by Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          </div>
          <div className='mt-3 col-md-9'>
          <div className="row">
          <div className="col-24">
            <h1 className="text-center">Products</h1>
            <div className="row">
              {products?.map(product => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <div className="card" style={{ width: "100%" }}>
                  <div className="container">
                <img src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${product._id}`} className="card-img-top img-fluid" alt={product.name}/></div>
                <div className="card-body">
                  <h5 className="card-title"><strong>{product.name}</strong></h5>
                  <p className="card-text">
                    Price: <strong>₹ {product.price}/kg</strong>
                  </p>
                  <p className="card-text">
                    Shipping: {product.shipping ? 'Available': <i>Not Available</i>}
                  </p>
                  <div className="d-flex">
                    <button
                      className="btn btn-css"
                      onClick={() => navigate(`/product/${product.slug}`)}
                    >
                      More Details
                    </button>
                    {product.shipping ? (
                      <AddToCartButton p={product} />
                    ) : (
                      <button className="btn btn-outline-danger"  disabled>
                        Out Of Stock
                      </button>
                    )}
                  </div>
                </div>
            </div>
              </div>
            ))}
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>



    </Layout>
  );
};

export default AllProducts;
