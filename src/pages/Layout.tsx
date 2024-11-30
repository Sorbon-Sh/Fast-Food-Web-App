import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Container from "../components/Container";

const Layout = () => {
  return (
    <>
      {/* Sticky container for navigation */}
      <Container>
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
