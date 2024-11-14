import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";


const Layout = () => {
    return (
   <main className="container mx-auto grid">
   <Header />
   <Outlet />
   </main>
      );
}

export default Layout