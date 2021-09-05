import React from 'react';
import {Segment,Header,Statistic} from 'semantic-ui-react'

const SingleProductDetails = ({price,category,description}) => {
    return (
        <div>
            <Segment textAlign='left'>
                <Header content={`Category: ${category}`} size={'medium'} />
                <Header content={description} size='small' textAlign='left' />
                <Statistic content={price} label='Price' color='violet' />
            </Segment>
        </div>
    );
};

export default SingleProductDetails;