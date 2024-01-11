import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = () => {
  return (
    <>
        <Navbar />
        <main className="p-20 bg-[#e6ebf1]">
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout;