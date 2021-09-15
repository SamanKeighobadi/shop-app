//? React Semantic UI Components
import { Menu, Input, Icon, Label, Popup } from "semantic-ui-react";
//?Import React Router
import { Link } from "react-router-dom";

const AppHeader = ({ productLength }) => {
  return (
    <div>
      <Menu stackable>
        <Link to="/">
          <Menu.Item name="home" content="Home" />
        </Link>

        <Link to="/shop">
          <Menu.Item name="shop" content="Shop" />
        </Link>

        <Link to="/register">
          <Menu.Item name="register" content="Register" />
        </Link>

        <Link to="/login">
          <Menu.Item name="login" content="Login" />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <Link to="/cart">
            <Menu.Item name="cart">
              <Popup
                content="Cart page"
                trigger={<Icon color="violet" name="shopping cart" />}
              />
              <Label size="mini" icon="shopping cart" circular color="red">
                {productLength}
              </Label>
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default AppHeader;
