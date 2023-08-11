import React from 'react'
import FoodCartItem from './FoodCartItem'

export default function FoodCartItemLayout({cartItems,getItem2,getItem,total}) {
    function getItems2(item){
        getItem2(item);
    }

    function getItems(item){
        getItem(item);
    }

  return (
    <>
     {cartItems.map((item) => {
                return (
                    <FoodCartItem item={item} getItem2={getItems2} getItem={getItems}/>
                )
            })}
            <div class="calc">
                <h5>Total Amount</h5>
                <h5>₹ {total}</h5>
            </div>
            <div class="d-flex float-end">
                <button class="btn-style-2">Close</button>
                <button class="btn-style-1">Order</button>
            </div>
    </>
  )
}
