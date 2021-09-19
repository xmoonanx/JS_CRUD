const title = document.querySelectorAll("#hello");

title.innerText = "Hello";

// - getElementsByClassName() : ���� element�� �����ö� ��(array�� ��ȯ)
// - getElementsByTagName() : name�� �Ҵ��� �� ����(array�� ��ȯ)
// - querySelector : element�� CSS selector������� �˻��� �� ���� (ex. h1:first-child)
// �� �ϳ��� element�� return����
// �� hello�� class ���ο� �ִ� h1�� ������ �� �� �ִ�(id�� ������)
// - ù��° element�� ������
// - ���ǿ� �´� ���� �� �������� ������ querySelectorAll
// �� ������ h1�� ����ִ� array�� ������ ��
// - querySelector("#hello); �� getElementById("hello"); �� ���� ���� �ϴ� ����
