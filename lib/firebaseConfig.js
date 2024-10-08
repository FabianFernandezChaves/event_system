import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/**
 * Firebase configuration using environment variables.
 * 
 * This object holds the configuration settings for the Firebase app, which are 
 * provided as environment variables for security purposes. These variables are 
 * set in the `.env.local` file and accessed using `process.env`.
 * 
 * @type {Object}
 * @property {string} apiKey - Public API key for Firebase.
 * @property {string} authDomain - Domain for Firebase Authentication.
 * @property {string} projectId - Unique ID for the Firebase project.
 * @property {string} storageBucket - URL of the Firebase storage bucket.
 * @property {string} messagingSenderId - ID for Firebase Cloud Messaging.
 * @property {string} appId - The unique identifier for the Firebase app.
 * @property {string} measurementId - ID for Google Analytics measurement.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/**
 * Initialize Firebase App
 * 
 * This initializes the Firebase app using the provided configuration from `firebaseConfig`.
 * The app object provides access to Firebase services such as Firestore, Authentication, 
 * and Cloud Storage.
 * 
 * @returns {FirebaseApp} The initialized Firebase app instance.
 */
const app = initializeApp(firebaseConfig);

/**
 * Initialize Firebase Analytics
 * 
 * Analytics is only initialized if the code is running in a browser environment (window is defined).
 * This check ensures that analytics are not initialized during server-side rendering (SSR).
 * 
 * @type {Analytics|undefined} analytics - The Firebase Analytics object, or undefined if SSR.
 */
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
