import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/Container";
import Navigation from "@/layouts/Navigation";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <Toaster toastOptions={{ className: "" }} />
      <Container className="pb-10">
        <Navigation />
        {/* <Slider /> */}
        <div>Slider в ремонте</div>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
