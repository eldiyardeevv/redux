import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../fire";

export const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  async function authWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log("error");
    }
  }
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const values = {
    authWithGoogle,
    register,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
export default AuthContext;
