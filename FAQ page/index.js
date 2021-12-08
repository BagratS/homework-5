const questionList = [["question", "answer"]];

const box = document.querySelector("#faq-box");
const question = document.querySelector("#question")
const answer = document.querySelector(".no-answer")
question.innerText = questionList[0][0];
answer.innerText = questionList[0][1];
box.addEventListener("click", () => {
  box.classList.toggle("extended");
  answer.classList.toggle("no-answer");
});
