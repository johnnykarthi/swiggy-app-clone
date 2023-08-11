import React from 'react'

export default function FoodCartItem({item,getItem,getItem2}) {
    const getItemOrder = ()=>{
        getItem(item);
    }
    const getItemOrder2 = ()=>{
        getItem2(item);
    }
    return (
        <div className="food-item-container">
            <div className="food-items">
                <div className="item-name">
                    <h5 className="title">{item.dishName}</h5>
                    <div className="">
                        <span>{item.price}</span>
                        <span className="btn-cart text-center px-2">x{item.quantity}</span>
                    </div>
                </div>
                <div className="quantity">
                    <button onClick={getItemOrder2} className="btn-cart">-</button>
                    <button onClick={getItemOrder} className="btn-cart">+</button>
                </div>
            </div>
            <div className="food-bar"></div>
        </div>
    )
}
