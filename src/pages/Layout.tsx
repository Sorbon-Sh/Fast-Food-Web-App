import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/Container";
import Navigation from "@/layouts/Navigation";
import { Toaster } from "react-hot-toast";
import Carousel from "@/layouts/Carousel";
import OrderModal from "@/components/OrderModal";
import { createPortal } from "react-dom";

import { useEffect } from "react";

const Layout = () => {
  const category = sessionStorage.getItem("state");
  useEffect(() => {
    sessionStorage.setItem("state", category || "pizza");
  }, [category]);

  return (
    <>
      <Header />
      <Toaster />
      <Container>
        <Navigation />
        <Carousel />
        <Outlet />
        {createPortal(<OrderModal />, document.body)}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
