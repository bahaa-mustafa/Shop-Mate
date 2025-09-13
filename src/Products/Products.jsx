// import { useEffect, useState } from "react"
// import "./Products.module.css"
// import { NavLink } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
// import { addToCart, increaseQuantity } from "../Redux/cartSlice"

// function Products() {

//   let [myFood, setMyFood] = useState([])

//   const dispatch = useDispatch()
//   const items = useSelector((state)=> state.cart.items)

//   async function getProducts() {
//     const data = await fetch("https://fakestoreapi.com/products")
//     const myData = await data.json()
//     console.log(myData)
//     setMyFood(myData)
//   }


//   useEffect(() => {
//     getProducts()
//   }, [])

//   return (
//     <>
//       <div className="products">
//         <div className="head"><h2>Products page</h2></div>
//         <div className="cards">
//           {myFood.map((ele) => (
//             <div className="card" key={ele.id}>
//               <img src={ele.image} alt={ele.title} />
//               <h3>{ele.title}</h3>
//               <div className="btn">
//                 <button><NavLink to={`/productdetails/${ele.id}`}>read more</NavLink></button>
//                 <button onClick={()=> {
//                   dispatch(addToCart(ele))
//                   // dispatch(increaseQuantity())
//                   console.log(items);                  
//                   }}>Add to cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Products





import { useEffect, useState } from "react"
import style from "./Products.module.css"   // ✅ Import as style
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../Redux/cartSlice"

function Products() {
  let [myFood, setMyFood] = useState([])

  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  async function getProducts() {
    const data = await fetch("https://fakestoreapi.com/products")
    const myData = await data.json()
    console.log(myData)
    setMyFood(myData)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className={style.products}>
      <div className={style.head}>
        <h2>Products page</h2>
      </div>
      <div className={style.cards}>
        {myFood.map((ele) => (
          <div className={style.card} key={ele.id}>
            <img src={ele.image} alt={ele.title} />
            <h3>{ele.title}</h3>
            <div className={style.btn}>
              <button>
                <NavLink to={`/productdetails/${ele.id}`}>read more</NavLink>
              </button>
              <button
                onClick={() => {
                  dispatch(addToCart(ele))
                  console.log(items)
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
