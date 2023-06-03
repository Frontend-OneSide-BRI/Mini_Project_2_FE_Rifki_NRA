import Home from "./views/HomePages";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./store";
import Navbar from "./components/NavbarComponent";
import Modal from "./components/ModalComponent";
import Footer from "./components/FooterComponent";
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
              <Modal />
              <Footer />
            </>
          }
        />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
