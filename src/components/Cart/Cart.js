import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {carts, clearCart, children}=props
    // console.log(carts)
    let price=0;
    let shipping=0;
    let quantity=0;

   for(const cart of carts){
    quantity=quantity+cart.quantity
    price = price + cart.price * cart.quantity;
    shipping=shipping+ cart.shipping
   }
   const tax=(price * 0.1).toFixed(2)
   const numberTax=parseFloat(tax)
   const grandTotal=price+shipping+numberTax
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items:{quantity}</p>
            <p>Total Price:${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>10% Tax: ${tax}</p>
            <h4>Grand Total:${grandTotal}</h4>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;