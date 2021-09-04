import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Icon, Label } from "semantic-ui-react";

const AppHeader = ({productLength}) => {
  const [activeItem, setActive] = useState(false);

  const handleClick = (e, name) => {
    setActive((preState) => ({ activeItem: name }));
  };

  return (
    <div>
      <Menu  stackable>
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

        <Link to="/auth">
          <Menu.Item
            name="auth"
            active={activeItem === "auth"}
            content="Register/Login"
            onClick={handleClick}
          />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <Link to="/cart">
            <Menu.Item name="cart" onClick={handleClick}>
              <Icon color="violet" name="shopping cart" />
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
