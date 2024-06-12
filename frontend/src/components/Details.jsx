import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

function Details(){

    const [singleComplaint, setSingleComplaint] = useState([])

    const params = useParams()
    const getSingleComplaint = () => {
        
        axios.get(`http://localhost:1000/single/complaint/${params.id}`).then((response) => {
            setSingleComplaint(response.data)
        }).catch((error) => console.log(error))
    }

    const deleteComplaint = () => {
        axios.delete(`http://localhost:1000/delete/complaint/${params.id}`).then((res) => {
            if(res.data){
                toast.success('You have Successfully deleted.',{
                    duration: 1000,
                    position: "top-center",

                });
                getSingleComplaint()
            }
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getSingleComplaint()
    },[])

    return <div>


            <button onClick={deleteComplaint} className="bg-red-200 px-3 py-1 rounded ml-12 mt-10">Delete</button>
         
               {
                    singleComplaint.length &&
                    singleComplaint.map((complaint, index) => (
                        <div className="p-12">
                        <h1 className="font-bold text-2xl">{complaint.title}</h1>
                        <p>{complaint.description}</p>
                        </div>
                    ))
                }
                
            
<Toaster />
    </div>
}

export default Details