import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='price'>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-button'>Add to Cart</button>
        </div>
    );
};

export default Product;