import React, { useState } from 'react';
import Question from './Question';

const questions = [
    {
        question: "What does JSX stand for in React?",
        options: ['JavaScript XML', 'JavaScript EXtension', 'XML JavaScript', 'Extended JavaScript'],
        correctAnswer: 'JavaScript XML'
    },
    {
        question: "In React, what is the main purpose of the virtual DOM?",
        options: ['Optimizing database queries', 'Improving CSS performance', 'Efficiently updating the actual DOM', 'Rendering vector graphics'],
        correctAnswer: 'Efficiently updating the actual DOM'
    },
    {
        question: "What is the core building block of a React application?",
        options: ['Components', 'Functions', 'Events', 'Routes'],
        correctAnswer: 'Components'
    },
    {
        question: "What is the React library for managing component state?",
        options: ['React State', 'Component State', 'React Redux', 'useState'],
        correctAnswer: 'useState'
    },
    {
        question: "Which lifecycle method is used to fetch data in a class component?",
        options: ['componentDidMount', 'componentWillUnmount', 'componentWillUpdate', 'render'],
        correctAnswer: 'componentDidMount'
    },
    {
        question: "What tool can be used to create a new React project with a single command?",
        options: ['npm', 'Node.js', 'Create React App', 'Webpack'],
        correctAnswer: 'Create React App'
    },
    {
        question: "In React, what is the purpose of props?",
        options: ['Styling components', 'Handling events', 'Passing data between components', 'Importing external libraries'],
        correctAnswer: 'Passing data between components'
    },
    {
        question: "What is the latest version of React as of 2022?",
        options: ['React 15', 'React 16', 'React 17', 'React 18'],
        correctAnswer: 'React 18'
    },
    {
        question: "What is the popular state management library often used with React?",
        options: ['MobX', 'Redux', 'Flux', 'GraphQL'],
        correctAnswer: 'Redux'
    },
    {
        question: "What is React Router used for in a React application?",
        options: ['Optimizing images', 'Handling API requests', 'Managing routing and navigation', 'Styling components'],
        correctAnswer: 'Managing routing and navigation'
    }
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (answer) => {
        setUserAnswers([...userAnswers, answer]);
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div>
            {showScore ? (
                <div>
                    <h2>Your Score: {userAnswers.filter((answer, index) => answer == questions[index].correctAnswer).length}/{questions.length}</h2>
                </div>
            ) : (
                <div>
                    <Question
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        selected={userAnswers[currentQuestion]}
                        handleAnswer={handleAnswer}/>
                    <button onClick={nextQuestion}>
                        {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Quiz;