import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Input, Icon } from "semantic-ui-react";

const AppHeader = () => {
  const [activeItem, setActive] = useState(false);

  const handleClick = (e, name) => {
    setActive((preState) => ({ activeItem: name }));
  };

  return (
    <div>
      <Menu>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            content="home"
            onClick={handleClick}
          />
        </Link>

        <Link to="/about">
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            content="About"
            onClick={handleClick}
          />
        </Link>
        <Link to="/saman">
          <Menu.Item
            name="saman"
            active={activeItem === "saman"}
            content="Saman"
            onClick={handleClick}
          />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="cart" content="Cart" onClick={handleClick}>
            <Icon name="shopping cart" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default AppHeader;
