
import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`ts-scroll-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      style={{ display: "none" }}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
 
