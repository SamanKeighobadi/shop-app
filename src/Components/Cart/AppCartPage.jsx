import React from 'react';
import {Grid} from 'semantic-ui-react'
import TotalCart from './TotalCart'
import AppCards from './AppCards';

const AppCartPage = ({productsInCart,removeProduct}) => {
   
    

    return (
        <div>
            <Grid >
                <Grid.Row >
                    <Grid.Column>
                        <AppCards products={productsInCart} removeProduct={removeProduct} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <TotalCart
                         />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default AppCartPage;