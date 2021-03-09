import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import Image from "../../images/giphy.gif";
const Review = () => {
  const [cart, setCart] = useState([]);
  const handleRemoveProduct = (productKey) => {
    console.log("clicked", productKey);
    const newCart = cart.filter((pd) => pd.key !== productKey);
    removeFromDatabaseCart(productKey);
    setCart(newCart);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  const [orderDone, setOrderDone] = useState(false);

  const handlePlaceOrder = () => {
    setOrderDone(true);
    setCart([]);
    processOrder();
  };
  let thankYou;
  if (orderDone) {
    thankYou = <img src={Image} alt="" />;
  }
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((cart) => (
          <ReviewItem
            handleRemoveProduct={handleRemoveProduct}
            key={cart.key}
            product={cart}
          ></ReviewItem>
        ))}
        {thankYou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="button">
            Place Order!
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
//38.3
