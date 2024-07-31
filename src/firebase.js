import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';


// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDsUfnyowasQ_1R4o9MK66p2T3j06nyC7s",
  authDomain: "fitness-website-07.firebaseapp.com",
  projectId: "fitness-website-07",
  storageBucket: "fitness-website-07.appspot.com",
  messagingSenderId: "1090932475012",
  appId: "1:1090932475012:web:e729ad511930848c5f6ed1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { auth };