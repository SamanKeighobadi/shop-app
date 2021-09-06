import React from 'react';
//? React semantic UI Component
import {Header,Grid} from 'semantic-ui-react'

const EmptyCart = () => {
    return (
        <div>
            <Grid textAlign='center' style={{marginTop:'4rem'}}>
                <Grid.Column verticalAlign='middle'>
                    <Header content='Your Cart is Empty' color='red' size='huge'   />
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default EmptyCart;