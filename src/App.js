import Navbar from "./common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />}>Signup</Route>
        <Route path="/login" element={<Login/>}>Login</Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyATm4GqML_sGuXflGP2mm_gnzJSeas9dwU",
//   authDomain: "auth-test-14de1.firebaseapp.com",
//   projectId: "auth-test-14de1",
//   storageBucket: "auth-test-14de1.appspot.com",
//   messagingSenderId: "1085834363923",
//   appId: "1:1085834363923:web:d1e8b03ced777f40f4abe6"
// };

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
