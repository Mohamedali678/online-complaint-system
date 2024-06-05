const express = require("express")
const mongoose = require("mongoose")
const app = express()


mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("Database has been connected successfully")
}).catch((error) => console.log(error))

const complaintRoute = require("./routes/complaintRoute")

app.use(complaintRoute)

app.listen(1000, () => {
    console.log("Server is running on port 3000")
})