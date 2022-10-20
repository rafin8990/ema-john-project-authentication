import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const clearCart=()=>{
        setCart([]);
        deleteShoppingCart();
    }
    const products=useLoaderData()
    // console.log(products.products) 
    const [cart, setCart]=useState([])

    // বুঝি নাই 
    useEffect(()=>{
        const storedCart=getStoredCart()
        // console.log(storedCart)
        const savedCart=[]
        for(const id in storedCart){
            const addedProduct=products.products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
            // console.log(addedProduct)
        }
        setCart(savedCart)
    },[products.products])
    
    // বুঝি নাই 
    const addToClicked=(selectedProduct)=>{
        const exists=cart.find(product=> product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
         const  newCart=[...cart, selectedProduct]
         setCart(newCart)
        }
        else{
            const rest=cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity=exists.quantity+1;
          const newCart=[...rest, exists];
          setCart(newCart)
        }
        // const newCart=[...cart, selectedProduct]
        
        addToDb(selectedProduct.id)
    }
    return (
        <div className='Shop-Container'>
            <div className="product-container">
                 {
                    products.products.map(product=><Product
                    key={product.id}
                    product={product}
                    handlebtn={addToClicked}
                    ></Product>)
                 }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} carts={cart}>
                    <Link to='/order'>Review Order</Link>
                </Cart>
                

            </div>
        </div>
    );
};

export default Shop;