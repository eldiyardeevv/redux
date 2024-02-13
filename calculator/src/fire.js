import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXhW3kfsNspxf3shmbY0yt69hcUsyO3H4",
  authDomain: "appleshop-358a0.firebaseapp.com",
  projectId: "appleshop-358a0",
  storageBucket: "appleshop-358a0.appspot.com",
  messagingSenderId: "564225214718",
  appId: "1:564225214718:web:01e5e8ab26a50678427daf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
