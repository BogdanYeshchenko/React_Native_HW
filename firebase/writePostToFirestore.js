import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

export const writePostToFirestore = async (postData) => {
  try {
    const docRef = await addDoc(collection(db, "Posts"), postData);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
