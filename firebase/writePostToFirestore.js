import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

export const writePostToFirestore = async (postData) => {
  console.log("aaaaaaa");
  try {
    console.log("bbbbbb");

    const docRef = await addDoc(collection(db, "Posts"), postData);
    console.log("cccccc");

    console.log("Document written with ID: ", docRef.id);
    console.log("iiiiiiii");

    return docRef;
  } catch (e) {
    console.log("jjjjjjj");

    console.error("Error adding document: ", e);
    throw e;
  }
};
