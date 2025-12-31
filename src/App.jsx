import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Anchor from "./pages/Anchor";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout ";

const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/anchor" element={<Anchor />} />
          <Route path="/product" element={<Product />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/checkout" element={<Checkout  />} />

        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
