import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/Container";
import Navigation from "@/layouts/Navigation";
import { Toaster } from "react-hot-toast";
import Carousel from "@/layouts/Carousel";
import OrderModal from "@/components/OrderModal";

const Layout = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Container>
        <Navigation />
        <Carousel />
        <Outlet />
        <OrderModal />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
