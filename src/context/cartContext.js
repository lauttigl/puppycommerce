import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const CartContext = React.createContext({
    items: [],
    addToCart : () => {},
    clearCart : () => {}
})


const useCart = () => {
    return useContext(CartContext)
}


const CartContextProvider = ({children}) => {
    
    const [items, setItems] = useState([]);


    const addToCart = ( item ) => { 
        setItems( items => items.concat(item) )
    }

    const inCart = (id) => items.find(product => product.id == id) ? true : false;

    const removeItem = (id) => setItems(setItems.filter(product => product.id !==id));

    const clearCart = () => { 
        setItems( [] )
    }

    const context = {
        items: items,
        addToCart : addToCart,
        clearCart : clearCart,
        inCart : inCart,
        removeItem : removeItem,
    }



    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
    }

export { CartContextProvider, useCart}

