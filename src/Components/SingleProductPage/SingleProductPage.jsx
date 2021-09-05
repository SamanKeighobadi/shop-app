import React from 'react';
import {useParams} from 'react-router-dom'
import useProducts from '../customHooks/useProducts'
import Loading from '../common/AppLoading'

const SingleProductPage = () => {

    const {productId} = useParams()

    const {data:product,loading} = useProducts(`https://fakestoreapi.com/products/${productId}`)

    return (
        <div>
        {loading? (<Loading />):(
            <div>
                {product.title}
            </div>
        )}
        </div>
    );
};

export default SingleProductPage;