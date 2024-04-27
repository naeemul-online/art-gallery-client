import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

// created context
export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
  // use state
  const [user, setUser] = useState(null);
  // console.log(user)

  const [loading, setLoading] = useState(true);
  // console.log(loading)

  // create user method
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update user profile
  const updateUserProfile = (name, image, password, email) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
      email: email,
      password: password,
    });
  };

  // sign in user method
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google popUp
  const googleLogin = () => {
    setLoading(true);
    // toast.success("You are login successfully!");
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with gitHub popUp
  const gitHubLogin = () => {
    // toast.success("You are login successfully!");
    return signInWithPopup(auth, gitHubProvider);
  };

  // logout
  const logOut = () => {
    setLoading(true);
    setUser(null);
    toast.success("You are logout successfully!");
    return signOut(auth);
  };

  // observer by onAuthState
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setUser(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // stored value to send in the children
  const allValues = {
    createUser,
    signInUser,
    googleLogin,
    gitHubLogin,
    logOut,
    user,
    updateUserProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;

FirebaseProvider.propTypes = {
  children: PropTypes.node,
};
