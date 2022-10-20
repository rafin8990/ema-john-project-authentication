import React from 'react';
import './ReviewItem.css'
import {ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product, handleRemoveItem}) => {
    const {name, price,quantity,img,shipping,id}=product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-ccontainer">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>price:${price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                    <p><small>Shipping:${shipping}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveItem(id)}><ArchiveBoxXMarkIcon className="delete-icon"/></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;