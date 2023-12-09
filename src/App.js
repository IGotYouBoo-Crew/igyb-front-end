import { Routes, Route } from "react-router-dom"

import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <div className="App font-jost">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
