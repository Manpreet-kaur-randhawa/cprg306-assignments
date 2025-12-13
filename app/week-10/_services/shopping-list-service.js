import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


// Get all items for a user //
export async function getItems(userId) {
  const items = [];

  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);

  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// Add a new item //
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}