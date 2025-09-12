import "./Home.css"

// function Home() {
//   return (
//     <>
//     <div className="home">
//         <h2>Home page</h2>
//     </div>
//     </>
//   )
// }

// export default Home

import { useEffect, useState } from "react"
import myCookie from "js-cookie"

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
        <div style={{ textAlign: "center", marginTop: "50px" }} className="home">
            {userEmail ? (
                <h2>
                    {userType === "old" 
                        ? `👋 Welcome back, ${userEmail}!` 
                        : `🎉 Welcome new user, ${userEmail}!`}
                </h2>
            ) : (
                <h2>No user found, please login first!</h2>
            )}
        </div>
    )
}

export default Home

