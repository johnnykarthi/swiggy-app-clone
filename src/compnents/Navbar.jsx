

import '../App.css';
import { Link, Outlet } from 'react-router-dom';



export default function Navbar({orderValue}) {


    return (
        
        <>
        <div className="nav">
            <div className="logo-box">
                <Link to='/'>
                <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
                    alt=""
                    class="logo"
                    width="100px"
                />
                </Link>
                
                <p className="loco">
                    <span className="others">Others</span>
                    <span className="location">Chennai,Tamil Nadu 600096,India</span>
                    <i className="bi bi-chevron-down"></i>
                </p>
            </div>
            <div className="list">
                <div className="hover-item">
                    <i className="bi bi-search"></i>
                    Search
                </div>
                <div className="hover-item">
                    <i className="bi bi-percent"></i>
                    Offers
                </div>
                <div className="hover-item">
                    <i className="bi bi-question-diamond"></i>
                    Help
                </div>
                <div className="hover-item">
                    <i className="bi bi-box-arrow-in-right"></i>
                    Sign In
                </div>
                <Link to='cart'>
                <div className="cart">       
                    <i className="bi bi-cart"></i>
                    Cart <span className='cartValue'>{orderValue}</span>
                </div>
                </Link>
            </div>
        </div>
        <Outlet/>
        </>
    )
}
