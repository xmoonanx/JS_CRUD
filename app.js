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

//style�� ������ ������ CSS
// animation�� ������ ������ JS
// css���Ͽ�
// h1 {
// color: cornflowerblue;
// }
// .clicked {
// color: tomato;
// }
// �� ����
// js������ h1�� active class�� �����ϴ°Ŵ�.
// const h1 = document.querySelector("div.hello:first-child h1");
// function handleTitleClick() {
// if(h1.className === "clicked") {
// h1.className = "";
// } else {
// h1.className = "clicked";
// }
// }
// h1.addEventListener("click", handleTitleClick);
// ���⼭ JS�� HTML�� �����ҰŰ�, CSS�� HTML�� �ٶ󺸰� style�� �����Ѵ�.
// �ٵ� ���� ������ �ִ� active�� �츮�� ������ �̸��̴�. raw value��� �ϴµ�, �̸��� �ٲٴٰ� ������ �߻��� ���� �ִ�. const�� �����ض�.
// function handleTitleClick() {
// const clickedClass = "clicked";
// if(h1.className === clickedClass) {
// h1.className = "";
// } else {
// h1.className = clickedClass;
// }
// }
// �̷��� �ۼ��ϸ� ������ �߻��� �� �ִ� �κ��� ����Ѵ�.

// �׷���, html�� h1�� sexy-font��� class name�� �־��µ� js�� �����ϴ� ��ü�Ǿ���.
// ������ class name�� �������.., sexy-font��� class name�� �����ϰ� ������ �̰� ��� �ؾ��ϴ°�.
// const clickedClass = "clicked sexy-font";�� �߰��ϸ� �Ǳ� �ϴµ� ���� ����� �ƴϴ�. class�� �߰��� ������ js�� css���� ������Ʈ�� ��� �ؾ��ϴϱ�.
// �츮�� �ؾ��ϴ°� js�� ��� class name�� �������� �ʴ°Ŵ�. �� sexy-font�� �������� �ʰ� clicked class�� �����ϰ� �ʹٴ°���. �������󿡼�.
