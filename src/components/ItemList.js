import React from 'react'
import {useState, useEffect,} from 'react'
import { products } from './ProductStock'
import { Item } from './Item'
import { useParams } from 'react-router-dom'
import { getProducts } from './ProductStock'




//AL CLICKEAR EN VER PRODUCTO DE ITEMLISTCONTAINER NOS TRAE ACA Y MUESTRA ESTE COMPONENTE
//ESTE COMPONENTE TRAE EL ID DEL PRODUCTO PARA IDENTIFICARLO Y MUESTRA A <ITEM/>
    export const ItemList = () => {
            const [showProducts, setShowProducts] = useState();
            const productId = useParams().id;
           
            // const {categoryId} = useParams();


            //ESTA FUNCION ES PARA QUE USE LOS PARAMETROS QUE LE INDIcAMOS MAS ABAJO AL DEFINIR CATEGORYID
            
        
            useEffect(() => {
            //ESPERA 2 SEGUNDOS PARA VER SI SETSHOWPRODUCTS ES VERDADERO, SI ES TRUE LOS CARGA PASADO EL TIEMPO
            setTimeout(() => setShowProducts(true), 2000);
            
            }, []);
        
            // USA EL ID DEL PRODUCTO PARA TRAER EL PRODUCTO ESPECIFICO
            const product = products.find(( product) => product.id == productId);
            
            //ESTO DEBERIA TRAER LA CATEOGRIA 
            // const productsInCategory = products.filter((product) => product.category == categoryId)
            
        
            // SI SHOWPRODUCTS ES FALSO NO RETORNA NADA
            if (!showProducts) return null;


        // USA EL ID DEL PRODUCTO PARA TRAER EL PRODUCTO ESPECIFICO
            return (
            <div>
                <Item product={product} />
            </div>
            );
        };
        
       