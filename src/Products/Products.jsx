import { useEffect, useState } from "react"
import style from "./Products.module.css"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../Redux/cartSlice"

function Products() {
  let [myFood, setMyFood] = useState([])

  let [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const items = useSelector((state) => state.cart.items)

  async function getProducts() {
    try {
      const data = await fetch("https://fakestoreapi.com/products")
      const myData = await data.json()
      console.log(myData)
      setMyFood(myData)
      setLoading(false)
    } catch (err) {
      console.log("Error in fetch data from api", err);
    }

  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className={style.products}>
      <div className={style.head}>
        <h2>Products page</h2>
      </div>
      {loading && <div className={style.cart_loader}><span className={style.loader}></span></div>}
      <div className={style.cards}>
        {myFood.map((ele) => (
          <div className={style.card} key={ele.id}>
            <img src={ele.image} alt={ele.title} />
            <h3>{ele.title}</h3>
            <div className={style.btn}>
              <button>
                <NavLink to={`/products/productdetails/${ele.id}`}>read more</NavLink>
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
