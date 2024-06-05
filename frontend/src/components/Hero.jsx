import { useState } from "react"

import FormModel from "./FormModel"

function Hero(){

    const [openModel, setOpenModel] = useState(false)

    const handleOpenModel = () => {
        setOpenModel(true)
    }
    const handleCloseModel = () => {
        setOpenModel(false)
    }

    return <div className="relative text-white bg-gradient-to-br from-[#dd8445]  to-[#48392b]  h-[500px]">

       <div className="mb-32 text-center pt-32">
       
       <h1 className="font-bold mb-6 leading-[60px] text-6xl">Make your complaints way easier ever </h1>
        <p>We are committed to solve your complaints. Make any complaints you could have.</p>
        <button onClick={handleOpenModel}  className="bg-orange-500  text-white font-bold rounded-full text-2xl px-8 py-3 mt-10" >Make Complaint</button>
    
       </div>

        
        {
            openModel === true ?  <FormModel closeModel={handleCloseModel} /> : ""
        }
    </div>
}

export default Hero