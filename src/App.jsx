import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aiplan from "./pages/AiPlan";
import Header from "./components/layout/Header"; // Header에서 Link 사용

function App() {
	return (
    <Router>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aiPlan" element={<Aiplan />} />
        </Routes>
    </Router>
);
}

export default App;
