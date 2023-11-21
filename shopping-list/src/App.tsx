import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Mainview from "./pages/mainview";
import List from "./pages/list";
import Share from "./pages/share";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainview />} />
        <Route path="/:id" element={<List />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
