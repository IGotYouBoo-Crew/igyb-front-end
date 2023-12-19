import { Routes, Route } from "react-router-dom"

import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ForumPage from "./pages/forum/ForumPage";
import ForumPostPage from "./pages/forumPostPage/ForumPostPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="App font-jost">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/about" element={<AboutPage />} />
        <Route index path="/forum" element={<ForumPage />} />
        <Route path="/forum/:id" element={<ForumPostPage />} />
        <Route index path="/events" element={<EventsPage />} />
        <Route index path="/contact" element={<ContactPage />} />
        <Route index path="/terms-and-conditions" element={<TermsPage />} />
        <Route index path="/privacy-policy" element={<PrivacyPage />} />
        <Route index path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
