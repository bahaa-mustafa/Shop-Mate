import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import style from "./Navbar.module.css"

function Navbar() {
  const items = useSelector((state) => state.cart.items)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <NavLink to="/">Shop<span>Mate</span></NavLink>
      </div>

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
