const { DB } = require("../config/firebase")



module.exports.fetchExecomMemberDetails = async () => {
  const res =  await DB.collection("execomteamdetails").get()
  const array = []
  res.forEach((snapshot)=> {
    array.push(snapshot.data())
  })
  return array
}