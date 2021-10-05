const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleCilck() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleCilck);

//style에 적합한 도구는 CSS
// animation에 적합한 도구는 JS
// css파일에
// h1 {
// color: cornflowerblue;
// }
// .clicked {
// color: tomato;
// }
// 를 적고
// js에서는 h1에 active class를 전달하는거다.
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
// if(h1.className === "clicked") {
// h1.className = "";
// } else {
// h1.className = "clicked";
// }
// }
// h1.addEventListener("click", handleTitleClick);
// 여기서 JS는 HTML을 변경할거고, CSS는 HTML을 바라보고 style을 변경한다.
// 근데 조금 문제가 있는 active는 우리가 지어준 이름이다. raw value라고 하는데, 이름을 바꾸다가 에러가 발생할 수도 있다. const로 지정해라.
// function handleTitleClick() {
// const clickedClass = "clicked";
// if(h1.className === clickedClass) {
// h1.className = "";
// } else {
// h1.className = clickedClass;
// }
// }
// 이렇게 작성하면 에러가 발생할 수 있는 부분을 축소한다.

// 그런데, html의 h1에 sexy-font라는 class name이 있었는데 js를 실행하니 교체되었다.
// 최초의 class name이 사라졌고.., sexy-font라는 class name을 간직하고 싶은데 이건 어떻게 해야하는가.
// const clickedClass = "clicked sexy-font";에 추가하면 되긴 하는데 좋은 방법은 아니다. class를 추가할 때마다 js랑 css에서 업데이트를 계속 해야하니까.
// 우리가 해야하는건 js로 모든 class name을 변경하지 않는거다. 이 sexy-font를 삭제하지 않고 clicked class를 변경하고 싶다는거지. 다음영상에서.
