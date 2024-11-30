import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "@/components/layout/Footer";
import Container from "../components/Container";
import Slider from "../layouts/Slider";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Slider />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
