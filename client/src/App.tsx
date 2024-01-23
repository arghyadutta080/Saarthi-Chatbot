import React from "react";
import AuthPage from "./pages/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
