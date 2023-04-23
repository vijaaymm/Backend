const jwt  = require('jsonwebtoken')

require("dotenv").config();


var userToken = await jwt.sign({email:req.body.email},process.env.SECRET_KEY)

res.header('auth',userToken).json(userToken)

module.exports= userToken;
