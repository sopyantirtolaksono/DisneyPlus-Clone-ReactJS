// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, getDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB65ClF5WmCLX9WBcYe9ZmuT6aXdodMUsw",
    authDomain: "disneyplus-clone-95f06.firebaseapp.com",
    projectId: "disneyplus-clone-95f06",
    storageBucket: "disneyplus-clone-95f06.appspot.com",
    messagingSenderId: "26101686764",
    appId: "1:26101686764:web:16bfb1b2d7eacd0d2fe0c9",
    measurementId: "G-718DP047Q8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
// const analytics = getAnalytics(app);

export { auth, provider, storage, getDocs, collection, doc, getDoc };
export default db;
