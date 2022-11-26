"use client";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/Navigation.scss";
import "../styles/Footer.scss";
import "../styles/VacationPanel.scss";

import Providers from "./Providers";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";

import { useState } from "react";

export default function RootLayout({ children }) {
  const [colorMode, setColorMode] = useState("dark");

  const lightMode = () => {
    setColorMode("light");
  };

  const darkMode = () => {
    setColorMode("dark");
  };

  return (
    <html>
      <head />
      <body className={`App ${colorMode}`}>
        <Providers>
          <Navigation lightMode={lightMode} darkMode={darkMode} />
          <div className="page-content">
            <div className="container">{children}</div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
