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

    return <div className="relative">

       <div className="flex justify-between">
       <div className="w-[500px] m-20">
       <h1 className="font-bold mb-6 leading-[60px] text-5xl">Make your complaints way easier ever </h1>
        <p>We are committed to solve your complaints. Make any complaints you could have.</p>
        <button onClick={handleOpenModel}  className="bg-orange-500 rounded text-white font-bold rounded-sm text-2xl px-8 py-3 mt-3" >Make Complaint</button>
        
       </div>
       <img className="h-[500px] w-[600px]" src="https://img.freepik.com/premium-vector/we-want-your-feedback-customer-reviews-client-survey-loudspeaker-speech-bubble-with-lettering-yellow-memphis-square-banner-buyers-opinions-recommendations-vector-megaphone_176516-3954.jpg?w=740" />
       </div>

        
        {
            openModel === true ?  <FormModel closeModel={handleCloseModel} /> : ""
        }
    </div>
}

export default Hero