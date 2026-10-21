import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Resume from "../pages/Resume.jsx";
import { ToastProvider } from "../context/ToastContext.jsx";

describe("Resume Page Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const renderResume = () => {
    return render(
      <MemoryRouter>
        <ToastProvider>
          <Resume />
        </ToastProvider>
      </MemoryRouter>
    );
  };

  it("renders the interactive digital CV by default", () => {
    renderResume();

    expect(screen.getByText(/CURRICULUM VITAE/i)).toBeInTheDocument();
    expect(screen.getByText(/Professional Summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Expertise/i)).toBeInTheDocument();
  });

  it("switches to the PDF preview tab when clicked", () => {
    renderResume();

    const pdfTabButton = screen.getByRole("button", { name: /PDF Document Preview/i });
    fireEvent.click(pdfTabButton);

    // Verify preview toolbar and embed container are rendered
    expect(screen.getByText("Avanish_Tiwari_Resume.pdf")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Open in Tab/i })).toBeInTheDocument();
    const downloadLinks = screen.getAllByRole("link", { name: /Download/i });
    expect(downloadLinks.length).toBeGreaterThan(0);
  });
});
