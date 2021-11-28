import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDpkRyZ-uV5DrM5SNgJ8AZnQpbZzITp5UQ",
  authDomain: "twitter-468f9.firebaseapp.com",
  projectId: "twitter-468f9",
  storageBucket: "twitter-468f9.appspot.com",
  messagingSenderId: "667021979504",
  appId: "1:667021979504:web:de6c6bb2223b119b40e9b5",
  measurementId: "G-M27FR1JJRP"
};


export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);