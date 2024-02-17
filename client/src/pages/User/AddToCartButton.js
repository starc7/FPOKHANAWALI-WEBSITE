import React, { useState } from 'react'
import { useCart } from '../../context/cart'
import toast from 'react-hot-toast';
import { Button, Modal } from 'react-bootstrap';

const AddToCartButton = ({p}) => {
    // const [cart, setCart] = useCart();
    // const addToCartHandler = () => {
    //     setCart(prevCart => {
    //       const newCart = [...cart, p];
    //       localStorage.setItem('cart', JSON.stringify(newCart));
    //       toast.success('Item added to cart successfully');
    //       return newCart;
    //     });
    //   };

    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useCart();

    const handleAddToCart = () => {
      const index = cart.findIndex(product => p._id === product.product._id)

      if(index !== -1) {
        const updatedCart = [...cart];
        updatedCart[index].quantity += quantity;
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success('Item added to cart successfully');
      } else {
        setCart(prevCart => {
          const newCart = [...cart, {product: p, quantity: quantity}];
          localStorage.setItem('cart', JSON.stringify(newCart));
          toast.success('Item added to cart successfully');
          return newCart;
        });
      }
      setShowModal(false);
    };

  return (
    // <div>
    //     <button className="btn btn-outline-primary" onClick={addToCartHandler}>ADD TO CART</button>
    // </div>
    <>
    <Button variant="outline-primary" onClick={() => setShowModal(true)}>
      ADD TO CART
    </Button>

    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add {p.name} to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please select the quantity (in kg):</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min={1}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="warning" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddToCartButton