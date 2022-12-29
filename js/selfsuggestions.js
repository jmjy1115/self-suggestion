const selfSuggestions = [
  "나는 의지가 있어",
  "나는 이기게 되어 있어",
  "나는 할 수 있어",
  "나는 불확실성을 환영해",
  "생각이 아니라, 행동이 나를 규정해",
  "나는 부단한 사람이야",
  "나는 아무것도 기대하지 않고 모든 것을 받아들여"
];

const sentence = document.querySelector("#selfSuggestions span");

function displaySelfSuggestions() {
  const todaySelfSuggestion = selfSuggestions[Math.floor(Math.random() * selfSuggestions.length)];
  sentence.innerText = todaySelfSuggestion;
}

displaySelfSuggestions();
setInterval(displaySelfSuggestions, 3000);