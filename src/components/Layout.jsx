import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { profile } from "../data/profile.js";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="site">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" end className="logo" onClick={closeMenu}>
          {profile.shortName}
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "site-nav open" : "site-nav"}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>Designed and developed by {profile.name}</p>
        <p>© {year} {profile.name}</p>
        <p className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
