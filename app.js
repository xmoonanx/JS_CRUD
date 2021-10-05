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
// title.addEventListener(��mouseenter�� , handleMouseEnter);

// ���� �� �ڵ�� �����ϳ� addEventListener�� ��ȣ�ϴ� ������
// removeEventListener�� ���ؼ� event listener�� �����Ҽ��ֱ� �����̴�.

// document���� body,head,title �� �߿��ؼ� ������
// ex) document.body �� �����ü�������
// div�� h1 �� element ���� querySelector getElementById������ ã�ƾ��Ѵ�.
// ex) document.querySelector(��h1��);

// window�� �⺻����
// function handleWindowResize(){
// document.body.style.backgroundColor = ��tomato��;
// }
// function handleWindowCopy(){
// alert(��copier��);
// }

// window.addEventListener(��resize��, handleWindowResize);
// window.addEventListener(��copy��, handleWindowCopy);
