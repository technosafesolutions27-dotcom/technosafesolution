import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/products", "Products"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ts-nav">

      {/* =========================================================
          TOP BAR
      ========================================================= */}
      <div className="ts-nav-top">
        <div className="container ts-nav-top-inner">

          <div className="ts-nav-top-left">

            <span className="ts-nav-top-item">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Fire Safety & Protection Solutions</span>
            </span>

            <span className="ts-nav-separator"></span>

            <a
              href="mailto:sales@technosafe.in"
              className="ts-nav-top-item"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>sales@technosafe.in</span>
            </a>

          </div>


          <a
            href="tel:+919813055906"
            className="ts-nav-top-item"
          >
            <i className="fa-solid fa-phone"></i>
            <span>+91 98130 55906</span>
          </a>

        </div>
      </div>


      {/* =========================================================
          MAIN NAVIGATION
      ========================================================= */}
      <nav className="ts-nav-main">

        <div className="container ts-nav-inner">

          {/* =====================================================
              TEXT LOGO
          ===================================================== */}
          <NavLink
            to="/"
            className="ts-nav-logo"
            onClick={() => setOpen(false)}
          >

            <div className="ts-logo-text">

              {/* =================================================
                  TECHNOSAFE WORDMARK
              ================================================= */}
              <div className="ts-logo-brand">

                <span className="ts-logo-brand-name">
                  TECHNOSAFE
                </span>

                {/* TM stays inside brand but is ABSOLUTE */}
                <span className="ts-logo-tm">
                  ™
                </span>

              </div>


              {/* =================================================
                  LOGO BOTTOM
              ================================================= */}
              <div className="ts-logo-bottom">

                <span className="ts-logo-certified">
                  ISO 9001:2015 CERTIFIED COMPANY
                </span>

                <span className="ts-logo-solutions">
                  SOLUTIONS.
                </span>

              </div>

            </div>

          </NavLink>


          {/* =====================================================
              NAVIGATION MENU
          ===================================================== */}
          <div className={`ts-nav-menu ${open ? "open" : ""}`}>

            <div className="ts-nav-links">

              {links.map(([path, label]) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `ts-nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              ))}

            </div>


            {/* =================================================
                CTA BUTTON
            ================================================= */}
            <NavLink
              to="/contact"
              className="ts-nav-button"
              onClick={() => setOpen(false)}
            >
              <span>Get Safety Audit</span>
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

          </div>


          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <button
            type="button"
            className={`ts-nav-toggle ${open ? "active" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </nav>

    </header>
  );
}