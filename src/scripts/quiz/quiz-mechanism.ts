import { attachHover } from "../global/custom-cursor";

const quizCounter = document.getElementById("quiz-counter");
const quizOptions = document.getElementById("quiz-options");
const quizProgress = document.getElementById("quiz-progress");
const quizTextElement = document.getElementById("quiz-q-text");

const resultName = document.getElementById("result-name");
const resultDesc = document.getElementById("result-desc");
const resultChange = document.getElementById("result-change");

const btnRetry = document.getElementById("btn-retry");

const questions = [
      {
            question: "Your favourite jacket has a hole. You...",
            options: [
                  "Sew it up — or find a tailor. It's fixable.",
                  "Buy a replacement. It had a good run.",
                  "Buy a replacement AND keep the old one, just in case.",
                  "You own 11 jackets. This is fine.",
            ],
            scores: [0, 1, 2, 3],
      },
      {
            question: "A sale notification pops up. Your first feeling is...",
            options: [
                  "Mild curiosity — I'll check if I actually need something.",
                  "Excitement. I deserve a treat.",
                  "Anxiety. What if I miss out?",
                  "Already opened the app before finishing this question.",
            ],
            scores: [0, 1, 2, 3],
      },
      {
            question: "The last thing you threw away was...",
            options: ["Genuinely broken beyond any repair.", "Replaced by something newer.", "Honestly? It still worked fine.", "I don't really keep track of that."],
            scores: [0, 1, 2, 3],
      },
      {
            question: "How many clothes do you own with tags still on?",
            options: [
                  "Zero. I only buy what I'll use.",
                  "One or two — good intentions, wrong size.",
                  "Three to five. A sale situation.",
                  "More than five. This question is making me uncomfortable.",
            ],
            scores: [0, 1, 2, 3],
      },
      {
            question: "When you feel stressed or sad, you...",
            options: ["Call a friend. Exercise. Sleep.", "Treat myself — I earned it.", "Browse online stores. Just browse.", "Wake up to packages I don't remember ordering."],
            scores: [0, 1, 2, 3],
      },
      {
            question: "Right now, you could name exactly how many clothes you own.",
            options: [
                  "Yes, roughly. I'm intentional about it.",
                  "Somewhere between 40-80? Maybe.",
                  "No idea. Probably more than I think.",
                  "This question is making me uncomfortable and I'd like to leave.",
            ],
            scores: [0, 1, 2, 3],
      },
];
const archetypes = [
      {
            name: "THE CONSCIOUS CONSUMER",
            desc: "You're rare. You think before you buy. You understand that every purchase is a vote. <em>The world needs more of you.</em>",
            change: "KEEP GOING: Share this site with someone who needs it. Awareness is contagious.",
      },
      {
            name: "THE COMFORT BUYER",
            desc: "Shopping is self-care for you. That dopamine loop has you — but gently. You're aware enough to be here. <em>That awareness is the first step.</em>",
            change: "TRY THIS: Next time you want to shop, try a 48-hour rule first. See if the urge passes.",
      },
      {
            name: "THE FOMO SHOPPER",
            desc: "Manufactured scarcity owns you. You buy to avoid missing out, not because you need it. <em>The 'just in case' pile is very real.</em>",
            change: "TRY THIS: Unsubscribe from every retail email list. Today. It takes 5 minutes and changes everything.",
      },
      {
            name: "THE UNCONSCIOUS ACCUMULATOR",
            desc: "You've lost track — and that's by design. The system was built to make you lose track. <em>You're not broken. But something needs to change.</em>",
            change: "TRY THIS: Spend 30 minutes counting what you own. Not to judge — just to know. Knowledge is power.",
      },
];

let questionIndex = 0;
let totalScore = 0;

// Function that can be used to render new question
function renderQuestion() {
      const questionData = questions[questionIndex];
      quizTextElement!.classList.remove("show");
      setTimeout(() => {
            quizTextElement!.textContent = questionData.question;
            quizTextElement!.classList.add("show");
            quizCounter!.textContent = `QUESTION ${questionIndex + 1} OF ${questions.length}`;
            quizProgress!.style.width = (questionIndex / questions.length) * 100 + "%";
            quizOptions!.innerHTML = "";
            questionData.options.forEach((text, i) => {
                  const btn = document.createElement("button");
                  btn.className = "quiz-opt";
                  btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + i)}</span><span class="opt-text">${text}</span>`;
                  btn.addEventListener("click", () => {
                        totalScore += questionData.scores[i];
                        questionIndex++;
                        if (questionIndex < questions.length) {
                              renderQuestion();
                        } else {
                              showResult();
                        }
                  });
                  attachHover(".quiz-opt");
                  quizOptions!.appendChild(btn);
            });
      }, 300);
}

// Function that used to show result
function showResult() {
      quizOptions!.style.display = "none";
      quizTextElement!.style.display = "none";
      quizProgress!.style.width = "100%";
      quizCounter!.textContent = "RESULTS";
      const avg = totalScore / questions.length;
      const idx = Math.min(Math.floor(avg), 3);
      const a = archetypes[idx];
      const res = document.getElementById("quiz-result");
      resultName!.textContent = a.name;
      resultDesc!.innerHTML = a.desc;
      resultChange!.textContent = a.change;
      res!.style.display = "block";
      setTimeout(() => res!.classList.add("show"), 50);
      btnRetry!.addEventListener("click", () => {
            questionIndex = 0;
            totalScore = 0;
            res!.classList.remove("show");
            setTimeout(() => {
                  res!.style.display = "none";
                  quizOptions!.style.display = "";
                  quizTextElement!.style.display = "";
                  renderQuestion();
            }, 500);
      });
}

// Init quiz when in view
const qob = new IntersectionObserver(
      (entries) => {
            entries.forEach((e) => {
                  if (e.isIntersecting && questionIndex === 0) {
                        console.log("RENDER QUESTIONS!");
                        renderQuestion();
                        qob.unobserve(e.target);
                  }
            });
      },
      { threshold: 0.3 },
);
const quizContainer = document.getElementById("quiz");
qob.observe(quizContainer!);