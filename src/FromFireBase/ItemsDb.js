import React from 'react'
import {getFirestore, doc, getDoc, collection, getDocs,} from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ItemsDb = () => {

    //SE DEFINE EL ESTADO
  const [itemData, setItemData] = useState([])



  //SE MONTA AL INICIAR EL COMPONENTE
useEffect(() => {
  getItems()
}, [])

//CUANDO SE MONTA EL COMPONENTE CON EL USEFFECT TRAIGO ESTA FUNCION QUE CONTIENE LA COLECCION DE ITEMS
const getItems = async () => {  
const dataBase= getFirestore()
const collectionRef = collection (dataBase, 'items')
const snapshot = await getDocs(collectionRef)
setItemData(snapshot.docs.map(d => ({id:d.id, ...d.data()  } )))

}



  return (
    
      <>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {itemData.map( product => <div key={product.id} className="group"> 
      <h3 className= "mt-1 text-lg font-medium text-gray-900">{product.name}</h3>
      <p className="mt-4 text-lg text-gray-700">Precio: ${product.price} </p>
      <p className="mt-4 text-lg text-gray-700">Stock: {product.stock} </p>
                      <Link to={`/masvendidos/${product.id}`}>
                    <button className="btn btn-active" >Ver producto</button>
                    </Link>
      </div> )}
      </div>
      </>
      
  )
}

export default ItemsDb