import React,{ useState, useEffect} from 'react'



const Counter = ({initial, stock, onAdd}) => {
    const [cuenta, setCuenta] = useState(initial);
return (
    <div >  
        <button disabled={cuenta <=0}onClick={ () =>setCuenta (cuenta - 1)} className="btn bg-gray-400"><h2 className='text-black'>-</h2> </button>
            <span className='text-lg p-4'>{cuenta}</span>
                <button  disabled={cuenta >= stock}onClick={ () =>setCuenta (cuenta + 1)} className="btn bg-gray-400 p-4"> <h2 className='text-black'>+</h2> </button>
        <label htmlFor="my-modal" disabled={cuenta == 0} onClick={() => onAdd(cuenta)}  className="btn m-4 bg-gray-400"><h2 className='text-black'>Añadir al carrito</h2></label>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal ">
                <div className="modal-box bg-violet-100">
                <h2 className="text-3xl text-center">El producto se agregó al carrito!</h2>
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn bg-gray-400">Seguir comprando</label>
                </div>
                </div>
                </div>
                </div>
            )
            }

export default Counter