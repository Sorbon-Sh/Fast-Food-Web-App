import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import Slider from "../layouts/Slider";
import Footer from "../layouts/Footer";
import Container from "../components/Container";

const Layout = () => {
  return (
    <Container>
      <Header />
      {/* Навигация и Слайдер в не Header для postion:sticky (tag main is sticky container) */}
      <Navigation />
      <Slider />
      <Outlet />

      <Footer />
    </Container>
  );
};

export default Layout;
