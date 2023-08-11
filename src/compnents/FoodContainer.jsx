import React from 'react'

export default function FoodContainer({changeOrderValue3,items,getItemstoApp}) {

    const addtoCart = ()=>{
        const temp = {
            id:items.id,
            dishName:items.dishName,
            price:items.price,
            quantity:1
        }
        getItemstoApp(temp);
    }
    return (
        <>
            <div className="col-md-3">
                <div className="food-card">
                    <img
                        className="food-img"
                        src={items.img}
                        alt=""
                        width="100%"
                    />
                    <p className="res-name">{items.dishName}</p>
                    <p className="dish-cat">{items.region}</p>
                    <div className="con">
                        <div className="rating">
                            <i className="bi bi-star-fill"></i> <span class="rate"> {items.rating}</span>
                        </div>
                        .
                        <p>{items.deliveryTime} MIN</p>
                        .
                        <p>₹ {items.price} FOR TWO</p>
                    </div>
                    <hr />
                    <h6 className='text-center' onClick={addtoCart}>Add to Cart</h6>
                </div>
            </div>
        </>
    )
}
