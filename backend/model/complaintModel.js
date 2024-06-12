const mongoose = require("mongoose")

const compaintSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
},

{timestamps: true}
)

module.exports = mongoose.model("Complaints", compaintSchema)