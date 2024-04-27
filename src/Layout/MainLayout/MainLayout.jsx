import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <div className="h-14">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-172px)] mt-12">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
