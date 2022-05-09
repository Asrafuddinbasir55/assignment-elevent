// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPMwTkzy_sFSeQrgTGPP29_w-1qKorAXA",
  authDomain: "best-smartphone-7f6d1.firebaseapp.com",
  projectId: "best-smartphone-7f6d1",
  storageBucket: "best-smartphone-7f6d1.appspot.com",
  messagingSenderId: "428372884810",
  appId: "1:428372884810:web:9cde07e926a3d8ae54d5b3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;