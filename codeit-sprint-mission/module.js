const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  { email: 'codeit3@codeit.com', password: "codeit303!" },
  { email: 'codeit4@codeit.com', password: "codeit404!" },
  { email: 'codeit5@codeit.com', password: "codeit505!" },
  { email: 'codeit6@codeit.com', password: "codeit606!" },
];

// 에러 메세지 표시
function showErrorMessage(elInput, errorId) {
  const visibleErrorMessage = document.querySelector(errorId);
  visibleErrorMessage.style.display = 'block';
  elInput.classList.add('borderRed');
}

// 에러 메세지 지우기
function removeErrorMessage(elInput, errorId) {
  const visibleErrorMessage = document.querySelector(errorId);
  visibleErrorMessage.style.display = 'none';
  elInput.classList.remove('borderRed');
}

export { USER_DATA, showErrorMessage, removeErrorMessage };