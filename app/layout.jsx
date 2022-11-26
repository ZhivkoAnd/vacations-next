"use client";

import "../styles/globals.scss";
import "../styles/Navigation.scss";
import "../styles/Footer.scss";

import Navigation from "./Navigation";
import Footer from "./Footer";

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
        <Navigation lightMode={lightMode} darkMode={darkMode} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
