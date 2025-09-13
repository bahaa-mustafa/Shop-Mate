import { useParams } from "react-router-dom"
import "./About.css"
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Redux/cartSlice";
import { Trash2 } from 'lucide-react';
import { useState } from "react";


function About() {
  const { id } = useParams()
  console.log(id);

  const items = useSelector((item) => item.cart.items)
  // console.log(items);
  const dispatch = useDispatch()
  // let [totalPrice, setTotalPrice] = useState(0)

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = items.reduce((acc, item)=> acc + item.quantity, 0);

  return (
    <>
      {(items.length === 0) ? <div className="about"><h2>Cart is empty</h2></div> : <div className="carts">
        <div className="total">
          <p>Total items: {totalQuantity}</p>
          <p>Total price: ${totalPrice.toFixed(2)}</p>
          </div>
        {items.map((item) => (<div className="cart" key={item.id}>
          <div className="img"> <img src={item.image} alt={item.image} /></div>
          <div className="text">
            <h2>{item.title}</h2>
            <h3>${item.price}</h3>
          </div>
          <div className="actions">
            <button className="inc" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <p>{item.quantity}</p>
            <button className="dec" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button className="del" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 /></button>
          </div>
        </div>))}
      </div>}

    </>
  )
}

export default About
