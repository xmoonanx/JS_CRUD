const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleCilck() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}
h1.addEventListener("click", handleTitleCilck);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//title.onclick = handleMouseEnter;
// title.addEventListener(“mouseenter” , handleMouseEnter);

// 위에 두 코드는 동일하나 addEventListener를 선호하는 이유는
// removeEventListener을 통해서 event listener을 제거할수있기 때문이다.

// document에서 body,head,title 은 중요해서 언제든
// ex) document.body 로 가져올수있지만
// div나 h1 등 element 들은 querySelector getElementById등으로 찾아야한다.
// ex) document.querySelector(“h1”);

// window는 기본제공
// function handleWindowResize(){
// document.body.style.backgroundColor = “tomato”;
// }
// function handleWindowCopy(){
// alert(“copier”);
// }

// window.addEventListener(“resize”, handleWindowResize);
// window.addEventListener(“copy”, handleWindowCopy);
