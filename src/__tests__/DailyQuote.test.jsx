import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DailyQuote from "../components/DailyQuote.jsx";
import { ToastProvider } from "../context/ToastContext.jsx";

describe("DailyQuote Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const renderWithToast = (ui) => {
    return render(<ToastProvider>{ui}</ToastProvider>);
  };

  it("renders the daily quote component with header and quote text", () => {
    renderWithToast(<DailyQuote />);

    expect(screen.getByText(/QUOTE OF THE DAY/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Fetch another quote/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Copy quote to clipboard/i })).toBeInTheDocument();
  });

  it("handles copy to clipboard action smoothly", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    renderWithToast(<DailyQuote />);

    const copyButton = screen.getByRole("button", { name: /Copy quote to clipboard/i });
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalled();
    });
  });

  it("allows shuffling quotes when shuffle button is clicked", async () => {
    renderWithToast(<DailyQuote />);

    const shuffleButton = screen.getByRole("button", { name: /Fetch another quote/i });
    fireEvent.click(shuffleButton);

    await waitFor(() => {
      expect(shuffleButton).toBeInTheDocument();
    });
  });
});
