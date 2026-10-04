import { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data/profile.js";
import { useTheme } from "../context/ThemeContext.jsx";
import { useToast } from "../context/ToastContext.jsx";
import {
  IconSun,
  IconMoon,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  IconCopy,
  IconCheck,
} from "./Icons.jsx";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { showToast } = useToast();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      showToast(`Copied ${profile.email} to clipboard!`);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      showToast(`Email: ${profile.email}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      {/* Modern Sticky Navigation */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="header-brand-wrap">
            <NavLink to="/" end className="brand-logo" aria-label="Home" onClick={() => setMenuOpen(false)}>
              <span className="brand-badge">{profile.shortName}</span>
              <span className="brand-name">{profile.name}</span>
            </NavLink>

            <div className="availability-tag" title={profile.status}>
              <span className="status-dot" aria-hidden="true" />
              <span className="status-text">{profile.status}</span>
            </div>
          </div>

          {/* Navigation Drawer / Bar */}
          <nav id="site-nav" className={`site-nav ${menuOpen ? "open" : ""}`}>
            <div className="mobile-nav-header">
              <span className="mobile-nav-title">Menu</span>
              <button
                type="button"
                className="icon-btn close-menu-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="nav-links-wrap">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="nav-divider" aria-hidden="true" />

            <div className="nav-actions-group">
              <div className="nav-socials">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <IconGitHub size={18} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <IconLinkedIn size={18} />
                </a>
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="icon-btn theme-toggle"
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-outline btn-sm copy-email-btn"
                title="Copy email address"
              >
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>
          </nav>

          <div className="header-mobile-actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn theme-toggle-mobile"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>

            <button
              className={`menu-toggle ${menuOpen ? "open" : ""}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((val) => !val)}
            >
              <span className="menu-bar" />
              <span className="menu-bar" />
              <span className="menu-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <main id="content">
        <Outlet />
      </main>

      {/* Modern Footer with interactive copy widget & links */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-logo">{profile.shortName}</span>
              <p className="footer-bio">
                {profile.role} · Building modern, accessible web products with
                clean architecture and delightful user experiences.
              </p>
            </div>

            <div className="footer-contact-card">
              <span className="footer-contact-title">Let’s connect</span>
              <div className="footer-email-box">
                <IconMail size={16} />
                <span className="footer-email-text">{profile.email}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="footer-copy-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © {currentYear} {profile.name}. All rights reserved.
            </p>

            <div className="footer-social-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <IconGitHub size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                <IconLinkedIn size={16} />
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="footer-top-btn"
                aria-label="Scroll back to top"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
