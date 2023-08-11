import React from 'react'
import './FoodCart.css'

import FoodCartItemLayout from './FoodCartItemLayout';
export default function FoodCart({ cartItems,total,increaseQuantity,decreaseQuantity}) {

    function getItems(item){
        increaseQuantity(item);
    }

    function getItems2(item){
        decreaseQuantity(item)
    }

    let content = <FoodCartItemLayout total={total} cartItems={cartItems} getItem={getItems} getItem2={getItems2} />
    if(cartItems.length <= 0)
    {
        content = "Cart is Empty"
    }
    return (
        <div className="cart-box">
           {content}
        </div>
    )
}
