import Home from "./views/HomePages";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./store";
import Navbar from "./components/NavbarComponent";
import Modal from "./components/ModalComponent";
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
            </>
          }
        />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
