import { Route, Router, Routes } from "react-router-dom";
import Header from "../../components/Header";
import ContactUsPage from "../contactUsPage";
//import aboutUsPage from "../AboutUsPage";
import Gallery from "../gallery";
import AboutUsPage from "../aboutUsPage";
import Items from "../itemsPage";
export  default function HomePage() {
  return (
    <> 
    <Header />
    <div className="w-full h-[calc(100vh-100px)] bg-blue-500">
      <Routes>
        <Route path = "/contactUs" element ={<ContactUsPage />}>
        
        </Route>

        <Route path = "/aboutus" element ={<AboutUsPage />}>
        
        </Route>

      <Route path = "/gallery" element ={<Gallery />}>
       </Route>

      <Route path = "/items" element ={<Items />}>
        
        </Route>

     

      </Routes>
    </div>
    </>
  );
}