import { Fragment } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import AppCartPage from "./Components/Cart/AppCartPage";
//? Import Mainlayouts
import MailLayouts from "./Components/layouts/MailLayouts";
import AppShopPage from "./Components/Shop/AppShopPage";
//? Import Components

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
          <Route path="/" exact render={() => <h1>home</h1>} />
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
        </Switch>
      </MailLayouts>
    </Fragment>
  );
}

export default App;
