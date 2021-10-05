const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleCilck() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleCilck);

//classList �츮�� class���� ������� �۾��Ҽ� �ְԲ� ������ش�.
// className�� ����calss�� ��������ʰ� ���� ��ü�� ������.

// classList�� �̿��ϴ°�
// js���� �ǵ帮�°� HTML element�� �������ִ� ���ϳ��� ��� ����ϴ� ���̴�.
// = element�� class���빰�� �����ϴ� ���� ����Ѵٴ� ��

// contains�� �츮�� ����� class�� HTML element�� class�� ���ԵǾ� �ִ��� �����ش�

// toggle�� ��ū�� �����ϸ� ��ū����
// ��ū���� ���������� ��ū �߰�

// ex)
// toggle�� h1�� classList�� clicked class�� �̹��ִ��� Ȯ���Ͽ�
// �����ִٸ� toggle �� clicked�� �������ش�
// ���� class name�� �������� �ʴ´ٸ� toggle�� classname �߰�
