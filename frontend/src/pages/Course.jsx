import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Course(){

    const [complaints, setComplaints] = useState([])

    const getAllComplaints = () => {
        axios.get("http://localhost:1000/complaints").then((response) => {
            setComplaints(response.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getAllComplaints()
    },[])

    return <div className="">
        <h1 className="font-bold text-1xl">All Complaints</h1>
        <div>
        <table className=" w-[1000px]">
            <tr className="p-20 text-1xl" >
                <th className="p-5">S.N</th>
                <th>Title  </th>
                <th>Description</th>
                <th>Issue Date</th>
                <th>Action</th>
            </tr>
            {
              complaints.length > 0 ? complaints.map((complaint, index) => (
                <tr className="text-center border-y-2  ">
                <td className="p-3">{index + 1}</td>
                <td>{complaint.title.substring(0,10)}</td>
                <td>{complaint.description.substring(0,12)}</td>
                <td>{new Date(complaint.createdAt).toLocaleString()}</td>
                    <Link to={`/details/${complaint._id}`}>

                <button className="px-5 py-2 m-2 rounded text-white bg-blue-400">Details</button>
                    </Link>
            </tr>
                ))
                :
                <p>Nothing found</p>
            }

            
        </table>
        </div>



    </div>
}

export default Course