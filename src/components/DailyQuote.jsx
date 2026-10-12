import { useState, useEffect, useCallback } from "react";
import { getDailyQuote, quotes, formatQuoteDate } from "../data/quotes.js";
import { useToast } from "../context/ToastContext.jsx";
import {
  IconQuote,
  IconRefresh,
  IconCopy,
  IconCheck,
  IconSparkles,
} from "./Icons.jsx";

export default function DailyQuote() {
  const { showToast } = useToast();
  const [currentQuote, setCurrentQuote] = useState(() => getDailyQuote());
  const [isDaily, setIsDaily] = useState(true);
  const [copied, setCopied] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [todayFormatted, setTodayFormatted] = useState(() => formatQuoteDate());

  // Check and update if date changes while page is open (e.g., past midnight)
  useEffect(() => {
    const updateForNewDay = () => {
      const now = new Date();
      setTodayFormatted(formatQuoteDate(now));
      if (isDaily) {
        setCurrentQuote(getDailyQuote(now));
      }
    };

    // Calculate ms until next midnight + 1 second
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const msUntilMidnight = tomorrow.getTime() - now.getTime() + 1000;

    const timer = setTimeout(() => {
      updateForNewDay();
      // Then check every hour
      const interval = setInterval(updateForNewDay, 1000 * 60 * 60);
      return () => clearInterval(interval);
    }, msUntilMidnight);

    return () => clearTimeout(timer);
  }, [isDaily]);

  // Transition quote change smoothly
  const applyNewQuote = useCallback((nextQuote, isOfficialDaily = false) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentQuote(nextQuote);
      setIsDaily(isOfficialDaily);
      setIsFading(false);
    }, 200);
  }, []);

  // Fetch a live random quote or rotate from curated dataset
  const handleShuffle = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      // Attempt live public API fetch with short timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const res = await fetch("https://dummyjson.com/quotes/random", {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        applyNewQuote(
          {
            text: data.quote,
            author: data.author,
            category: "Live Discovery",
          },
          false
        );
        showToast("Fetched fresh inspiration live!");
        setIsLoading(false);
        return;
      }
    } catch {
      // Offline or network error - smoothly fallback to curated quotes
    }

    // Fallback: pick a different curated quote
    const filtered = quotes.filter((q) => q.text !== currentQuote.text);
    const randomFallback =
      filtered[Math.floor(Math.random() * filtered.length)] || quotes[0];
    applyNewQuote(randomFallback, false);
    showToast("Rotated to a new inspiration!");
    setIsLoading(false);
  };

  // Reset to today's designated daily quote
  const handleResetToDaily = () => {
    const daily = getDailyQuote();
    applyNewQuote(daily, true);
    showToast("Returned to today's daily creed!");
  };

  // Copy quote text
  const handleCopy = async () => {
    const formatted = `“${currentQuote.text}” — ${currentQuote.author}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      showToast("Quote copied to clipboard!");
      setTimeout(() => setCopied(false), 2200);
    } catch {
      showToast(formatted);
    }
  };

  return (
    <aside
      className="personal-quote-card"
      aria-label="Quote of the Day"
    >
      <div className="quote-card-header">
        <div className="quote-badge-group">
          <span className="quote-status-pill">
            <span className="quote-pulse-dot" aria-hidden="true" />
            <IconSparkles size={12} />
            <span>{isDaily ? "QUOTE OF THE DAY" : "LIVE INSPIRATION"}</span>
          </span>
          <span className="quote-date-label">
            {todayFormatted}
          </span>
        </div>

        <div className="quote-actions-group">
          {!isDaily && (
            <button
              type="button"
              className="quote-action-btn quote-reset-btn"
              onClick={handleResetToDaily}
              title="Return to today's official quote"
            >
              Today&apos;s Quote
            </button>
          )}

          <button
            type="button"
            className="quote-action-btn"
            onClick={handleShuffle}
            disabled={isLoading}
            title="Fetch another quote"
            aria-label="Fetch another quote"
          >
            <IconRefresh
              size={15}
              className={`quote-btn-icon ${isLoading ? "is-spinning" : ""}`}
            />
            <span className="quote-btn-text">Shuffle</span>
          </button>

          <button
            type="button"
            className="quote-action-btn"
            onClick={handleCopy}
            title="Copy quote to clipboard"
            aria-label="Copy quote to clipboard"
          >
            {copied ? (
              <>
                <IconCheck size={15} className="quote-btn-icon text-success" />
                <span className="quote-btn-text">Copied</span>
              </>
            ) : (
              <>
                <IconCopy size={15} className="quote-btn-icon" />
                <span className="quote-btn-text">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div
        className={`quote-content-body ${isFading ? "is-transitioning" : ""}`}
      >
        <div className="quote-watermark" aria-hidden="true">
          <IconQuote size={38} />
        </div>
        <blockquote className="quote-text">
          &ldquo;{currentQuote.text}&rdquo;
        </blockquote>

        <div className="quote-footer">
          <cite className="quote-author">&mdash; {currentQuote.author}</cite>
          {currentQuote.category && (
            <span className="quote-category-tag">
              {currentQuote.category}
            </span>
          )}
        </div>
      </div>
    </aside>
  );
}
