const createUser = require("../models/authModel");
const userDetailsValidation = require("../utils/authUtils");

const userRegisterController = async (req, res) => {
    // const {name, username, email, password} = req.body;
    try {
        await userDetailsValidation(req.body)
    } catch(err) {
        return res.status(400).json({suceess: false, message: err})
    }
    try {
        const user = await createUser(req.body);
        return res.status(201).json({success: true, message: "User registered successfully!"})
    } catch (error) {
        return res.status(500).json({success: false, message: "Interval server error", error: error})
    }
}

module.exports = userRegisterController