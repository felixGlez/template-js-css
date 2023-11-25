import { QUESTIONS } from './questions';
import { questionElement, optionsElement, resultsElement } from './dom';

let round = 0;
const userResponses = [];

export const startGame = () => {
	displayQuestion();
};

// FUNCIONES
export const displayResults = () => {
	optionsElement.classList.replace('flex', 'hide');
	questionElement.classList.replace('flex', 'hide');

	const fragmentElement = document.createDocumentFragment();

	for (let i = 0; i < userResponses.length; i++) {
		const newQuestion = document.createElement('h2');
		newQuestion.textContent = userResponses[i].question;
		const newCorrectAnswer = document.createElement('h3');
		newCorrectAnswer.textContent = userResponses[i].correctAnswer;
		const newUserAnswer = document.createElement('h3');
		newUserAnswer.textContent = userResponses[i].userAnswer;
		const newDiv = document.createElement('div');
		newDiv.classList.add('result-box');
		newDiv.append(newCorrectAnswer, newUserAnswer);
		fragmentElement.append(newQuestion, newDiv);

		if (newUserAnswer.textContent === QUESTIONS[i].correctAnswer) {
			newUserAnswer.style.color = 'green';
		} else {
			newUserAnswer.style.color = 'red';
		}
	}
	resultsElement.append(fragmentElement);
};

export const nextQuestion = event => {
	if (event.target.id === 'question-options') return;

	const currentQuestion = QUESTIONS[round];
	const selectedAnswer = event.target.textContent;

	userResponses.push({
		question: currentQuestion.question,
		userAnswer: selectedAnswer,
		correctAnswer: currentQuestion.correctAnswer
	});

	round++;

	if (round < QUESTIONS.length) {
		displayQuestion();
	} else {
		displayResults();
	}

	console.log(userResponses);
};

const displayQuestion = () => {
	const currentQuestion = QUESTIONS[round];
	questionElement.textContent = currentQuestion.question;

	for (let i = 0; i < optionsElement.children.length; i++) {
		optionsElement.children[i].textContent = currentQuestion.options[i];
	}
};
