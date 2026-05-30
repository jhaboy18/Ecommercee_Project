import React, { useEffect, useState } from "react";
import Datacontext from "./DataContext";
import { items } from "./data";
import { ToastContainer, toast,Bounce } from 'react-toastify';

const Datastate = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);

  const addTocart=(id,title,price,imgsrc)=>{
    const obj={
      id,title,price,imgsrc
    }
    toast.success('Item added To cart', {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    setCart([...Cart,obj])
  }
console.log(Products)
  useEffect(() => {
    setProducts(items);
  }, []); //

  return (
    <Datacontext.Provider value={{ Cart, setCart, Products, setProducts,addTocart }}>
      {children}
    </Datacontext.Provider>
  );
};

export default Datastate;
