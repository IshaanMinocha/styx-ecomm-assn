import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import WhatsappIcon from "./components/WhatsappIcon";
import About from "./pages/About";
import Support from "./pages/Support";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <WhatsappIcon />
            <Home />
            <BackToTop />
          </>
        }
        />
        <Route path="/about" element={
          <>
            <Navbar />
            <WhatsappIcon />
            <About />
          </>
        } />
        <Route path="/support" element={
          <>
            <Navbar />
            <WhatsappIcon />
            <Support />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Navbar />
            <WhatsappIcon />
            <Cart />
            <BackToTop />
          </>
        } />
        <Route path="/shop" element={
          <>
            <Navbar />
            <WhatsappIcon />
            <Shop />
            <BackToTop />
          </>
        } />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
