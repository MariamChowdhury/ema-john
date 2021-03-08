import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route exact path="*">
            <h1>404 page not found!</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
