import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import { ToastProvider } from "../context/ToastContext.jsx";

describe("Layout Component", () => {
  const renderLayout = () => {
    return render(
      <MemoryRouter>
        <ThemeProvider>
          <ToastProvider>
            <Layout />
          </ToastProvider>
        </ThemeProvider>
      </MemoryRouter>
    );
  };

  it("renders main navigation links correctly", () => {
    renderLayout();

    const homeLinks = screen.getAllByRole("link", { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);

    const aboutLinks = screen.getAllByRole("link", { name: /about/i });
    expect(aboutLinks.length).toBeGreaterThan(0);

    const projectLinks = screen.getAllByRole("link", { name: /projects/i });
    expect(projectLinks.length).toBeGreaterThan(0);

    const resumeLinks = screen.getAllByRole("link", { name: /resume/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
  });

  it("renders theme toggle button", () => {
    renderLayout();
    const themeBtn = screen.getByLabelText(/switch to (light|dark) mode/i);
    expect(themeBtn).toBeInTheDocument();
  });
});
