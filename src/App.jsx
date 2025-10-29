
import './App.css'
//import { MdSpaceDashboard } from "react-icons/md";
//import { ImUsers } from "react-icons/im";
//import { AiFillAudio } from "react-icons/ai";
//import { FaSave } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './components/adminPage';
import  HomePage  from './pages/HomePage/homePage';
//import ProductCard from './components/productCard'

function App() {
  

  return (
    <BrowserRouter>
      <Routes >
      <Route path = "/admin/*" element ={<AdminPage />} />
     <Route path = "/*" element = {<HomePage/>}/>
     
        
      </Routes>
    </BrowserRouter>
  )
}

export default App




