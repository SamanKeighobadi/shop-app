import { Fragment } from "react";
import { useState } from "react";
//? Import React Router
import { Route, Switch } from "react-router-dom";
//? Import Mainlayouts
import MailLayouts from "./Components/layouts/MailLayouts";
//? Import Components
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import AppCartPage from "./Components/Cart/AppCartPage";
import PageNotFound from "./Components/common/PageNotFound";
import AppShopPage from "./Components/Shop/AppShopPage";
import SingleProductPage from "./Components/SingleProductPage/SingleProductPage";
import AppHome from "./Components/Home/AppHome";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const result = [...cart, { ...product }];
    setCart(result);
  };

  const removeProduct = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <Fragment>
      <MailLayouts productLength={cart.length}>
        <Switch>
          <Route path="/" exact component={AppHome} />
          <Route
            path="/shop"
            render={() => (
              <AppShopPage addToCart={(product) => addToCart(product)} />
            )}
          />
          <Route
            path="/cart"
            render={() => (
              <AppCartPage
                productsInCart={cart}
                removeProduct={(product) => removeProduct(product)}
              />
            )}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/product/:productId" component={SingleProductPage} />
          <Route component={PageNotFound} />
        </Switch>
      </MailLayouts>
    </Fragment>
  );
}

export default App;
