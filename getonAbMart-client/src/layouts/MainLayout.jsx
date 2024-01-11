import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div >
           <div ><Navbar/></div>
           <div className="px-[5%] md:px-[10%]"><Outlet/></div>
           <div><Footer/></div>
        </div>
    );
};

export default MainLayout;