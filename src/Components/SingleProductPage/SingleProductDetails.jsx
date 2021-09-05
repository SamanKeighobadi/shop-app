import React from 'react';
//? React Semantci UI Component
import {Segment,Header,Statistic} from 'semantic-ui-react'

const SingleProductDetails = ({price,category,description}) => {
    return (
        <div>
            <Segment color='violet' textAlign='left'>
                <Header content={`Category: ${category}`} size={'medium'} />
                <Header content={description} size='small' textAlign='left' />
                <Statistic content={price} label='Price' color='violet' />
            </Segment>
        </div>
    );
};

export default SingleProductDetails;