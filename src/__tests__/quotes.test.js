import { describe, it, expect } from "vitest";
import { quotes, getDailyQuote, formatQuoteDate } from "../data/quotes.js";

describe("Quotes Data & Utility Functions", () => {
  it("contains a non-empty array of valid quote objects", () => {
    expect(Array.isArray(quotes)).toBe(true);
    expect(quotes.length).toBeGreaterThan(0);

    quotes.forEach((q) => {
      expect(q).toHaveProperty("text");
      expect(typeof q.text).toBe("string");
      expect(q.text.length).toBeGreaterThan(0);

      expect(q).toHaveProperty("author");
      expect(typeof q.author).toBe("string");
      expect(q.author.length).toBeGreaterThan(0);

      expect(q).toHaveProperty("category");
      expect(typeof q.category).toBe("string");
    });
  });

  it("getDailyQuote returns a quote deterministically for a given date", () => {
    const fixedDate = new Date(2026, 9, 12); // Oct 12, 2026
    const quote1 = getDailyQuote(fixedDate);
    const quote2 = getDailyQuote(fixedDate);

    expect(quote1).toBeDefined();
    expect(quote1).toEqual(quote2);
    expect(quotes).toContain(quote1);
  });

  it("formatQuoteDate correctly formats the provided date", () => {
    const testDate = new Date("2026-10-12T12:00:00Z");
    const formatted = formatQuoteDate(testDate);
    expect(formatted).toMatch(/Oct.*12.*2026/);
  });
});
