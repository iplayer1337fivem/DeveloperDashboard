import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage setDarkMode={setDarkMode} darkMode={darkMode} />}
        />{" "}
        {/* Home page should be at the root */}
        <Route
          path="/developerDashboard"
          element={
            <DeveloperDashboard setDarkMode={setDarkMode} darkMode={darkMode} />
          }
        />
        <Route
          path="/about"
          element={<About setDarkMode={setDarkMode} darkMode={darkMode} />}
        />
        <Route
          path="/faq"
          element={<FAQ setDarkMode={setDarkMode} darkMode={darkMode} />}
        />
        <Route
          path="/terms"
          element={<Terms setDarkMode={setDarkMode} darkMode={darkMode} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
