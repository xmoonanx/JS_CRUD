const title = document.querySelector("div.hello h1");

console.dir(title);
function handleTitleCilck() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleCilck);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

// //JS로 HTML의 element를 가져오고
// 가져온 element에 eventlistener 추가
// event가 발생하면 function이 실행 !
