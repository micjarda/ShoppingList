import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainview from "./pages/mainview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
