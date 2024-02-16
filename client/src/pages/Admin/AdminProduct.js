import React, { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);

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
    getAllProducts();
  }, []);
  return (
    <AdminDashboard>
      <div>
        <div className="row">
          <div className="col-24">
            <h1 className="text-center">Products</h1>
            <div className="row">
              {products?.map(product => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <div className="card" style={{ width: "100%" }}>
                  <Link to={`/dashboard/admin/products/${product.slug}`}>
                  <div className="container">
                <img src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${product._id}`} className="card-img-top img-fluid" alt={product.name}/></div></Link>
                <div className="card-body">
                  <h5 className="card-title"><strong>{product.name}</strong></h5>
                  <p className="card-text">
                    Shipping: {product.shipping ? 'Available': <i>Not Available</i>}
                  </p>
                  <p className="card-text">
                    Price: <strong>₹ {product.price}/kg</strong>
                  </p>
                </div>
            </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default AdminProduct;
