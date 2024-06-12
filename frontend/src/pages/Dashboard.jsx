import axios from "axios"
import { useEffect, useState } from "react"

function Dashboard(){

    const [totalComplaint, setTotalComlaint] = useState([])

    const getTotalComplaint = () => {
       axios.get("http://localhost:1000/count/complaints").then((response) => {
           setTotalComlaint(response.data)
       }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getTotalComplaint()
    },[])

    return <div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-5">

            <div className="w-[300px] h-[170px] bg-[#F6F2DD] border-b-8 border-blue-500 rounded text-center">
                <h1 className="font-bold text-3xl mt-14">{totalComplaint.totalComplaints}</h1>
                <p>total complaints</p>
            </div>

            <div className="w-[300px] h-[170px] border-b-8 border-orange-500 bg-[#F6F2DD] rounded text-center">
            <h1 className="font-bold text-3xl mt-14">5</h1>
                <p>total complaints</p>
            </div>

           
            
            <div className="w-[300px] h-[170px] border-b-8 border-green-500 bg-[#F6F2DD] rounded text-center">
            <h1 className="font-bold text-3xl mt-14">5</h1>
                <p>total complaints</p>
            </div>
            </div>
            </div>

}

export default Dashboard