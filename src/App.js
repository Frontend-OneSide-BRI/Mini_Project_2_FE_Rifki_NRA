import Home from "./views/HomePages";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./store";
function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
