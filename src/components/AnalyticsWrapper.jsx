// AnalyticsWrapper.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const AnalyticsWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics with your GA4 Measurement ID
    ReactGA.initialize("G-VFLWH2WPPE"); // Replace with your GA4 Measurement ID
  }, []);

  useEffect(() => {
    // Send a pageview event whenever the route changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsWrapper;
