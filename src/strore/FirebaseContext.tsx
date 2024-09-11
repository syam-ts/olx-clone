import { createContext } from 'react';
import { FirebaseApp } from 'firebase/app';

// Create a context that accepts either a FirebaseApp or null
export const FirebaseContext = createContext<FirebaseApp | null>(null);
