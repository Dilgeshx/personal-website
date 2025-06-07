"use client";
import { useState } from "react";
import './global.css';
import Navbar from './Navbar';
import HomePage from "./page";

export default function Layout() {
  const [theme, setTheme] = useState("light");

  return (
    <html lang="tr">
      <body>
        <Navbar theme={theme} setTheme={setTheme} />
        <HomePage theme={theme} />
      </body>
    </html>
  );
}