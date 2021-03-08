import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Product = (props) => {
  // console.log(props)
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>By:{seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left!</small>
        </p>
        {props.showAddToCart && (
          <button
            className="button"
            onClick={() => props.handleAdd(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
