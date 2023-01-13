import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'


const CartContext = React.createContext({
    items: [],
    addToCart : () => {},
    clearCart : () => {},
    contadorCarrito : () => {},
})


const useCart = () => {
    return useContext(CartContext)
}


const CartContextProvider = ({children}) => {
    
    const [items, setItems] = useState([]);


    const addToCart = ( item ) => { 
        console.log(item)
        const productToAdd = inCart(item.id)

        if(productToAdd) {
            productToAdd.quantity = item.quantity
            setItems([...items])
        } else {
            setItems( items => items.concat(item))
        }
    }
    
    // ESTA CONST BUSCA SI ESTA EL PRODUCTO EN EL CARRITO, SI ESTA SUMA LA CANTIDAD
    const inCart = (id) => items.find(product => product.id == id);

    //ESTA SACA PRODUCTOS DE FORMA INDIVIDUAL DEL CARRITO
    const removeItem = (id) => {
        const newItems = items.filter(product => product.id != id);
        setItems(newItems);
    }


    //ESTA FUNCION CALCULA EL TOTAL A PAGAR
    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.quantity * item.price,0);
        }
        
        const contadorCarrito = () => {
            return items.reduce((total, item) => total + item.quantity, 0);
        }
        

    //ESTA FUNCION VACIA EL CARRITO COMPLETO
    const clearCart = () => { 
        setItems( [] )
    }


    

    const context = {
        items: items,
        addToCart : addToCart,
        clearCart : clearCart,
        inCart : inCart,
        removeItem : removeItem,
        calculateTotal: calculateTotal,
        contadorCarrito : contadorCarrito,
        
    }



    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
    
    }  
export { CartContextProvider, useCart, CartContext}
    
