
const { uploadIdea } = require("../services/portalService");

module.exports.onSubmitIdeaController = async (req, res) => {
  try {
    const {
      email,
      name,
      number,
      problem,
      solution,
      targetaudience,
      skills,
      classdetails,
    } = req.body;

    console.log(classdetails);
    const response = await uploadIdea({
      email,
      name,
      number,
      problem,
      solution,
      targetaudience,
      skills,
      classdetails,
    });
    console.log("successs ; ", response);
    // sendIdeaSubmissionResponseMail({to: email})
    res.status(200).send("success");
  } catch (error) {
    console.log("failed ; ", error);
    res.status(400).send("Submission Failed");
  }
};
