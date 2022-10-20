import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name,price,ratings,img,shipping}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h5 className='name'>{name}</h5>
            <p className='price'>Price:${price}</p>
            <p>Shipping:${shipping}</p>
            <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={()=>props.handlebtn(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;