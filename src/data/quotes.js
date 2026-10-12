/**
 * Curated collection of inspiring engineering, technology, craftsmanship,
 * and growth quotes for daily inspiration.
 */
export const quotes = [
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
    category: "Consistency",
  },
  {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    category: "Architecture",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: "Problem Solving",
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
    category: "Engineering",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    category: "Clean Code",
  },
  {
    text: "The details are not the details. They make the design.",
    author: "Charles Eames",
    category: "Design",
  },
  {
    text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
    category: "Minimalism",
  },
  {
    text: "Software is a great combination between artistry and engineering.",
    author: "Bill Gates",
    category: "Craftsmanship",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "Readability",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    category: "Execution",
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
    category: "UX & Quality",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    category: "Product Mindset",
  },
  {
    text: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
    category: "Architecture",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    category: "Simplicity",
  },
  {
    text: "Good code is its own best documentation.",
    author: "Steve McConnell",
    category: "Clean Code",
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "Action",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    category: "Efficiency",
  },
  {
    text: "The function of good software is to make the complex appear simple.",
    author: "Grady Booch",
    category: "Engineering",
  },
  {
    text: "Continuous improvement is better than delayed perfection.",
    author: "Mark Twain",
    category: "Iteration",
  },
  {
    text: "Testing leads to failure, and failure leads to understanding.",
    author: "Burt Rutan",
    category: "Testing",
  },
  {
    text: "The only way to go fast is to go well.",
    author: "Robert C. Martin",
    category: "Quality",
  },
  {
    text: "A user interface is like a joke. If you have to explain it, it’s not that good.",
    author: "Martin LeBlanc",
    category: "UI / UX",
  },
  {
    text: "Discipline is choosing between what you want now and what you want most.",
    author: "Abraham Lincoln",
    category: "Focus",
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
    category: "Habits",
  },
  {
    text: "Small daily improvements over time lead to stunning results.",
    author: "Robin Sharma",
    category: "Growth",
  },
  {
    text: "Clean code always looks like it was written by someone who cares.",
    author: "Michael Feathers",
    category: "Craftsmanship",
  },
  {
    text: "Premature optimization is the root of all evil.",
    author: "Donald Knuth",
    category: "Optimization",
  },
  {
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    category: "Learning",
  },
  {
    text: "Great web apps are fast, resilient, and invisible in their friction.",
    author: "Engineering Creed",
    category: "Performance",
  },
  {
    text: "It's not about being the best. It's about being better than you were yesterday.",
    author: "Personal Creed",
    category: "Self-Growth",
  },
  {
    text: "Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.",
    author: "David Leinweber",
    category: "Humor",
  },
  {
    text: "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard",
    category: "Agile",
  },
  {
    text: "The most impactful engineers are those who bridge the gap between human needs and technical systems.",
    author: "Avanish Tiwari",
    category: "Philosophy",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    category: "Innovation",
  },
  {
    text: "Computers are good at following instructions, but not at reading your mind.",
    author: "Donald Knuth",
    category: "Precision",
  },
  {
    text: "Focus is a muscle: the more you train it on one problem at a time, the deeper your impact.",
    author: "Engineering Creed",
    category: "Focus",
  },
];

/**
 * Returns the deterministic quote for a given date.
 * Every calendar day (00:00 to 23:59) maps to a distinct quote,
 * ensuring daily live changes without requiring server updates.
 *
 * @param {Date} [date=new Date()]
 * @returns {typeof quotes[0]}
 */
export function getDailyQuote(date = new Date()) {
  const year = date.getFullYear();
  // Day of the year (1 - 366)
  const startOfYear = new Date(year, 0, 1);
  const diffInMs = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diffInMs / (1000 * 60 * 60 * 24)) + 1;

  // Salt with year to vary rotation each year
  const seed = (year * 137) + dayOfYear;
  const index = Math.abs(seed) % quotes.length;
  return quotes[index];
}

/**
 * Formats a date for display in the quote header.
 * e.g., "Oct 12, 2026"
 */
export function formatQuoteDate(date = new Date()) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
