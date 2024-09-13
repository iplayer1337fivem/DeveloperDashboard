// App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DeveloperDashboard from "./pages/DeveloperDashboard";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import AnalyticsWrapper from "./components/AnalyticsWrapper"; // Import the AnalyticsWrapper component

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [downloadImageCounter, setDownloadImageCounter] = useState(0); // Fixed typo in variable name

  return (
    <BrowserRouter>
      <AnalyticsWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                downloadImageCounter={downloadImageCounter} // Fixed typo
                setDownloadImageCounter={setDownloadImageCounter}
              />
            }
          />
          <Route
            path="/developerDashboard"
            element={
              <DeveloperDashboard
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                downloadImageCounter={downloadImageCounter} // Fixed typo
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                downloadImageCounter={downloadImageCounter} // Fixed typo
              />
            }
          />
          <Route
            path="/faq"
            element={
              <FAQ
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                downloadImageCounter={downloadImageCounter} // Fixed typo
              />
            }
          />
          <Route
            path="/terms"
            element={
              <Terms
                setDarkMode={setDarkMode}
                darkMode={darkMode}
                downloadImageCounter={downloadImageCounter} // Fixed typo
              />
            }
          />
        </Routes>
      </AnalyticsWrapper>
    </BrowserRouter>
  );
}

export default App;
