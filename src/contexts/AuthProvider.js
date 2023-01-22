import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //1. Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   2. Update Name
  const updateUserProfile = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // 3. Google Signin
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 4. Logout
  const logout = () => {
    setLoading(true);
    localStorage.removeItem("aircnc-token");
    return signOut(auth);
  };

  //5. Login with Password
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    updateUserProfile,
    signInWithGoogle,
    logout,
    signin,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
