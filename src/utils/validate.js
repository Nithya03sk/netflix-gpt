export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Zà-ÿÀ-ÿ '’-]+$/.test(name)
    if(!isEmailValid){
        return "Email Id is not valid"
    }
    else if(!isPasswordValid){
        return "Password is not valid"
    }
    else if(!isNameValid){
        return "Name should not contain special char or numbers"
    }
    else{
        return null
    }
}