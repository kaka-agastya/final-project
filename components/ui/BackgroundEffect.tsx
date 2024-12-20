"use client";

import { useState, useEffect } from "react";

export default function BackgroundEffect() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan atau sembunyikan efek berdasarkan posisi scroll
      setIsVisible(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener saat komponen dilepas
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`background-effect ${!isVisible ? "background-hidden" : ""}`}
    ></div>
  );
}
