import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanProduct, getSelectedProduct } from '../actions/ProductActions';
import ProductDetail from '../components/products/ProductDetail';
import ProductItemLoading from '../components/products/ProductItemLoading';

const DetailPage = ({ match }) => {

    const {params: { id }} = match;
    const {loadingProduct, productData, productDescription} = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();
    
    React.useEffect(() => {    
        
        dispatch(getSelectedProduct(id));

        return () => {
            dispatch(cleanProduct());
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if(loadingProduct) return <ProductItemLoading />

    return (
        <ProductDetail productData={productData} productDescription={productDescription}/>
    )
}

export default DetailPage;
