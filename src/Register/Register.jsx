// import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Register.css"
import { useForm } from "react-hook-form"
import myCookie from "js-cookie"

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // let [email, setEmail] = useState("")
    // let [password, setPassword] = useState("")

    const navigate = useNavigate()
    // let newUser = {}

      const validUser = {
        email: "admin@bahaa-mustafa.com",
        password: "Admin@bahaa123"
    }

    const handleSubmitClick = (data) => {
        console.log(data);
        //=============

        if (data.email === validUser.email && data.password === validUser.password) {
            myCookie.set("userEmail", data.email)
            myCookie.set("userType", "old")
            console.log("existing user logged in:", data.email)
            navigate("/home")
        } else {
            const newUser = { email: data.email, password: data.password }
            myCookie.set("userEmail", newUser.email)
            myCookie.set("userType", "new")
            console.log("new user registered:", newUser)
            navigate("/home")
        }



        //================

        // newUser = {
        //     "email": data.email,
        //     "password": data.password
        // }
        // setData(newUser)
        // getData()
        // navigate("/home")
    }

    // function setData(newUser) {
    //     myCookie.set("users", JSON.stringify(newUser))
    //     console.log("user saved to cookies");
    // }

    // function getData() {
    //     console.log(JSON.parse(myCookie.get("users")));
    // }

    return (
        <>
            <div className="register">
                <h2>Sign up/Login </h2>
                <div className="form">

                    <form onSubmit={handleSubmit(handleSubmitClick)}>
                        <div className="email">
                            <label htmlFor="email">user email:</label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "you must enter your email!"
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email address!"
                                }
                            })} type="email" id="email" />

                            {errors.email && <p style={{ color: "red", margin: 0 }}>{errors.email.message}</p>}
                        </div>
                        <div className="password">
                            <label htmlFor="password">password:</label>
                            <input {...register("password", {
                                required: "you must enter your password!",
                                minLength: {
                                    value: 6,
                                    message: "minimum length of password are 6 digits"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                    message: "Password must include uppercase, lowercase, and a special character"
                                }
                            })} type="password" id="password" />

                            {errors.password && <p style={{ color: "red", margin: 0 }}>{errors.password.message}</p>}
                        </div>
                        <div className="btn">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
