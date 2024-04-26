import chalk from "chalk";
import inquirer from "inquirer";


async function askQuestion() {
    const questions = [
        {
            type: "list",
            name: "question1",
            message: "What is the capital of France?",
            choices: ["Paris", "Berlin", "London", "Rome"]
        },
        {
            type: "list",
            name: "question2",
            message: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"]
        },
        {
            type: "list",
            name: "question3",
            message: "What is the chemical symbol for water?",
            choices: ["H2O", "CO2", "N2", "O2"]
        },
        {
            type: "list",
            name: "question4",
            message: "Who developed the theory of relativity?",
            choices: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"]
        }
    ];

    const answers = await inquirer.prompt(questions);

    let score = 0;
    if (answers.question1 === "Paris") score++;
    if (answers.question2 === "Mars") score++;
    if (answers.question3 === "H2O") score++;
    if (answers.question4 === "Albert Einstein") score++;

    if (score === 4) {
        console.log("Congratulations! You win!");
    } else {
        console.log("Sorry, you didn't answer all questions correctly.");
    }
}

askQuestion();
