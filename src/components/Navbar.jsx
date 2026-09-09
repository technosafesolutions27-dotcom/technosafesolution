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
              Fire Safety & Protection Solutions
            </span>

            <span className="ts-nav-separator"></span>

            <a
              href="mailto:sales@technosafe.in"
              className="ts-nav-top-item"
            >
              <i className="fa-solid fa-envelope"></i>
              sales@technosafe.in
            </a>

          </div>

          <a
            href="tel:+919813055906"
            className="ts-nav-top-item"
          >
            <i className="fa-solid fa-phone"></i>
            +91 98130 55906
          </a>

        </div>
      </div>


      {/* =========================================================
          MAIN NAVIGATION
      ========================================================= */}
      <nav className="ts-nav-main">

        <div className="container ts-nav-inner">

          {/* =====================================================
              LOGO
          ===================================================== */}
          <NavLink
            to="/"
            className="ts-nav-logo"
            onClick={() => setOpen(false)}
          >

            <div className="ts-logo-text">

              {/* TECHNOSAFE */}
              <div className="ts-logo-brand">

                <span className="ts-logo-brand-name">
                  TECHNOSAFE
                </span>

                <span className="ts-logo-tm">
                  ™
                </span>

              </div>


              {/* CERTIFICATION + SOLUTIONS */}
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
              DESKTOP / MOBILE MENU
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


            {/* CTA */}
            <NavLink
              to="/contact"
              className="ts-nav-button"
              onClick={() => setOpen(false)}
            >
              Get Safety Audit
              <i className="fa-solid fa-arrow-right"></i>
            </NavLink>

          </div>


          {/* =====================================================
              MOBILE TOGGLE
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