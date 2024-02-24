import React,{useEffect,useContext} from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { originals,action,romance,documentaries,horror,comedy } from './Urls'
import Login from './Components/LoginPage/LoginPage'
import LayoutRoutes from './LayoutRoutes/LayoutRoutes'
import { AuthContext } from './Store/Contex';

function App() {

  return (
    <div>

     <LayoutRoutes/>
     
    </div>
  )
}

export default App

