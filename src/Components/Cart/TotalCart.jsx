import React from 'react';
import {Segment} from 'semantic-ui-react'
import useTotalProduct from "../customHooks/useTotalProduct";


const TotalCart = ({totalProduct}) => {

    const {total} = useTotalProduct(totalProduct)

    return (
        <div>
            <Segment placeholder>
                <h1>{total}</h1>
            </Segment>
        </div>
    );
};

export default TotalCart;