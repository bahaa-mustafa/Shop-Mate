import { useSelector } from "react-redux"
import "./Navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
    const count = useSelector((state) => state.counter.count);
    return (
        <>
            <nav className="navbar">
                <NavLink to="/" className={({isActive})=>isActive? "active_nav" : ""}>Home</NavLink>
                {/* <NavLink to="/about" className={({isActive})=>isActive? "active_nav" : ""}>About</NavLink> */}
                <NavLink to="/products" className={({isActive})=>isActive? "active_nav" : ""}>Products</NavLink> 
                <NavLink to="/register" className={({isActive})=>isActive? "active_nav" : ""}>Register</NavLink> 
                <NavLink to="/about" className={({isActive})=>isActive? "active_nav" : ""}>Card ( {count} )</NavLink>

                {/* <NavLink to="/"  >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/products" >Products</NavLink>               */}
            </nav>
        </>
    )
}

export default Navbar
