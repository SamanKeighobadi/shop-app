import { useState } from "react";
//? React Semantic UI Components
import { Menu, Input, Icon, Label, Popup } from "semantic-ui-react";
//?Import React Router
import { Link } from "react-router-dom";

const AppHeader = ({ productLength }) => {
  const [activeItem, setActive] = useState(false);

  const handleClick = (e, name) => {
    setActive((preState) => ({ activeItem: name }));
  };

  return (
    <div>
      <Menu stackable>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            content="Home"
            onClick={handleClick}
          />
        </Link>

        <Link to="/shop">
          <Menu.Item
            name="shop"
            active={activeItem === "shop"}
            content="Shop"
            onClick={handleClick}
          />
        </Link>

        <Link to="/register">
          <Menu.Item
            name="register"
            active={activeItem === "register"}
            content="Register"
            onClick={handleClick}
          />
        </Link>

        <Link to="/login">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            content="Login"
            onClick={handleClick}
          />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <Link to="/cart">
            <Menu.Item name="cart" onClick={handleClick}>
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
