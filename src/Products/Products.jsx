import { useEffect, useState } from "react"
import "./Products.css"
import { NavLink } from "react-router-dom"

function Products() {

  let [myFood, setMyFood] = useState([])


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
    <>
      <div className="products">
        <div className="head"><h2>Products page</h2></div>
        <div className="cards">
          {myFood.map((ele) => (
            <div className="card" key={ele.id}>
              <img src={ele.image} alt={ele.title} />
              <h3>{ele.title}</h3>
              <div className="btn">
                <button><NavLink to={`/productdetails/${ele.id}`}>read more</NavLink></button>
                <button><NavLink to={`/productdetails/${ele.id}`}>ِAdd to cart</NavLink></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
