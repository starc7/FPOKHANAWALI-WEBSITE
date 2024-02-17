// // import React, { useState, useNavigate } from 'react'
// // import AdminDashboard from './AdminDashboard';
// // import axios from 'axios';
// // import toast from 'react-hot-toast';

// // const UpdateProduct = () => {
// //         const [name, setName] = useState("");
// //         const [description, setDescription] = useState("");
// //         const [price, setPrice] = useState("");
// //         const [quantity, setQuantity] = useState("");
// //         const [shipping, setShipping] = useState("");
// //         const [photo, setPhoto] = useState(null);
// //         const navigate = useNavigate();
      
// //         const addProductSubmitHandler = async (e) => {
// //           e.preventDefault();
// //           console.log("it is tapped");
// //           try {
// //             const formData = new FormData();
// //             formData.append("name", name);
// //             formData.append("description", description);
// //             formData.append("price", price);
// //             formData.append("quantity", quantity);
// //             formData.append("shipping", shipping);
// //             formData.append("photo", photo);
// //             const res = await axios.post(
// //               `${process.env.REACT_APP_API}/api/v1/product/add-product`,
// //               formData
// //             );
// //             console.log("res is going");
// //             navigate("/dashboard/admin/products");
// //             if (res.data.success) {
// //               toast.success(res.data.message);
// //               console.log("it is success");
// //             } else {
// //               toast.error(res.data.message);
// //             }
// //           } catch (error) {
// //             console.log(error);
// //             toast.error("Something went wrong");
// //           }
// //         };
// //   return (
// //         <AdminDashboard>
// //       <div className="form-body">
// //         <div className="form-container mt-4 mb-4" style={{ width: "400px" }}>
// //           <h1>Add Product</h1>
// //           <form onSubmit={addProductSubmitHandler}>
// //             <div className="mb-3">
// //               <input
// //                 type="text"
// //                 id="productName"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //                 className="form-control"
// //                 placeholder="Enter Product name"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <input
// //                 type="text"
// //                 id="productDescription"
// //                 value={description}
// //                 onChange={(e) => setDescription(e.target.value)}
// //                 className="form-control"
// //                 placeholder="Enter Product description"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <input
// //                 type="number"
// //                 id="productPrice"
// //                 value={price}
// //                 onChange={(e) => setPrice(e.target.value)}
// //                 className="form-control"
// //                 placeholder="Enter Product price"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <input
// //                 type="number"
// //                 id="productQuantity"
// //                 value={quantity}
// //                 onChange={(e) => setQuantity(e.target.value)}
// //                 className="form-control"
// //                 placeholder="Enter quantity of Product"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor="productImage" className="form-label">
// //                 Product Image:
// //               </label>
// //               <input
// //                 type="file"
// //                 id="productImage"
// //                 onChange={(e) => {
// //                   const file = e.target.files[0];
// //                   setPhoto(file);
// //                 }}
// //                 className="form-control"
// //                 required
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <label className="d-block">Shipping status:</label>
// //               <div className="form-check form-check-inline">
// //                 <input
// //                   type="radio"
// //                   name="shipping"
// //                   id="shippingYes"
// //                   value="1"
// //                   onChange={(e) => setShipping(e.target.value)}
// //                   className="form-check-input"
// //                   required
// //                 />
// //                 <label htmlFor="shippingYes" className="form-check-label">
// //                   Yes
// //                 </label>
// //               </div>
// //               <div className="form-check form-check-inline">
// //                 <input
// //                   type="radio"
// //                   name="shipping"
// //                   id="shippingNo"
// //                   value="0"
// //                   onChange={(e) => setShipping(e.target.value)}
// //                   className="form-check-input"
// //                 />
// //                 <label htmlFor="shippingNo" className="form-check-label">
// //                   No
// //                 </label>
// //               </div>
// //             </div>
// //             <button type="submit" className="btn btn-primary">
// //               Add Product
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </AdminDashboard>
// //   )
// // }

// // export default UpdateProduct;

// import React, { useEffect } from "react";
// import AdminDashboard from "./AdminDashboard";
// import { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate, useParams } from "react-router-dom";

// const UpdateProduct = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [shipping, setShipping] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const navigate = useNavigate();
//   const [id, setId] = useState("")
//   const params = useParams();

//   const getSingleProduct = async() => {
//     try {
//         const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/products/${params.slug}`);
//         setName(data.product.name)
//         setDescription(data.product.description)
//         setPrice(data.product.price)
//         setQuantity(data.product.quantity)
//         setShipping(data.product.shipping)
//         setPhoto(data.product.photo.data)
//         setId(data.product._id)
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
//   }
//   useEffect(() => {
//     getSingleProduct();
//     //eslint-disable-next-line
//   }, [])

