var jwt = require('jsonwebtoken');

exports.generateToken=async(req,res,next)=>{
// console.log("Req===>",req.body)
const token=await jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: '1M' });
  console.log('token',token)
 
  return token 
}