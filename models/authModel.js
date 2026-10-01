const userSchema = require("../schemas/userSchema")
const bcrypt = require("bcrypt")

const createUser = async ({ name, email, password, username }) => {
    return new Promise(async (resolve, reject) => {
        const userExists = await userSchema.findOne({
            $or: [{ email: email }, { username: username }]
        })

        if (userExists) {
            reject("User already exists")
        }
        const hashedPassword = await bcrypt.hash(password, +(process.env.SALT))  // Unary plus operator: converts any string into a number

        const user = new userSchema({
            name, email, password: hashedPassword, username
        })

        try {
            const userObj = await user.save()
            resolve(userObj)
        } catch (error) {
            reject(error)
        }
    })

}

module.exports = createUser