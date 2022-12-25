import React, { useState, useEffect } from 'react'
import { products } from "./ProductStock";
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import { ItemDetail } from './ItemList';
import { Link } from 'react-router-dom';
import { getProducts } from './ProductStock';


// AL CLICKEAR EN VER PRODUCTO DE ITEMLISTCONTAINER NOS TRAE ACA Y MUESTRA ESTE COMPONENTE
// ESTE COMPONENTE MUESTRA A ITEMDETAIL

// const ItemDetailContainer = ()=> {
//     return (
//         <div>
//             <ItemDetail products={products}  />
//         </div>
//         );
//     };


// export default ItemDetailContainer