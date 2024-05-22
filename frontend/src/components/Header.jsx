import {Link} from "react-router-dom"
function Header(){



    return <div className="bg-orange-500 flex py-4 px-12 justify-between">
        <h1 className="font-bold text-4xl">OCMS</h1>
        <div className="flex gap-10 text-3xl text-white" >
            <Link>Home</Link>
            <Link>About Us</Link>
        </div>
        <button  className="text-orange-500 bg-white font-bold rounded-sm text-2xl px-8 py-3" >Add Complaint</button>
    </div>
}

export default Header