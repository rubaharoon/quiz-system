#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.rgb(255, 0, 0)(`\n \t\t <<<==================>>>`));
console.log(chalk.bold.rgb(255, 0, 0)(`<<<===========>>> ${chalk.bold.hex(`#00FFFF`)(`Welcome to my Quiz System!`)} <<<===========>>>`));
console.log(chalk.bold.rgb(255, 0, 0)(`\t\t <<<==================>>>\n`));
// Define the quiz questions and their correct answers
const questions = [
    {
        question: chalk.magenta('What is the capital of France?'),
        choices: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: chalk.red('What is the capital city of Pakistan?'),
        choices: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
        correctAnswer: 'Islamabad'
    },
    {
        question: chalk.green('What is the largest planet in our solar system?'),
        choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Jupiter'
    },
    {
        question: chalk.blue('Which city is known as the "City of Lights" in Pakistan?'),
        choices: ['Lahore', 'Islamabad', 'Karachi', 'Multan'],
        correctAnswer: 'Karachi'
    },
    {
        question: chalk.yellow('What is the smallest prime number?'),
        choices: ['0', '1', '2', '3'],
        correctAnswer: '2'
    },
    {
        question: chalk.cyanBright('What is the longest river in the world?'),
        choices: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
        correctAnswer: 'Nile'
    },
    {
        question: chalk.green('What year did the Titanic sink?'),
        choices: ['1912', '1914', '1916', '1918'],
        correctAnswer: '1912'
    },
    {
        question: chalk.red('Which is the highest peak in Pakistan?'),
        choices: ['Nanga Parbat', 'K2', 'Broad Peak', 'Gasherbrum I'],
        correctAnswer: 'K2'
    },
];
// Asks the quiz questions to the user and evaluates their responses.
async function askQuestions() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    // Loop through each question in the questions array
    for (const q of questions) {
        // Prompt the user with the current question and choices
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'response',
                message: q.question,
                choices: q.choices
            }
        ]);
        // Check if the user's answer matches the correct answer
        if (answer.response === q.correctAnswer) {
            console.log(chalk.green.bold(`✔ Correct\n`));
            correctAnswers++; // Increment the score for a correct answer
        }
        else {
            console.log(`${chalk.bold.redBright("✘ Wrong!")} The correct answer is "${chalk.bold.green(q.correctAnswer)}".\n`);
            wrongAnswers++;
        }
    }
    // Display the user's final score
    console.log("-".repeat(31));
    console.log(chalk.bold.blue(`\tFinal Score:`));
    console.log("-".repeat(31));
    console.log(chalk.bold(`${chalk.green(`Correct Answers: ${correctAnswers}`)}\n${chalk.red(`Wrong Answers: ${wrongAnswers}`)}\n${chalk.yellowBright(`Total Questions: ${questions.length}`)}`));
    console.log("-".repeat(31));
}
// Start the quiz
askQuestions();
