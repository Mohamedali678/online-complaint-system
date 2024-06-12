
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

// Display Single 

const getSingleComplaint = async (req, res) => {
    try{
        const singleCompaint = await complaintModel.find({_id: req.params.id})
        if(singleCompaint){
            res.send(singleCompaint)
        }

    }catch(error){
        console.log(error)
    }
}

// Delete
const deleteComplaint = async (req, res) => {
    try{

        const deleteData = await complaintModel.deleteOne({_id: req.params.id})
        if(deleteData){
            res.status(200).send("Complaint has beel deleted")
        }

    }catch(error){
        console.log(error)
    }
}

// Getting total complaints revieved

const getTotalComplaints = async (req, res) => {
    try {
        const totalComplaints = await complaintModel.countDocuments()
        res.status(200).send({totalComplaints})
        

    }catch(error){
        console.log(error)
    }
}

module.exports = {registerCompaint, getTotalComplaints, deleteComplaint, getSingleComplaint, displayComplaint}