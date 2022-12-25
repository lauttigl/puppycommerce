import React from 'react'
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Footer from './components/Footer';
import { BrowserRouter, Routes , Route,  } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemDetail, ItemList } from './components/ItemList';
import { Item } from './components/Item';
import { Cart } from './components/Cart';








export const App = () => {
  return (
    
      <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/> 
    <Route path='/products/:id' element={<ItemList/>}/> 
    <Route path='/products/cart' element={<Cart/>}/>
    <Route path='/category/:idCategory' element={<ItemListContainer />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  )
}




export default App;
