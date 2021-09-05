import React from 'react';
import {Segment,Header} from 'semantic-ui-react'
import useTotalProduct from "../customHooks/useTotalProduct";


const TotalCart = ({totalProduct}) => {

    const {total} = useTotalProduct(totalProduct)

    return (
        <div>
            <Segment >
                <Header content={` Total Price: ${total}`} icon='dollar'  />
            </Segment>
        </div>
    );
};

export default TotalCart;