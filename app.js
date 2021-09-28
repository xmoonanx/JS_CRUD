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

// //JS�� HTML�� element�� ��������
// ������ element�� eventlistener �߰�
// event�� �߻��ϸ� function�� ���� !
