import { useState, Fragment, Suspense, lazy } from "react";
//? Import React Router
import { Route, Switch, useHistory } from "react-router-dom";
//? Import Mainlayouts
import MailLayouts from "./Components/layouts/MailLayouts";
//? React toastify
import { ToastContainer, toast } from "react-toastify";
//? Sweetalert2 React
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//? Import Components
const Login = lazy(() => import("./Components/Authentication/Login"));
const Register = lazy(() => import("./Components/Authentication/Register"));
const AppCartPage = lazy(() => import("./Components/Cart/AppCartPage"));
const PageNotFound = lazy(() => import("./Components/common/PageNotFound"));
const AppShopPage = lazy(() => import("./Components/Shop/AppShopPage"));
const SingleProductPage = lazy(() =>
  import("./Components/SingleProductPage/SingleProductPage")
);
const AppHome = lazy(() => import("./Components/Home/AppHome"));
const AppLoading = lazy(() => import("./Components/common/AppLoading"));

function App() {
  const [cart, setCart] = useState([]);

  // init Alert
  const Alert = withReactContent(Swal);
  // init history object
  const history = useHistory();

  /**
   * 
   * @param {Object} product poruct selected to add to cart
   */
  const addToCart = (product) => {
    const result = [...cart, { ...product }];
    setCart(result);
    toast.success("Product successfully added to cart", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  /**
   * 
   * @param {Object} productToRemove Product which user want to remove 
   */
  const removeProduct = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
    toast.success("Product successfully removed from cart", {
      position: "bottom-right",
      autoClose: 3000,
      theme: "colored",
    });
  };

  const purchesProduct = async () => {
    const { isConfirmed } = await Alert.fire({
      icon: "info",
      title: "Are you sure?",
      text: "Finish pruches",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      cancelButtonColor: "red",
      confirmButtonColor: "green",
    });
    if (isConfirmed) {
      setCart([]);
      history.replace("/");
      Alert.fire({
        icon: "success",
        title: "Payment was successful",
      });
    }
  };

  return (
    <Suspense
      fallback={
        <div>
          <AppLoading />
        </div>
      }
    >
      <Fragment>
        <MailLayouts productLength={cart.length}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <AppHome addToCart={(product) => addToCart(product)} />
              )}
            />
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
                  purchesProduct={purchesProduct}
                />
              )}
            />
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/product/:productId" render={() => <SingleProductPage addToCart={addToCart} />} />
            <Route component={PageNotFound} />
          </Switch>
        </MailLayouts>
        <ToastContainer />
      </Fragment>
    </Suspense>
  );
}

export default App;
