const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(info) {
  info.preventDefault(); // �������� �⺻ ������ �������� ���ϰ� ���� // event object�� preventDefault�Լ��� �⺻������ ���� ����
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit); // submit �̺�Ʈ�� �߻��Ѵٸ�, onLoginSubmit�Լ��� �����Ų�ٴ� �ǹ�
// JS�� onLoginSubmit�Լ� ȣ��� ���ڸ� ��Ƽ� ȣ����. �ش� ���ڴ� event object�� ���� ������

//   �� �߿� ��
//   form�� submit�ϸ� �������� �⺻������ �������� ���ΰ�ħ �ϵ��� �Ǿ��ִ�. << �츮�� ���ϴ� ���� �ƴ�!
//   preventDefault() �Լ��� �߰������ν� �������� �⺻ ������ ���� �� �ִ�!!

//   �� preventDefault �Լ��� EventListener �Լ��� 'ù ��° argument' �ȿ� �ִ� �Լ��̴�.
//   ù arument�� ���� �� ������ event�鿡 ���� ������ ���� �ִ�.
//   JS��(�⺻������)argument�� ��Ƽ� �Լ��� ȣ���ϴµ�, �� argument�� �⺻ �������� �����ϰ� �ִ�.
//   ex) ���� submit��ü����, �� �ÿ� submit�� �ߴ��� ��� �ֿܼ� ����غ��� �� �� ����
