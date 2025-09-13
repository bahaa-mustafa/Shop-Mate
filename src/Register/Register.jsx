import { useNavigate } from "react-router-dom"
import style from "./Register.module.css"
import { useForm } from "react-hook-form"
import myCookie from "js-cookie"

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const validUser = {
    email: "admin@bahaa-mustafa.com",
    password: "Admin@bahaa123"
  }

  const handleSubmitClick = (data) => {
    if (data.email === validUser.email && data.password === validUser.password) {
      // Existing user
      myCookie.set("userEmail", data.email)
      myCookie.set("userType", "old")
      console.log("existing user logged in:", data.email)
      navigate("/home")
    } else {
      // New user
      const newUser = { email: data.email, password: data.password }
      myCookie.set("userEmail", newUser.email)
      myCookie.set("userType", "new")
      console.log("new user registered:", newUser)
      navigate("/home")
    }
  }

  return (
    <div className={style.register}>
      <div className={style.formCard}>
        <h2 className={style.formTitle}>Login</h2>
        <form onSubmit={handleSubmit(handleSubmitClick)}>
          
          {/* Email */}
          <div className={style.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              {...register("email", {
                required: "You must enter your email!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address!"
                }
              })}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && <p className={style.error}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className={style.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "You must enter your password!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  message: "Include uppercase, lowercase, and a special character"
                }
              })}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && <p className={style.error}>{errors.password.message}</p>}
          </div>

          {/* Submit */}
          <div className={style.formActions}>
            <button type="submit">Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
