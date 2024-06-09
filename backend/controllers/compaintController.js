
const complaintModel = require("../model/complaintModel")

const registerCompaint = async (req, res) => {
    try {

        const newComplaint = complaintModel(req.body)
        const saveNewComplaint = await newComplaint.save()
        if(saveNewComplaint){
            res.status(200).send("New complaint has been registered successfully")
        }
        
    }catch(error){
        console.log(error)
    }

}

const displayComplaint = async (req, res) => {
    try{
        const compaint = await complaintModel.find()
        if(compaint){
            res.status(200).send(compaint)
        }
    }catch(error){
        console.log(error)
    }
}


module.exports = {registerCompaint, displayComplaint}