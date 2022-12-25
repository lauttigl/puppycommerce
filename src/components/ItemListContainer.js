import React, {useState , useEffect}from 'react'
import { BrowseRouter, Routes, Route, useParams } from 'react-router-dom';
import { products } from './ProductStock';
import Cat from './Cat';
import { Link } from 'react-router-dom';


    

    //ESTE SERIA EL CATALOGO (HOME) MUESTRA TODOS LOS PRODUCTOS
    const ItemListContainer = () => {
        const {idCategory} = useParams();
        const [productList, seTProductList] = useState();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
        idCategory === undefined ?
                        seTProductList(products)
                        :
                        seTProductList(products.filter((product) => product.category == idCategory))
                        setTimeout(() => {
                            setLoading(false)
                        }, 3000);
        }, [idCategory])
        
        return( loading ? <>Cargando...</>:
            <div className="bg-white">
                    <Cat/>
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    
                    <h2 className="sr-only">Products</h2>
                    
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {productList.map((product) => (
                        <div key={product.id} href={product.href} className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                            </div>
                            <h3 className= "mt-1 text-lg font-medium text-gray-900">{product.name}</h3>
                            <p className="mt-4 text-lg text-gray-700">{product.price} 
                            </p>
                            <Link to={`/products/${product.id}`}>
                            <button className="btn btn-active" >Ver producto</button>
                            </Link>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
)}
export default ItemListContainer