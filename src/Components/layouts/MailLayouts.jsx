import {useState} from 'react';
import {Menu} from "semantic-ui-react"

const MailLayouts = () => {

    const [active,setActive] = useState(false)

    const handleClick = (e,name) => {
        setActive(preState => !preState)
    }

    return (
        <div>
            <Menu>
                <Menu.Item
                active={active}
                onClick={handleClick}
                >
                    home
                </Menu.Item>

                <Menu.Item
                active={active}
                onClick={handleClick}
                >
                    home
                </Menu.Item>

                <Menu.Item
                active={active}
                onClick={handleClick}
                >
                    home
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default MailLayouts;