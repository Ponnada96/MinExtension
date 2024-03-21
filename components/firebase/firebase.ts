// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUTx8y6HbTp6oLutlnGvztdhfEDIWMdH4",
    authDomain: "miniextensions-5e8b5.firebaseapp.com",
    projectId: "miniextensions-5e8b5",
    storageBucket: "miniextensions-5e8b5.appspot.com",
    messagingSenderId: "435790354283",
    appId: "1:435790354283:web:1f943e6bd41b1e65db9e2e"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'miniextensions-5e8b5';

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
