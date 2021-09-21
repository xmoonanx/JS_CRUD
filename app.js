const title = document.querySelector("div.hello h1");

function handleTitleCilck() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleCilck);
