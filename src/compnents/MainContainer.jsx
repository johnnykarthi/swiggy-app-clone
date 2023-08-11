import React from 'react'
import '../App.css';
import FoodContainer from './FoodContainer';


export default function MainContainer({items,changeOrderValue,getItems,deliveryTimeSort,priceHightoLow,priceLowtoHigh}) {

    const changeOrderValue3 = ()=>{
        changeOrderValue();
    }

    const getItemstoApp = (item)=>{
        getItems(item);
    }
    return (
        <div className="container">
             <div className="stkicy">
            <div className="header">
                <div className="restaurant" >234 Restaurant</div>
                <div>
                    <div className="filters">
                        <p className="filters-item">Relevance</p>
                        <p className="filters-item" onClick={deliveryTimeSort}>Delivery Time</p>
                        <p className="filters-item" onClick={priceLowtoHigh}>Cost: Low To High</p>
                        <p className="filters-item" onClick={priceHightoLow}>Cost: High To Low</p>
                        <p className="filters-item">
                            Filters <i className="bi bi-filter-circle"></i>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
            <div className="row">
                {items.map((items)=>{
                    return (
                        <FoodContainer key={items.id} items={items} changeOrderValue3={changeOrderValue3} getItemstoApp={getItemstoApp}/>
                    )
                })}
            </div>
        </div>
    )
}
