import { Fragment } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Authentication from "./Components/Authentication/Authentication";
import AppCartPage from "./Components/Cart/AppCartPage";
//? Import Mainlayouts
import MailLayouts from "./Components/layouts/MailLayouts";
import AppShopPage from "./Components/Shop/AppShopPage";
//? Import Components

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const result = [...cart, product];
    setCart(result);
  };

  console.log(cart);
  console.log(cart.length);

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
          <Route path="/auth" component={Authentication} />
          <Route path="/cart" component={AppCartPage} />
        </Switch>

      </MailLayouts>
    </Fragment>
  );
}

export default App;
