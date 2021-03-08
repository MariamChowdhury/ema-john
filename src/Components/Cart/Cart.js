import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  // console.log(cart)
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  let stringTax = (total / 10).toFixed(2);
  const tax = parseFloat(stringTax);
  const grandTotal = (total + shipping + tax).toFixed(2);

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Items ordered:{cart.length}</p>
      <p>Product Price:{total}</p>
      <p>Shipping cost:{shipping}</p>
      <p>Tax:{tax}</p>
      <p>Total:{parseFloat(grandTotal)}</p>
      <br />
      <Link to="/review">
        <button className="button">Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;
