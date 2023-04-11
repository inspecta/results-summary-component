const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]

const summary = document.getElementById('summary');

data.forEach((data) => {
  summary.innerHTML += `
    <div class="summary-container ${data.category.toLocaleLowerCase()}">
      <div class="summary-name-icon">
        <img src="${data.icon}" class="summary-icon" alt="" />
        <h4 class="summary-name">${data.category}</h4>
      </div>
      <div class="summary-score-highest">
        <h4 class="summary-score">${data.score}</h4>
        <h4 class="summary-highest"> / 100</h4>
      </div>
    </div>
  `
})

