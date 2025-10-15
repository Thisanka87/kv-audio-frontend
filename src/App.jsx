
import './App.css'
//import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
   <div className='w-full h-screen flex bg-blue-200'>
  
  <div className='w-[300px] h-full flex bg-green-200 justify-center item-center'>

    <button className='w-full h-[50px] bg-blue-500,text-bloack text-[25px] font-bold'>
      DASHBOARD
    </button>

    <button className='w-full,h-[50px],bg-blue-500,text-black,text-[25px],font-bold'>
    BOOKINGS
    </button>
    <button className='w-full,h-[50px],bg-blue-500,text-black,text-[25px],font-bold'>
    ITEMS
    </button>
    <button className='w-full,h-[50px],bg-blue-500,text-black,text-[25px],font-bold'> 
      USERS
    </button>




  </div>

  <div className='w-full bg-red-700'></div>


   </div>
  


    </>
  )
}

export default App
