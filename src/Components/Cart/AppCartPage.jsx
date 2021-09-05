import React from 'react';
import {Card,Grid} from 'semantic-ui-react'
import AppCards from './AppCards';

const AppCartPage = ({productsInCart,removeProduct}) => {
   
    

    return (
        <div>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <AppCards products={productsInCart} removeProduct={removeProduct} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default AppCartPage;