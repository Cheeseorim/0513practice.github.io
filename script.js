const searchBtn = document.getElementById('searchBtn');
const resultList = document.getElementById('resultList');

searchBtn.addEventListener('click', function() {
  const word = document.getElementById('word').value;
  const apiUrl = `https://api.datamuse.com/words?rel_syn=${word}&max=3`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      resultList.innerHTML = '';
      data.forEach(result => {
        const li = document.createElement('li');
        li.innerText = `${result.word}: ${result.defs}`;
        resultList.appendChild(li);
      });
    })
    .catch(error => console.error(error));
});