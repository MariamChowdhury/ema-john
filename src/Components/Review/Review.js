import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

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
    // console.log(cartProducts);
  }, []);
  return (
    <div>
      <h1>Cart Items: {cart.length}</h1>
      {cart.map((cart) => (
        <ReviewItem
          handleRemoveProduct={handleRemoveProduct}
          key={cart.key}
          product={cart}
        ></ReviewItem>
      ))}
    </div>
  );
};

export default Review;
//38.3
