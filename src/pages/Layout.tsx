import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Navigation from "../layouts/Navigation";
import Slider from "../layouts/Slider";
import Footer from "../layouts/Footer";

const Layout = () => {
  return (
    <main className="container template mx-auto">
      <Header />
      {/* Навигация и Слайдер в не Header для postion:sticky (tag main is sticky container) */}
      <Navigation />
      <Slider />
      <Outlet />

      <Footer />
    </main>
  );
};

export default Layout;
