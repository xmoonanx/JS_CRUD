const title = document.querySelector("div.hello h1");

function handleTitleCilck() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleCilck);

// - ���� js������ �ֱ� ������ js�� ���� html�� ������ ������ �� �ִ� ����
// - document�� html�� js������ load�ϱ� ������ ���� �� �� ������ browser�� �츮�� document�� ������ �� �ְ� ����
// - element�� ���θ� ���� ������ console.dir()
// �⺻������ object�� ǥ���� element�� ������(���� js object��)
// �� element �� �տ� on�� ���� �͵��� event��
// - event: � ������ �ϴ� ��
// ��� event�� js�� listen�� �� ����
// - eventListener : event�� listen�� �� js���� ���� event�� listen�ϰ� ���� �� �˷���� ��
// - title.addEventListener("click") : �������� title�� click�ϴ� ���� listen�� ���� �� ���𰡸� �������

// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
// title.style.color = "blue";
// }
// title.addEventListener("click",handleTitleClick);
// //click�ϸ� handleTitleClick�̶�� function�� �����ϱ� ����
// //�׷��� handle~ �Լ��� () �� �ȳ��� ����
// //��, js�� ��� ��������ֱ� �ٶ�� ����!

// - function�� js���� �Ѱ��ְ� ������ title�� click�� ��쿡 js�� �����ư�� ��� �����ֱ� �ٶ�� ����( ���� handleTitleClick(); �̷��� �ϴ� ���� �ƴ϶�)
// - �Լ����� () �� �� ��ȣ�� �߰������ν� �����ư�� ���� �� �ִ� ����
