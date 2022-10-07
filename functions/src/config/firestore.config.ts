import * as admin from 'firebase-admin';

var serviceAccount = require("../../baza.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export default db;
