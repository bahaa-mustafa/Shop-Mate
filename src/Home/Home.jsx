// import "./Home.css"

// // function Home() {
// //   return (
// //     <>
// //     <div className="home">
// //         <h2>Home page</h2>
// //     </div>
// //     </>
// //   )
// // }

// // export default Home

// import { useEffect, useState } from "react"
// import myCookie from "js-cookie"

// function Home() {
//     const [userEmail, setUserEmail] = useState("")
//     const [userType, setUserType] = useState("")

//     useEffect(() => {
//         const email = myCookie.get("userEmail")
//         const type = myCookie.get("userType")
//         setUserEmail(email || "")
//         setUserType(type || "")
//     }, [])

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }} className="home">
//             {userEmail ? (
//                 <h2>
//                     {userType === "old" 
//                         ? `👋 Welcome back, ${userEmail}!` 
//                         : `🎉 Welcome new user, ${userEmail}!`}
//                 </h2>
//             ) : (
//                 <h2>No user found, please login first!</h2>
//             )}
//         </div>
//     )
// }

// export default Home





import "./Home.css"
import { useEffect, useState } from "react"
import myCookie from "js-cookie"
import { NavLink } from "react-router-dom"

function Home() {
  const [userEmail, setUserEmail] = useState("")
  const [userType, setUserType] = useState("")

  useEffect(() => {
    const email = myCookie.get("userEmail")
    const type = myCookie.get("userType")
    setUserEmail(email || "")
    setUserType(type || "")
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="hero">
        <h1>🛒 MyShop</h1>
        {userEmail ? (
          <h2>
            {userType === "old"
              ? `👋 Welcome back, ${userEmail.split("@").splice(0,1)}!`
              : `🎉 Welcome , ${userEmail.split("@").splice(0,1)}!`}
          </h2>
        ) : (
          <h2>No user found, please <NavLink to="/register">login</NavLink> first!</h2>
        )}
        <NavLink to="/products">
          <button className="browse-btn">Browse Products</button>
        </NavLink>
      </header>

      {/* Featured Products Section */}
      <section className="featured">
        <h2>✨ Featured Products</h2>
        <div className="featured-list">
          <div className="card">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="Bag" />
            <h3>Stylish Backpack</h3>
            <p>$109.95</p>
          </div>
          <div className="card">
            <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png" alt="Shirt" />
            <h3>Casual T-Shirt</h3>
            <p>$22.3</p>
          </div>
          <div className="card">
            <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png" alt="Jacket" />
            <h3>Winter Jacket</h3>
            <p>$55.99</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>🛍️ Ready to shop?</h2>
        <NavLink to="/products">
          <button className="cta-btn">Start Shopping</button>
        </NavLink>
      </section>
    </div>
  )
}

export default Home
