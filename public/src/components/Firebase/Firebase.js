// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth} from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDQ53trSwtQc30MLMll4c-hyBSBSCTpaSM",
    authDomain: "clone-c8441.firebaseapp.com",
    projectId: "clone-c8441",
    storageBucket: "clone-c8441.appspot.com",
    messagingSenderId: "366194981219",
    appId: "1:366194981219:web:6fa6331496940c284a3b56",
    measurementId: "G-W995HD1WL8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {db, auth};