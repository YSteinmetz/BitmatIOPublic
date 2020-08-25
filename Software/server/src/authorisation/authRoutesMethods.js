const { isString } = require("util");

function registerUser(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!isString(password)||!isString(username)){
        return sendResponse(res, "Invalid credentials", true);
    }
    

}