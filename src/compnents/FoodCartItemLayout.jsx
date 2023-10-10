import React from 'react'
import FoodCartItem from './FoodCartItem'
import { Link } from 'react-router-dom';

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
                <Link to='/swiggy-app-clone'>
                <div className='d-flex justify-content-center align-items-center'>
                <a href='/swiggy-app-clone' class="btn-style-2"><div>Close</div></a>
                </div></Link>
                <button class="btn-style-1">Order</button>
            </div>
    </>
  )
}
