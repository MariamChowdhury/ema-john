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
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route exact path="/product/:productKey">
            <ProductDetail />
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
