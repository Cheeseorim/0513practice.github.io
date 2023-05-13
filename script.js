const fortunes = [
  "오늘은 운 좋은 하루! 기분 좋은 일이 생길 거에요.",
  "오늘은 좀 힘들 수도 있겠어요. 하지만 괜찮아질 거에요.",
  "가까운 친구나 가족과 함께하면 오늘은 더 기분 좋은 하루가 될 거에요.",
  "건강한 식습관을 유지하면서 생활하면 오늘은 더 기분 좋은 하루가 될 거에요.",
  "책이나 영화, 음악 등 새로운 것을 접해보면 오늘은 더 기분 좋은 하루가 될 거에요.",
  "오늘은 조금 힘들어도 괜찮아요. 내일은 더 좋은 하루가 될 거에요.",
  "좋은 기회가 찾아올 거에요. 기회를 놓치지 않도록 잘 살아보세요.",
  "오늘은 마음에 드는 선물을 받을 수도 있어요. 예상치 못한 기쁨이 찾아올 거에요.",
  "오늘은 새로운 인연이 시작될 수도 있어요. 좋은 인연이 될 거에요.",
  "오늘은 조용한 시간을 가져보세요. 마음이 조금 더 편안해질 거에요."
];


const fortuneBtn = document.getElementById('fortune-btn');
const fortuneResult = document.getElementById('fortune-result');
const nameInput = document.getElementById('name-input');

function generateFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  const name = nameInput.value || '친구';
  fortuneResult.innerHTML = `${name}님의 오늘의 운세: ${fortune}`;
}

if (fortuneBtn) {
  fortuneBtn.addEventListener('click', generateFortune);
}