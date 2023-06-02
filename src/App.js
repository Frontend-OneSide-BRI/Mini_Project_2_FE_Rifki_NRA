import Home from "./views/HomePages";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./store";
import Navbar from "./components/NavbarComponent";
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
            </>
          }
        />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