//   const addProductSubmitHandler = async (e) => {
//     e.preventDefault();
//     console.log("it is tapped");
//     try {
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("quantity", quantity);
//       formData.append("shipping", shipping);
//       photo && formData.append("photo", photo);
//       const res = await axios.put(
//         `${process.env.REACT_APP_API}/api/v1/product/update-product/`,
//         formData
//       );
//       console.log("res is going");
//       navigate("/dashboard/admin/products");
//       if (res.data.success) {
//         toast.success(res.data.message);
//         console.log("it is success");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <AdminDashboard>
//       <div className="form-body">
//         <div className="form-container mt-4 mb-4" style={{ width: "400px" }}>
//           <h1>Update Product</h1>
//           <form onSubmit={addProductSubmitHandler}>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 id="productName"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter Product name"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 id="productDescription"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter Product description"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 id="productPrice"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter Product price"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="number"
//                 id="productQuantity"
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 className="form-control"
//                 placeholder="Enter quantity of Product"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="btn btn-outline-secondary col-md-12">
//               {photo ? photo.name : "Upload Photo"}
//               <input
//                 type="file"
//                 name="photo"
//                 accept="image/*"
//                 id="productImage"
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   setPhoto(file);
//                 }}
//                 className="form-control"
//                 required
//               />
//               </label>
//             </div>
//             <div className="mb-3">
//               {photo ? (
//               <div className="text-center">
//                 <img src=''
//                 alt="product_photo"
//                 height={"200px"}
//                 className="img img-responsive" />
//               </div>) : (
//               <div className="text-center">
//               <img src={`/api/v1/product/getPhoto/${id}`}
//               alt="product_photo"
//               height={"200px"}
//               className="img img-responsive" />
//               </div>
//               )
//               }
//             </div>
//             <div className="mb-3">
//               <label className="d-block">Shipping status:</label>
//               <div className="form-check form-check-inline">
//                 <input
//                   type="radio"
//                   name="shipping"
//                   id="shippingYes"
//                   value="1"
//                   onChange={(e) => setShipping(e.target.value)}
//                   checked={shipping === true}
//                   className="form-check-input"
//                   required
//                 />
//                 <label htmlFor="shippingYes" className="form-check-label">
//                   Yes
//                 </label>
//               </div>
//               <div className="form-check form-check-inline">
//                 <input
//                   type="radio"
//                   name="shipping"
//                   id="shippingNo"
//                   value="0"
//                   onChange={(e) => setShipping(e.target.value)}
//                   checked={shipping === false}
//                   className="form-check-input"
//                 />
//                 <label htmlFor="shippingNo" className="form-check-label">
//                   No
//                 </label>
//               </div>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Update Product
//             </button>
//           </form>
//         </div>
//       </div>
//     </AdminDashboard>
//   );
// };

// export default UpdateProduct;

import React, { useEffect } from "react";
import AdminDashboard from "./AdminDashboard";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const params = useParams()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState(null);
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const getSingleProduct = async() => {
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/products/${params.slug}`)
      setName(data.product.name)
      setDescription(data.product.description)
      setPrice(data.product.price)
      setQuantity(data.product.quantity)
      setShipping(data.product.shipping)
      setId(data.product._id)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSingleProduct()
    //eslint-disable-next-line
  }, [])

  const updateProductSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("shipping", shipping);
      photo && formData.append("photo", photo);
      const res = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/product/update-product/${id}`,
        formData
      );
      setTimeout(() => {
        navigate("/dashboard/admin/products");
      }, 2500)
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const handleDeleteProduct = async() => {
    try {
      const {data} = axios.delete(`${process.env.REACT_APP_API}/api/v1/product/products/${id}`)
      toast.success("Product deleted successfully")
      setTimeout(() => {navigate("/dashboard/admin/add-product")}, 5000)
      //eslint-disable-next-line
      data
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  const confirmDeleteProduct = (e) => {
    e.preventDefault();
    const confirm = window.confirm("Do you really want to delete this product?")
    if(confirm) {
      handleDeleteProduct()
    }
  }

  return (
    <AdminDashboard>
      <div className="form-body">
        <div className="form-container mt-4 mb-4" style={{ width: "400px" }}>
          <h1>Update Product</h1>
          <form onSubmit={updateProductSubmitHandler}>
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
              <label className="btn btn-outline-secondary col-md-16 form-control">
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
                hidden
              /></label>
            </div>
            <div className="mb-3">
              {photo ? (
                <div className="text-center">
                  <img src={URL.createObjectURL(photo)} alt="product_photo" height={"200px"} className="img img-responsive"/>
                  
                </div>
              ) : (
                <div className="text-center">
                  <img src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${id}`} alt="product_photo" height={"200px"} className="img img-responsive"/>
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
                  checked={shipping}
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
                  checked={shipping === false}
                  className="form-check-input"
                />
                <label htmlFor="shippingNo" className="form-check-label">
                  No
                </label>
              </div>
            </div>
            <button type="submit" className="mb-3 btn btn-primary">
              Update Product
            </button>
            <button type="submit" className="mb-3 btn btn-danger" onClick={confirmDeleteProduct}>
              Delete Product
            </button>
          </form>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default UpdateProduct;
