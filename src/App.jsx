import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes , Route,  } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import {  ItemList } from './components/ItemList';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/cartContext';
import { initializeApp } from "firebase/app";
import CheckOut from './components/CheckOut';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);








export const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/> 
    <Route path='/products/:id' element={<ItemList/>}/> 
    <Route path='/products/cart' element={<Cart/>}/>
    <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
    <Route path='/products/cart/checkout' element={<CheckOut/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    
  )
}




export default App;
