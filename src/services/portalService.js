const { DB } = require("../config/firebase");

const uploadIdea = async (data) => {
 
    const response = await DB.collection("/startupideas").add({
      name: data.name,
      email: data.email,
      number: data.number,
      problem: data.problem,
      solution: data.solution,
      skills: data.skills,
      targetaudience: data.targetaudience,
    });
    return response;
};
module.exports = { uploadIdea };
