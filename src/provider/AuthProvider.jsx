import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase-config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  // console.log(children);
    const [user, setUser] = useState(null);
    console.log(user);
    
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleLogin = (email, password) => {
      return  signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    handleLogin,
  };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
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
