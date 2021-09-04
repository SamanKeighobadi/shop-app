import React from 'react';
import {Dropdown} from 'semantic-ui-react'

const AppDropdonw = () => {
    return (
        <div>
            <Dropdown text="Dropdown" >
                <Dropdown.Item text="Item1" icon="archive" />
                <Dropdown.Item text="Item1" icon="book" />
                <Dropdown.Item text="Item1" icon="tags" />
                <Dropdown.Item text="Item1" icon="shipping fast" />
            </Dropdown>
        </div>
    );
};

export default AppDropdonw;