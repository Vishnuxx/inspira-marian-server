const { fetchExecomMemberDetails } = require("../services/fetchExecomMemberDetails")



module.exports.execomController = async (req , res) => {
   
    const result = await fetchExecomMemberDetails();
     console.log(result);
    res.status(200).json(result)
}   