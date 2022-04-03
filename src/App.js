import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Men from "./Men"
import Women from "./Women"
import CheckOut from "./CheckOut"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="men" element={ <Men/> } />
          <Route path="women" element={ <Women/> } />
          <Route path="checkout" element={ <CheckOut/> } />
        </Routes>
      </div>
    )
  }
  
  export default App

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC85be_EMmnCHhKU34jFYerMtl3pUC5Emo",
  authDomain: "athletico-shop.firebaseapp.com",
  projectId: "athletico-shop",
  storageBucket: "athletico-shop.appspot.com",
  messagingSenderId: "753795811389",
  appId: "1:753795811389:web:0ed44000d14be28defc254",
  measurementId: "G-W4PS0NLERW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);