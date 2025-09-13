import { NavLink, useNavigate, useParams } from "react-router-dom"
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

  const navigator = useNavigate()

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

          <button
            className={style.addBtn}
            onClick={() => navigator("/products")}
          >
            Back
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails
