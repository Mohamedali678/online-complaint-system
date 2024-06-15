import axios from "axios"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";


function FormModel ({closeModel}){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(false)

    const checkEmpty = () => {
        return title == "" || description == ""
    }

    const registerComplaint = (e) => {
        setLoading(true)
        e.preventDefault()
        if(checkEmpty() ){
            setError(true)
            return
        }
        setError(false)

            axios.post("http://localhost:1000/register/complaint", {
                "title": title,
                "description": description
            }).then(() =>
            { toast.success('You have Successfully submitted your complaints.',{
                duration: 5000,
                position: "top-right"
                
            });
            setTitle("")
            setDescription("")
            setLoading(false)
    
            }
        ).catch((error) => console.log(error))
    
    
              

    }

    return <div className="bg-[rgba(80,78,78,0.8)] w-full h-[800px] fixed -top-24">

    <div className=" bg-white text-black fixed top-10 bottom-3 left-[490px] w-[400px] rounded p-10" >

        <h1>Send us your complaints please</h1>
        <span className="text-red-500"> {error === true ? "Please fill out the form" : ""} </span>
        <form>
            <input value={title} onChange={(e)=> setTitle(e.target.value)} className="h-[50px] border-orange-300 border-4 rounded w-[300px] " type="text" placeholder="Enter title" />
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} className="mt-4 mb-4  border-orange-300 border-4 rounded" rows={10} cols={38} />
        </form>

        <div className="flex gap-10"> 
        <button onClick={closeModel} className="bg-red-300 text-2xl py-1 rounded px-4">Close</button>
        {
               loading ? <ClipLoader
                    color="red"
                    loading={loading}
                    size={30} />
                    :
                    <button onClick={registerComplaint} className="bg-orange-500 text-2xl py-1 rounded px-4">Send</button>
        }
        </div>

    </div>
    <Toaster />

    </div>
}

export default FormModel