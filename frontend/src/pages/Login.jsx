import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader";

function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    const loginAdmin = (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post("http://localhost:1000/login/admin", {
            "username": username,
            "password": password
        }).then((res) => {
            if(res.data.error){
                alert("Incorrect email or password")
            }
            else {
                localStorage.setItem("admin", JSON.stringify(res.data) )
                alert("Login successfully")
                navigate("/dashboard")
            }
        }).catch((error) => {
            console.log(error)
        })
        setLoading(false)
    }

    return <div className="h-screen  ">

        <div className="flex justify-center pt-32">
            <form className="bg-[#F6F2DD] w-[400px] h-[400px] p-8 rounded">
                <p className="text-2xl font-semibold">Login here</p>
                <br />
                <label className="font-semibold">Username or email</label>
                <br />
                <input value={username} onChange={((e) => setUsername(e.target.value))}  className="border-2 border-gray-500 w-[340px] h-[40px] rounded" type="text" />
                <br />
                <br />
                <label className="font-semibold">Password</label>
                <br />
                <input value={password} onChange={((e) => setPassword(e.target.value))} className="border-2 border-gray-500 w-[340px] h-[40px] rounded" type="text" />
                <br />
                <br />
                {
                    loading ? <ClipLoader
                    color="red"
                    loading={loading}
                    size={30}
                    // aria-label="Loading Spinner"
                    // data-testid="loader"
                  />
                  :
                <button onClick={loginAdmin} className="bg-blue-500 text-white font-bold rounded px-[150px] py-3">Login</button>
                }
                </form>
            </div>
    </div>
}

export default Login