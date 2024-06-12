import { useState } from "react"
import {NavLink} from "react-router-dom"

function Sidenav({children}){


    const [isOpen, setisOpen] = useState(false)

    const handleIsOpen = () => {
        setisOpen(true)
    }

    const handleIsClose = () => {
        setisOpen(false)

    }

    return <div className="flex">

    <div style={{ width: isOpen === true ? "50px" : ""}} className=" transition-all fixed duration-500 overflow-hidden w-[250px] h-screen bg-[#FBFAF4] border-r-2 border-blue-500">
        <i onClick={handleIsClose} style={{ display: isOpen === true ? "block": "none"}} class="fa-solid fa-bars ml-3 mt-2 hidden"></i>
        <i onClick={handleIsOpen} class="fa-solid fa-xmark ml-[220px] text-3xl"></i>
       
        <div style={{paddingLeft: isOpen === true ? "10px" : ""}}  className="flex flex-col gap-12 px-8 pt-10 text-2xl transition-all duration-500 ">
            {
        isOpen === true ? <i class="fa-brands fa-microsoft"></i> :
        <NavLink to="/dashboard">  <i class="fa-brands fa-microsoft"></i> Dashboard  </NavLink>
            }
        {
            isOpen === true ? <i class="fa-solid fa-book"></i> :
        <NavLink to="/course"> <i class="fa-solid fa-book"></i> Complaints</NavLink>
        }
        {
            isOpen === true ? <i class="fa-solid fa-table"></i> :
        <NavLink to="/attendance"> <i class="fa-solid fa-table"></i> Attendance</NavLink>
        }
        {
            isOpen === true ? <i class="fa-solid fa-file"></i>: 
        <NavLink to="/report"> <i class="fa-solid fa-file"></i> Reports</NavLink>
        }
        {
            isOpen === true ?  <i class="fa-solid fa-gear"></i>:
        <NavLink> <i class="fa-solid fa-gear"></i> Setting</NavLink>
        }
        
        </div>
    </div>

    <div style={{marginLeft: isOpen === true ? "100px" : ""}} className="main ml-[270px] transition-all duration-500">
        {
            children
        }
    </div>
    </div>
}
export default Sidenav