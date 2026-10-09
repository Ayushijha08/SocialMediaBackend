const {createUser, findUser} = require("../models/authModel");
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

const loginController = async (req, res) => {
    const {loginKey, password} = req.body
    if(!loginKey || !password) return res.status(400).json({success: false, message: "Missing login credentials!"})

    try {
        const userInfo = await findUser(loginKey);
        // check the password
        const isPasswordMatched = await bcrypt.compare(password, userInfo.password)  // bcrypt.compare returns a booelan
        if(!isPasswordMatched) return res.status(400).json({success: false, message: "Incorrect password"})
        // session based authentication
        // at this point, we need to initiate a fresh session
        req.session.isAuth = true
        req.session.user = {
            username: userInfo.username,
            email: userInfo.email,
            userID: userInfo._id
        }
        return res.status(200).json({message: 'Login Successful!' })
        // session = {isAuth: true, user: {...}}
    } catch (error) {
        return res.status(500).json({sucess: false, message: "Internal server error", error: error})
    }
}

const logoutController = async (req, res) => {
    req.session.destroy((err) => {
        if(err) return res.status(500).json({mesaage: "Logout Unsuccessful!"})
        return res.staus(200).json({message: "Logout successful"})
    })
}

module.exports = {userRegisterController, loginController, logoutController}