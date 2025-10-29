import { MdSpaceDashboard } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import { AiFillAudio } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { BrowserRouter } from 'react-router-dom';

export default function AdminPage() { 

return (

<div className='w-full h-screen flex bg-blue-200'>
  
  <div className='w-[300px] h-full  bg-green-200'>

    <Link to ="/admin/dashboard" className='w-full h-[50px] text-black text-[25px] font-bold flex justify-center items-center'>
      <MdSpaceDashboard />
      DASHBOARD
    </Link>

 <Link to ="/admin/users" className='w-full h-[50px]  text-black text-[25px] font-bold flex items-center justify-center'>
  <ImUsers />
      USERS
    </Link>

     <Link to = "/admin/items" className='w-full h-[50px] text-black text-[25px] font-bold  flex items-center justify-center'>
      <AiFillAudio />
      ITEMS
    </Link>

  

 <Link to = "/admin/bookings" className='w-full h-[50px]  text-black text-[25px] font-bold flex items-center justify-center'>
  <FaSave />
      BOOKINGS
    </Link>


  </div>

  <div className='w-full bg-yellow-400'></div>


   </div>
  







)









}