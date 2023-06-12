const { getMedia } = require("../services/mediaService")



module.exports.mediaController = async (req , res) => {
    try {
        const limit = req.query.limit;
        const response = await getMedia(parseInt(limit));
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(404).send(error)
    }
}