// import { useSelector } from "react-redux"
// import "./Navbar.css"
// import { NavLink } from "react-router-dom"

// function Navbar() {
//     const count = useSelector((state) => state.counter.count);
//     const items = useSelector((item)=> item.cart.items)
//     const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
//     return (
//         <>
//             <nav className="navbar">
//                 <NavLink to="/" className={({isActive})=>isActive? "active_nav" : ""}>Home</NavLink>
//                 {/* <NavLink to="/about" className={({isActive})=>isActive? "active_nav" : ""}>About</NavLink> */}
//                 <NavLink to="/products" className={({isActive})=>isActive? "active_nav" : ""}>Products</NavLink> 
//                 <NavLink to="/about" className={({isActive})=>isActive? "active_nav" : "navbar_cart"}>Cart <span className={totalItems>0 ? "nav_cart":"none"}>{totalItems}</span></NavLink>
//                 <NavLink to="/register" className={({isActive})=>isActive? "active_nav" : ""}>Account</NavLink> 

//                 {/* <NavLink to="/"  >Home</NavLink>
//                 <NavLink to="/about" >About</NavLink>
//                 <NavLink to="/products" >Products</NavLink>               */}
//             </nav>
//         </>
//     )
// }

// export default Navbar



import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import style from "./Navbar.module.css"

function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className={style.navbar}>
      {/* Logo */}
      <div className={style.logo}>
        <NavLink to="/">Shop<span>Mate</span></NavLink>
      </div>

      {/* Links */}
      <div className={style.links}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? style.activeNav : ""}
        >
          Home
        </NavLink>

        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? style.activeNav : ""}
        >
          Products
        </NavLink>

        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? style.activeNav : style.cartLink}
        >
          Cart 
          <span className={totalItems > 0 ? style.cartBadge : style.hidden}>
            {totalItems}
          </span>
        </NavLink>

        <NavLink 
          to="/register" 
          className={({ isActive }) => isActive ? style.activeNav : ""}
        >
          Account
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
