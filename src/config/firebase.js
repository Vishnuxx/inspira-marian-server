const admin = require("firebase-admin");
const serviceAccount = require("../../firebase_service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  DB: admin.firestore(),
  FStorage: admin.storage()
};
