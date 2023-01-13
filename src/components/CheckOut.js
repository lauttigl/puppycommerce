import React from 'react'
import { useCart } from '../context/cartContext';
import {getFirestore, doc, getDoc, collection, getDocs, addDoc,} from 'firebase/firestore'
import { useState } from 'react';


const CheckOut = () => {
  const { items, calculateTotal } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [phone, setPhone] = useState('');
  const [orderId, setOrderId] = useState('');
  const total = calculateTotal();

  const makeOrder = () => {
    const user = { name, phone, email };
    const order = {
      buyer: user,
      items: items,
    };
    console.log('levantando orden', order);
    saveOrder(order);
  };

  const saveOrder = async (order) => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    const { id } = await addDoc(orderCollection, order);
    console.log('nueva orden de compra', id);
    setOrderId(id)
  };

  return (
    <>
      <h1 className='text-center'>
        Vas a pagar: ${total}. Para continuar, completa el formulario. Luego de realizar la compra se te dará un código de
        comprobante.
      </h1>
      <form className="p-4 border-gray-300 items-center">
        <label htmlFor="nombre" className=" block font-bold mb-2 ">
          Nombre y Apellido:
        </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email" className="block font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="email2" className="block font-bold mb-2">
          Confirmar email:
        </label>
        <input
          type="email"
          name="email2"
          id="email2"
          className="border p-2"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
        />
        <br />
        <label htmlFor="telefono" className="block font-bold mb-2">
          Teléfono:
        </label>
        <input
          type="tel"
          name="telefono"
          id="telefono"
          className="border p-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
<label htmlFor="my-modal-6" className="btn" onClick={makeOrder} disabled={name.length == 0}>Comprar!</label>
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Compra realizada con éxito! Gracias por elegirnos.</h3>
    <p className="py-4">El código de comprobante de tu compra es: {orderId}. No lo pierdas!.  </p>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">OK</label>
    </div>
  </div>
</div>
      </form>
    </>
  );
};
export default CheckOut;

