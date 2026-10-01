const userDetailsValidation = ({name, username, email, password}) => {
    return new Promise((resolve, reject) => {
        if(!name || !username || !email || !password) reject("Missing user info!")
        
        if(typeof name != 'string') reject("Name is not a text")
        if(typeof username != 'string') reject("Username is not a text")
        if(typeof email != 'string') reject("Email is not a text")

        if(!isValidEmail(email)) reject("Email is not valid")
        resolve()
    })
}

const isValidEmail = (email) => {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // specifically for email validation
    return expression.test(email)  // .test always returns a boolean // true -> valid, false -> invalid
}

module.exports = userDetailsValidation