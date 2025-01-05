const { generateToken } = require("../middleware/token")

exports.login=async(req,res)=>{
    const {username,password}=req.body
    if(!username ||!password) return res.send({status:false,msg:"Provide all fields"})
if(username=='sujit'&&password=='sujit@123'){
const token=await generateToken(username)
   return res.send({status:true,msg:"login successfully",token:token})
}
return res.send({status:false,msg:"invalid user"})
}