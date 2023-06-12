const { DB } = require("../config/firebase");

module.exports.getMedia = async (limit) => {
  var snapshot;
  if (limit) {
    snapshot = await DB.collection("media")
      .orderBy("title")
      .limitToLast(limit)
      .get();
  } else {
    snapshot = await DB.collection("media").get();
  }

  if (snapshot.empty) {
    return [];
  }


  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });

  console.log("requested media")
  return data;
};
