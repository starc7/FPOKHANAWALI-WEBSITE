import React from 'react'
import { useCart } from '../../context/cart'
import toast from 'react-hot-toast';

const AddToCartButton = ({p}) => {
    const [cart, setCart] = useCart();
    const addToCartHandler = () => {
        setCart(prevCart => {
          const newCart = [...cart, p];
          localStorage.setItem('cart', JSON.stringify(newCart));
          toast.success('Item added to cart successfully');
          return newCart;
        });
      };
  return (
    <div>
        <button className="btn btn-outline-primary" onClick={addToCartHandler}>ADD TO CART</button>
    </div>
  )
}

export default AddToCartButton