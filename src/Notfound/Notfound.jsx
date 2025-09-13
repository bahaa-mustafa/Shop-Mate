import { NavLink } from "react-router-dom"
import style from "./NotFound.module.css"

function NotFound() {
  return (
    <div className={style.notFound}>
      <h1 className={style.errorCode}>404</h1>
      <h2 className={style.title}>Oops! Page Not Found</h2>
      <p className={style.message}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <NavLink to="/" className={style.homeBtn}>
        Go Back Home
      </NavLink>
    </div>
  )
}

export default NotFound
