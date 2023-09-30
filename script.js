document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "What is 2 + 2?",
            choices: ["3", "4", "5", "6"],
            correctAnswer: "4",
        },
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Rome", "Paris"],
            correctAnswer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Earth", "Jupiter"],
            correctAnswer: "Mars",
        },
        {
            question: "How many continents are there on Earth?",
            choices: ["4", "6", "7", "8"],
            correctAnswer: "7",
        },
        {
            question: "Who was the first President of the United States?",
            choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            correctAnswer: "George Washington",
        },
        {
            question: "In which year did Christopher Columbus first reach the Americas?",
            choices: ["1492", "1510", "1607", "1776"],
            correctAnswer: "1492",
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
        const q = questions[currentQuestion];
        document.getElementById("question").textContent = q.question;
        const choices = document.getElementById("choices");
        choices.innerHTML = "";
        q.choices.forEach((choice, index) => {
            const li = document.createElement("li");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "choice";
            input.value = choice;
            li.appendChild(input);
            const optionSpan = document.createElement("span");
            optionSpan.classList.add("option");
            optionSpan.textContent = `Option ${String.fromCharCode(65 + index)}: ${choice}`;
            li.appendChild(optionSpan);
            choices.appendChild(li);
        });
    }

    function checkAnswer() {
        const userChoice = document.querySelector("input[name='choice']:checked");
        if (userChoice) {
            const userAnswer = userChoice.value;
            const correctAnswer = questions[currentQuestion].correctAnswer;
            if (userAnswer === correctAnswer) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                displayResults();
            }
        }
    }

    function displayResults() {
        const results = document.getElementById("results");
        results.style display = "block";
        const scoreDisplay = document.getElementById("score");
        scoreDisplay.textContent = score;
    }

    document.getElementById("submit").addEventListener("click", checkAnswer);
    loadQuestion();
});
