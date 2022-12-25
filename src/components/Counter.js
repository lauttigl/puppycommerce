import React,{ useState, useEffect} from 'react'
import { Item } from './Item';


const Counter = ({initial, stock, onAdd}) => {
    const [cuenta, setCuenta] = useState(initial);
return (
    <div>  
    <button disabled={cuenta <=0}onClick={ () =>setCuenta (cuenta - 1)} className="btn"> - </button>
    <span className='text-lg'>{cuenta}</span>
    <button  disabled={cuenta >= stock}onClick={ () =>setCuenta (cuenta + 1)} className="btn btn-active"> + </button>
    
    </div>
)
}

export default Counter