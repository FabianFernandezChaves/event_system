import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from './firebaseConfig';  

/**
 * Initialize Firestore
 * 
 * Creates a Firestore database instance using the initialized Firebase app. This `db` object 
 * is used to interact with the Firestore database, allowing CRUD operations like fetching, 
 * adding, and updating documents.
 * 
 * @type {Firestore} db - The Firestore database instance.
 */
const db = getFirestore(app);

/**
 * Get Events from Firestore
 * 
 * Fetches all documents from the "events" collection in Firestore. It returns an array of 
 * event objects, each containing its document ID (`id`) and the rest of the event data.
 * 
 * @async
 * @function getEvents
 * @returns {Promise<Array<Object>>} An array of event objects, each with the format `{ id, ...data }`. 
 * If an error occurs, it returns an empty array.
 * @throws {Error} Logs an error if there is an issue fetching the data.
 */
export const getEvents = async () => {
  try {
    // Get all documents from the "events" collection
    const querySnapshot = await getDocs(collection(db, "events"));
    
    // Map over each document, adding its ID and data to the resulting array
    const events = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return events;  // Return the array of event objects
  } catch (error) {
    // Log any errors that occur and return an empty array
    console.error("Error fetching events: ", error);
    return [];
  }
};
