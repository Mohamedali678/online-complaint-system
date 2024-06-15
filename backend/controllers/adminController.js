const adminModel = require("../model/adminModel")

const createAdmin = async (req, res) => {
    try{
        const newAdmin = adminModel(req.body)
        const saveAdmin = await newAdmin.save()
        if(saveAdmin){
            res.status(200).send(saveAdmin)
        }

    }catch(error){
        console.log(error)
    }
}

// Login Admin

const loginAdmin = async (req, res) => {

    try{
        const admin = await adminModel.findOne(req.body)
        if(admin){
            res.status(200).send("Login successfully")
        }
        else {
            res.json({
                error: "admin not found"
            })
        }

    }catch(error){
        console.log(error)
    }

}

module.exports = {createAdmin, loginAdmin}