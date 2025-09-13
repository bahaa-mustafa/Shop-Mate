import style from "./Register.module.css"
import { useEffect, useState } from "react"
import myCookie from "js-cookie"

function Signup() {
  const [email, setEmail] = useState("")

  useEffect(() => {
    const storedEmail = myCookie.get("userEmail")
    if (storedEmail) setEmail(storedEmail)
  }, [])

  return (
    <div className={style.register}>
      <div className={style.formCard}>
        <h2 className={style.formTitle}>Welcome New User 🎉</h2>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Thanks for signing up, <strong>{email}</strong>!  
          Please complete your profile to get started.
        </p>
        <div className={style.formActions}>
          <button>Complete Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
