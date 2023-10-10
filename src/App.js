import React, { createContext, useEffect, useState } from 'react'

import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Navbar from './compnents/Navbar'
import MainContainer from './compnents/MainContainer'
import FoodCart from './compnents/FoodCart'

export const AppContext = createContext({});
export default function App() {

  const items = [{
    id: 1,
    img: 'https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?w=1060&t=st=1691143650~exp=1691144250~hmac=226adcfb7547a0974b29a2f0b68a8f8eec0f91e990237c9b4dff5b5de7d39fd2',
    dishName: "Hydrabed Briyani",
    region: "South indian",
    rating: 4.4,
    deliveryTime: 30,
    price: 400
  },
  {
    id: 2,
    img: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1060&t=st=1691143233~exp=1691143833~hmac=d3c34f3d42f60d2040d3c671cf4f089881fd34d0433e693cc5bf299d7ced6998',
    dishName: "Red Pasta",
    region: "North indian",
    rating: 4.1,
    deliveryTime: 20,
    price: 100
  },
  {
    id: 3,
    img: 'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=1060&t=st=1691143455~exp=1691144055~hmac=7a4614ff085e7a3a377c62dc17f2fdbabdae4fcb5deb5ae59e65b225a040bde8',
    dishName: "Sambar Rice",
    region: "South indian",
    rating: 4.4,
    deliveryTime: 45,
    price: 300
  },
  {
    id: 4,
    img: 'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1060&t=st=1691143528~exp=1691144128~hmac=31e6a928b7aad2fd1c2ae8fefd3e8e431b57f279d63237baad7fcda72b7b419c',
    dishName: "Chicken skewers",
    region: "Mexican",
    rating: 4.6,
    deliveryTime: 25,
    price: 399
  },
  {
    id: 5,
    img: 'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1380&t=st=1691143712~exp=1691144312~hmac=514d8d9d680b4e429c5da235cb1b96824c97f376032427cf5bf1352c4320a18c',
    dishName: "Veg Noodles",
    region: "Chinese",
    rating: 4.4,
    deliveryTime: 45,
    price: 499
  },
  {
    id: 6,
    img: 'https://img.freepik.com/free-photo/club-sandwich-with-side-french-fries_140725-1744.jpg?w=1060&t=st=1691143933~exp=1691144533~hmac=3332219fe8b2d3e756dec655ef5e781507e42c9255cdb7fa136d7fe9c004bac9',
    dishName: "Veg Sandwich",
    region: "Chinese",
    rating: 4.2,
    deliveryTime: 35,
    price: 199
  },
  {
    id: 7,
    img: 'https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=996&t=st=1691144103~exp=1691144703~hmac=54e482fe59e0b05183e2b7e2ec05e22fb8abe8383b5d8dbb3981b20adf7e77e9',
    dishName: "Ham burger",
    region: "Italian",
    rating: 4.8,
    deliveryTime: 30,
    price: 350
  },
  {
    id: 8,
    img: 'https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?w=1060&t=st=1691144200~exp=1691144800~hmac=5c525f13a91b7fa29a7b559be422fce1e6aff5134e22f9b4d801b009eba4d4c0',
    dishName: "Chicken BBQ",
    region: "South indian",
    rating: 4.4,
    deliveryTime: 40,
    price: 699
  },
  {
    id: 9,
    img: 'https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?w=1060&t=st=1691144469~exp=1691145069~hmac=eeaf8268286996a9b28fcd42bed09f5bb4b17f60d4211aa4fcef832203dd2455',
    dishName: "Pepper Chicken Gravy",
    region: "South indian",
    rating: 4.9,
    deliveryTime: 50,
    price: 499
  },
  {
    id: 10,
    img: 'https://img.freepik.com/free-photo/fresh-salad-with-vegetables-tomatoes-red-onions-lettuce-quail-eggs-healthy-food-diet-concept-vegetarian-food_2829-20246.jpg?w=1060&t=st=1691144595~exp=1691145195~hmac=7441ea97c18b9d82c445f4d91fbffd4f701c2f8069a01f8096d40eca5e62d3c7',
    dishName: "Veg Salad",
    region: "Italian",
    rating: 4.2,
    deliveryTime: 20,
    price: 199
  }
  ]

  const cartItems = [
    {
      id:10,
      dishName: "Veg Salad",
      price: 199,
      quantity:1
    },
    {
      id:9,
      dishName: "Pepper Chicken Gravy",
      price: 499,
      quantity:2
    }
  ]
  const [demoCart,setDemoCart] = useState(cartItems);

  const [orderValue,setOrderValue] = useState(demoCart.length);

  const [total,setTotal] = useState(0);


  const getItems = (item)=>{

    if(demoCart.find((items)=>{
      return items.id === item.id;
    })){

      let objIndex = demoCart.findIndex((items)=>(items.id === item.id))
      demoCart[objIndex].quantity +=1;
      updateTotal();
    }
    else{
      setDemoCart([...demoCart,item])
      setOrderValue(demoCart.length+1);
    }

    
    
  }

  useEffect(()=>{
    updateTotal();
  },[demoCart])

  function increaseQuantity(item){
    let objIndex = demoCart.findIndex((items)=>(items.id == item.id))
    demoCart[objIndex].quantity +=1;
    updateTotal();
  }

  function decreaseQuantity(item){
    let objIndex = demoCart.findIndex((items)=>(items.id == item.id))
    demoCart[objIndex].quantity -=1;
    if(demoCart[objIndex].quantity<=0)
    {
      setDemoCart( demoCart.filter((items)=>{
        return items.id !== item.id;
      }));
      setOrderValue(demoCart.length-1);
    }
    updateTotal();
    
  }

  function updateTotal()
  {
      let sum=0;
      for(let i =0;i<demoCart.length;i++)
      {
        sum+=(demoCart[i].price * demoCart[i].quantity)
      }
      setTotal(sum);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/swiggy-app-clone' element={<Navbar orderValue= {orderValue} />}>
        <Route index element={<MainContainer items={items} getItems={getItems}/>}/>
        <Route path='cart' element={<FoodCart total={total} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} cartItems={demoCart}/>}/>
      </Route>
    )
  )
    

  return (
    <>
         <RouterProvider router={router}/>
    </>
  )
}

