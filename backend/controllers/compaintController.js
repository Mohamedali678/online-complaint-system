
const complaintModel = require("../model/complaintModel")

const registerCompaint = async (req, res) => {
    try {

        console.log(req.body)
        // const newComplaint = complaintModel(req.body)
        // const saveNewComplaint = await newComplaint.save()
        // if(saveNewComplaint){
        //     res.statusCode(200).send("New complaint has been registered successfully")
        // }
        
    }catch(error){
        console.log(error)
    }

}

const displayComplaint = async (req, res) => {
    try{
        const compaint = await complaintModel.find()
        if(compaint){
            res.statusCode(200).send(compaint)
        }
    }catch(error){
        console.log(error)
    }
}


module.exports = {registerCompaint, displayComplaint}