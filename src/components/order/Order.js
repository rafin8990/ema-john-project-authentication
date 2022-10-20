import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const {initialCart}=useLoaderData()
    const [cart,setCart]=useState(initialCart);
    const handleRemoveItem=(id)=>{
        const remaining=cart.filter(product=>product.id!==id);
        setCart(remaining);
        removeFromDb(id)
    }
    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    
    return (
        <div>
           <div className='Shop-Container'>
            <div className="orders-container">
                 {
                    cart.map(product=><ReviewItem
                    key={product.id}
                    product={product}
                handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                 }
                 {
                    cart.length===0 && <p>No items for review</p>
                 }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} carts={cart}>
                    <Link to='/shipping'>
                        Procced Shipping
                    </Link>
                </Cart>
                

            </div>
        </div>
        </div>
    );
};

export default Order;