const quotes = [
  {
    quote: "xxck you nvidia.",
    author: "  - Linus Torvalds",
  },
  {
    quote: "Do you guys not have phones?",
    author: "  - Wyatt Cheng",
  },
  {
    quote:
      "Look, Valve, all I'm saying is you gives us the Half Life license and we'll take care of the rest.",
    author: "  - Neil Druckmann",
  },
  {
    quote: "Don't be lazy, stupid woojin.",
    author: "  - T.Daejang",
  },
  {
    quote: "The strongest person is the person who isn't scared to be alone.",
    author: "  - Queen's Gambit, Alice",
  },
  {
    quote:
      "My experience has taught me what you know isn't always what's important.",
    author: "  - Queen's Gambit, Alma",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
