import { useState } from "react"
import "./Register.css"
import { useForm } from "react-hook-form"

function Register() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")


    const handleSubmitClick = (data)=>{
        console.log(data);                
    }
  return (
    <>
    <div className="register">
        <h2>Sign up/Login </h2>
        <div className="form">

            <form onSubmit={handleSubmit(handleSubmitClick)}>
                <div className="email">
                    <label htmlFor="email">user email:</label>
                    <input {...register("email", {
                        required:{
                            value:true,
                            message:"this input is requierd"
                        },
                        minLength:{
                            value:8,
                            message:"at least 8"
                        }                     
                    })} type="email" id="email" />
                </div>
                {errors.email&&<p style={{color:"red", margin:0}}>{errors.email.message}</p>}
                <div className="password">
                    <label htmlFor="password">password:</label>
                    <input {...register("password", {
                        required:{
                            value:true,
                            message:"this input is requierd"
                        },
                        minLength:{
                            value:8,
                            message:"at least 8"
                        },
                        maxLength:{
                            value:20,
                            message:"max lenth is 20"
                        }
                    })} type="password" id="password" />
                </div>
                {errors.password&&<p style={{color:"red", margin:0}}>{errors.password.message}</p>}
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
