import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase-config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  // console.log(children);
  const [user, setUser] = useState(null);
  const [loader,setLoader] = useState(true)
    console.log(loader,user);
    
  const createNewUser = (email, password) => {
      setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

  const handleLogin = (email, password) => {
      setLoader(true)
      return  signInWithEmailAndPassword(auth, email, password);
    }

  const logOut = () => {
      setLoader(true)
        return signOut(auth)
  }
  
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    handleLogin,
    loader,
    updateUserProfile,
  };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoader(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    
    

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
