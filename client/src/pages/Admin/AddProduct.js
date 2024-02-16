import React from "react";
import AdminDashboard from "./AdminDashboard";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const addProductSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("it is tapped");
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("shipping", shipping);
      formData.append("photo", photo);
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/add-product`,
        formData
      );
      console.log("res is going");
      navigate("/dashboard/admin/products");
      if (res.data.success) {
        toast.success(res.data.message);
        console.log("it is success");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <AdminDashboard>
      <div className="form-body">
        <div className="form-container mt-4 mb-4" style={{ width: "400px" }}>
          <h1>Add Product</h1>
          <form onSubmit={addProductSubmitHandler}>
            <div className="mb-3">
              <input
                type="text"
                id="productName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter Product name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                id="productDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                placeholder="Enter Product description"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                id="productPrice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-control"
                placeholder="Enter Product price"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                id="productQuantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="form-control"
                placeholder="Enter quantity of Product"
                required
              />
            </div>
            <div className="mb-3">
              <label className="btn btn-outline-secondary form-control">
                {photo ? photo.name : "Upload Image"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setPhoto(file);
                }}
                className="form-control"
                required
                hidden
              /></label>
            </div>

            <div className="mb-3">
              {photo && (
                <div className="text-center">
                  <img src={URL.createObjectURL(photo)} alt="product_photo" height={"200px"} className="img img-responsive"/>
                </div>
              )}
            </div>


            <div className="mb-3">
              <label className="d-block">Shipping status:</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="shipping"
                  id="shippingYes"
                  value="1"
                  onChange={(e) => setShipping(e.target.value)}
                  className="form-check-input"
                  required
                />
                <label htmlFor="shippingYes" className="form-check-label">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="shipping"
                  id="shippingNo"
                  value="0"
                  onChange={(e) => setShipping(e.target.value)}
                  className="form-check-input"
                />
                <label htmlFor="shippingNo" className="form-check-label">
                  No
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default AddProduct;
