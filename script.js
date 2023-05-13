window.addEventListener('load', () => {
  const result = document.querySelector('#result');
  const name = document.querySelector('#name');
  const title = document.querySelector('#title');
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
    "오늘은 조용한 시간을 가져보세요. 마음이 조금 더 편안해질 거에요.",
    "당신의 노력이 결실을 맺을 거에요. 끝까지 포기하지 마세요.",
    "오늘은 운명적인 만남이 있을 거에요. 다가온 인연을 놓치지 마세요.",
    "당신은 꼭 이겨낼 수 있어요. 포기하지 마세요.",
    '주위에 좋은 사람들이 많아요. 그들과 함께하면 더 행복할 거에요.',
    "오늘은 건강이 최고예요. 무리하지 말고 컨디션을 잘 챙기세요.",
    "오늘은 재미있는 일이 있을 거에요. 마음껏 즐기세요!",
    "당신은 멋진 사람이에요. 자신감을 가지세요."
  ];

  function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
  }

  const savedName = localStorage.getItem('name');
  if (savedName) {
    title.innerHTML = `${savedName}님의 오늘의 운세`;
    name.innerHTML = `${savedName}님의 오늘의 운세`;
  }

  const fortune = getRandomFortune();
  result.innerHTML = fortune;
});