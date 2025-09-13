// import { NavLink, useParams } from "react-router-dom"
// import "./ProductDetails.css"
// import { useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../Redux/counterSlice";

// import { addToCart, removeFromCart } from "../Redux/cartSlice"




// function ProductDetails() {
//     const count = useSelector((state) => state.counter.count);
//     const dispatch = useDispatch();


//     const { id } = useParams()
//     // console.log(id);

//     let [myData, setMyData] = useState({})

//     const items = useSelector((item) => item.cart.items)
//     const currentItem = items.find((item) => item.id === parseInt(id))

//     async function getData() {
//         const data = await fetch(`https://fakestoreapi.com/products/${id}`)
//         const apiData = await data.json()
//         setMyData(apiData)
//     }
//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <>
//             <div className="details">
//                 <h2>Product details page</h2>
//                 <div className="details_card">
//                     <div className="img">
//                         <img src={myData.image} alt={myData.image} />
//                     </div>
//                     <div className="text">
//                         <h2>{myData.title}</h2>
//                         <h3>price: {myData.price}$</h3>
//                         <p>{myData.description}</p>
//                     </div>
//                     <div className="btn">
//                         <NavLink ><button onClick={() => dispatch(addToCart(myData))}>add to card</button></NavLink>
                        
//                         {currentItem && <button onClick={() => dispatch(removeFromCart(myData.id))}>remove from card</button>}
//                         <p>Quantity in cart:{" "}
//                             {currentItem ? currentItem.quantity : 0}</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProductDetails



import { NavLink, useParams } from "react-router-dom"
import style from "./ProductDetails.module.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../Redux/cartSlice"

function ProductDetails() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [myData, setMyData] = useState({})
  const items = useSelector((state) => state.cart.items)
  const currentItem = items.find((item) => item.id === parseInt(id))

  async function getData() {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const apiData = await data.json()
    setMyData(apiData)
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <div className={style.details}>
      <h2 className={style.pageTitle}>Product Details</h2>
      <div className={style.detailsCard}>
        
        {/* Product Image */}
        <div className={style.imgWrapper}>
          <img src={myData.image} alt={myData.title} />
        </div>

        {/* Product Info */}
        <div className={style.info}>
          <h2 className={style.title}>{myData.title}</h2>
          <h3 className={style.price}>${myData.price}</h3>
          <p className={style.description}>{myData.description}</p>

          {/* Buttons */}
          <div className={style.actions}>
            <button 
              className={style.addBtn} 
              onClick={() => dispatch(addToCart(myData))}
            >
              Add to Cart
            </button>

            {currentItem && (
              <button 
                className={style.removeBtn} 
                onClick={() => dispatch(removeFromCart(myData.id))}
              >
                Remove from Cart
              </button>
            )}
          </div>

          {/* Quantity */}
          <p className={style.quantity}>
            Quantity in cart: {currentItem ? currentItem.quantity : 0}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
