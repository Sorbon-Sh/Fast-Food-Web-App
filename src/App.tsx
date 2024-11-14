/**
 //* @format
 */

import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";

function App() {
  return (
    <main className="container m-auto template gap-y-3 gap-x-12">
      <Header />

      <Navigation />

      <Content />

      <Footer />
    </main>
  );
}

export default App;
