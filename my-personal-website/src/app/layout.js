"use client";
import { useState } from "react";
import './global.css';
import Navbar from './Navbar';
import HomePage from "./page";

export default function Layout() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <html lang="tr">
      <body>
        <Navbar onContactClick={() => setShowPopup(true)} />
        <HomePage showPopup={showPopup} setShowPopup={setShowPopup} />
      </body>
    </html>
  );
}