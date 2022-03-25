import React from 'react';
import './Product.css'


const Product = ({ item, addToCarriage }) => {
    const { image, category, title, price, rating, id } = item;

    return (
        <div className='card-container'>

            <img src={image} alt="" />
            <div className='product-info'>
                <p>Title:{title}</p>
                <p>Category:{category}</p>
                <p>Price:{price}</p>
                <p>Rating:{rating.rate}</p>
            </div>
            <button className='btn-btn' onClick={() => addToCarriage(id)} >
                <p>Add to Carriage</p>
            </button>
        </div>
    );
};

export default Product;