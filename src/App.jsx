import { Routes, Route } from "react-router-dom";
import HeroPage from "./components/HeroPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
