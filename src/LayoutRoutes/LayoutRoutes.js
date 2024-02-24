import React,{useEffect,useContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Components/LoginPage/LoginPage';
import Home from '../Components/Home';
import SignUp from '../Components/SignUp/SignUp';
import { AuthContext, FirebaseContext } from '../Store/Contex';


function LayoutRoutes() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(()=>{
       firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
       })
  })
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/netflix-app" element={<Login />} />
        <Route path="/home/:userId" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default LayoutRoutes;

