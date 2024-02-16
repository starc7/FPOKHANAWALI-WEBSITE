import React, { useEffect, useState } from "react";
import Layout from "../../components/LayoutComp/Layout";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => (total = total + item.price));
      return total;
    } catch (error) {
      console.log(error);
    }
  };

  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  // Payment Token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/braintree/token`
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [auth?.token]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/braintree/payment`,
        { nonce, cart }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token ? auth?.user?.name : "User"}`}
            </h1>
            <h4 className="text-center">
              {cart?.length > 1
                ? `You have ${cart?.length} items in your cart. ${
                    auth?.token ? "" : "Please log in to purchase"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {cart?.map((p) => (
              <div className="row mb-2 card flex-row">
                <div className="col-md-4 mt-2" key={p._id}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/getPhoto/${p._id}`}
                    className="card-img-top img-responsive"
                    alt={p.name}
                    width={"70%"}
                  />
                </div>
                <div className="col-md-8 mt-2">
                  <h4>
                    <strong>{p.name}</strong>
                  </h4>
                  <h4>₹ {p.price}/kg</h4>
                  <button
                    className="btn btn-danger remove-btn"
                    onClick={() => {
                      removeCartItem(p._id);
                    }}
                    style={{ width: "90px" }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h2>My Cart</h2>
            <p>Checkout | Payment</p>
            <hr />
            <h5>Total Amount: ₹ {totalPrice()}</h5>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h5>Current Address: </h5>
                  <h6>{auth?.user?.address}</h6>
                  <button className="btn btn-warning">Update Address</button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button className="btn btn-warning">Update Address</button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => navigate("/login", { state: "/cart" })}
                  >
                    Please Log In to checkout
                  </button>
                )}
              </div>
            )}
            <div className="mt-2">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                  <button
                    className="btn btn-success"
                    onClick={handlePayment}
                    style={{ minWidth: "155px" }}
                    disabled={!auth?.user?.address}
                  >
                    {loading ? "Processing" : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
