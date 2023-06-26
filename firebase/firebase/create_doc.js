"use server"

const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");


const serviceAccount = require("@/serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const CreateDocument = async (uid, prompt, response) => {
  const docRef = await db.collection("responses").add({
    uid: uid,
    prompt: prompt,
    response: response,
    timestamp: Timestamp.now(),
  });
  console.log("Document written with ID: ", docRef.id);
}

export default CreateDocument;