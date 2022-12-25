import React from 'react'
import {  useCart } from '../context/cartContext'





export const Cart = () => {

    const { items, clearCart } = useCart()


    return (
        <>
        <div>Cart</div>
        {items}
        <button className='btn'onClick={clearCart}>Vaciar Carrito</button>
        </>
        
    )
    }
