// src/store/FirebaseContext.tsx

import React, { createContext, useState, ReactNode } from 'react';
import { firebaseApp, auth } from '../firebase/config'; // Correct import

interface AuthContextType {
  user: { uid: string; displayName?: string; email?: string } | null;
  setUser: (user: { uid: string; displayName?: string; email?: string } | null) => void;
}

interface FirebaseContextType {
  auth: typeof auth; // Adjusted type
}

export const FirebaseContext = createContext<FirebaseContextType | null>(null);
export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
  children: ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<{ uid: string; displayName?: string; email?: string } | null>(null);

  const firebaseContextValue: FirebaseContextType = {
    auth,
  };

  const authContextValue: AuthContextType = {
    user,
    setUser,
  };

  return (
    <FirebaseContext.Provider value={firebaseContextValue}>
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
    </FirebaseContext.Provider>
  );
};

export default ContextProvider;
