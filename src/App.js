import Home from "./views/HomePages";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./store";
import Navbar from "./components/NavbarComponent";
import Modal from "./components/ModalComponent";
import Footer from "./components/FooterComponent";
import Gallery from "./views/GalleryPages";
function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Navbar className="bg-dark pb-5" />
              <Gallery />
              <Footer />
            </>
          }
        />
      </Routes>
      <Modal />
    </GlobalProvider>
  );
}

export default App;
