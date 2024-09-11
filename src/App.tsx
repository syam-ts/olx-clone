import React, { useEffect, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Header from './components/Header';
import Footer from './components/Footer';
import { Banner, LongBanner, PromotedContent } from './components/Banner';
import { BANNER_ONE, BANNER_TWO } from './constants/banner';
import { AuthContext, FirebaseContext } from './strore/FirebaseContext.tsx' // Correct the path as needed
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const authContext = useContext(AuthContext);
  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    if (firebaseContext && authContext) {
      const { auth } = firebaseContext;
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          authContext.setUser({
            uid: user.uid,
            displayName: user.displayName || '',
            email: user.email || '',
          });
        } else {
          authContext.setUser(null);
        }
      });

      // Cleanup subscription on unmount
      return () => unsubscribe();
    }
  }, [firebaseContext, authContext]);

  return (
    <>
    <Navbar />
    <Header />
    <Banner banner={BANNER_ONE} isLong={false}/>
        <Outlet />  
      <Banner banner={BANNER_TWO} isLong={true}/> 
      <LongBanner />
       <PromotedContent />
    <Footer />
    </>
  );
};

export default App;
