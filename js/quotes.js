const quotes = [
  {
    quote: "xxck you nvidia.",
    author: "Linus Torvalds",
  },
  {
    quote: "Do you guys not have phones?",
    author: "Wyatt Cheng",
  },
  {
    quote:
      "Look, Valve, all I'm saying is you gives us the Half Life license and we'll take care of the rest.",
    author: "Neil Druckmann",
  },
  {
    quote: "Don't be lazy, stupid woojin.",
    author: "T.Daejang",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
