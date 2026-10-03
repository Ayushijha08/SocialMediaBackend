const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
    name: {type: String},
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String,
        required: true,
        select: false  // by doing select: false, u will get all the info except password field
    }
})

module.exports = mongoose.model("user", userSchema)