import { Routes, Route } from "react-router-dom"

import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from "./pages/about/AboutPage";
import TermsPage from "./pages/terms/TermsPage";
import PrivacyPage from "./pages/privacy/PrivacyPage";

function App() {
  return (
    <div className="App font-jost">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/about" element={<AboutPage />} />
        <Route index path="/terms-and-conditions" element={<TermsPage />} />
        <Route index path="/privacy-policy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}

export default App;
