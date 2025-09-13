import { NavLink } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import style from "./Footer.module.css"

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        
        {/* Logo */}
        <div className={style.logo}>
          <NavLink to="/">Shop<span>Mate</span></NavLink>
          <p>Your trusted store for modern shopping.</p>
        </div>

        {/* Links */}
        <div className={style.links}>
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">Cart</NavLink>
          <NavLink to="/register">Account</NavLink>
        </div>

        {/* Social Media */}
        <div className={style.social}>
          <h4>Follow Us</h4>
          <div className={style.icons}>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={style.bottom}>
        <p>© {new Date().getFullYear()} ShopMate. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
