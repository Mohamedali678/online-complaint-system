import {Link} from "react-router-dom"
function Header(){

    return <div className="bg-white flex py-2 px-12 items-center justify-between">
        <h1 className="font-bold text-4xl">OCMS</h1>
        <div className="flex gap-10 text-3xl text-orange-500" >
            <Link className="font-semibold">Home</Link>
            <Link className="font-semibold">About Us</Link>
        </div>
        <Link to="/course">
        <button  className="text-orange-500 border-orange-500 border-2 font-bold rounded-full text-2xl px-10 py-3 hover:bg-orange-500 hover:text-white" >Admin area</button>
        </Link>       
    </div>
}

export default Header