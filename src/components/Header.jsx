import { Link } from "react-router-dom";

export default function Header(){
    return(


        <header className="w-full h-[100px] bg-green-200 flex justify-center shadow-xl  relative">

          <img src="logo.jpg" alt="logo" className="w-[40px],h-[40px] border-[3px], absolut left-1 rounded-full" />

        <Link to ="/"className="text-[25px]font-bold m-2 ">
        HOME
        </Link>

        <Link to = "/AboutUs"className="text-[25px]font-bold m-2 ">
        ABOUT US
        </Link>

        <Link to = "/contactUs"className="text-[25px]font-bold m-2 ">
        CONTACT US
        </Link>

        <Link to ="/gallery"className="text-[25px]font-bold m-2">
        GALLERY
        </Link>

        <Link to ="/items"className="text-[25px]font-bold m-2">
        ITEMS
        </Link>

      </header>
    )





}