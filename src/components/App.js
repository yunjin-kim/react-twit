import React, { useEffect, useState } from 'react';
import AppRouter from './Router';
import { authService } from '../fbase';

export default function App() {
  const [initialize, setInitialize] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user)
      } else {
        setIsLoggedIn(false)
      }
      setInitialize(true)
    });
  }, [])

  return (
    <>
      {initialize ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initializing"}
    </>
  )
}
