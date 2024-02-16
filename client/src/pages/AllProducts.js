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
      <div className="mx-1 row mt-3">
        <div className="col-md-3">
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
        <div className="col-md-9">
          <h1 className="text-center">Our Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "19rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${p._id}`}
                  className="card-img-top img-fluid"
                  alt={p.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    <strong>{p.name}</strong>
                  </h5>
                  <h6 className="card-text">
                    Price: <strong>₹ {p.price}/kg</strong>
                  </h6>
                  <h6 className="card-text">
                    Shipping: {p.shipping ? "Available" : "Not Available"}
                  </h6>
                  <button
                    className="btn btn-css ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  {p.shipping ? (
                    <AddToCartButton p={p} />
                  ) : (
                    <h6
                      style={{
                        border: "solid skyblue",
                        borderRadius: "5px",
                        textAlign: "center",
                      }}
                    >
                      Out of stock
                    </h6>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
