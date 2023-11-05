import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css'

function Question({ question, options, selected, handleAnswer }) {
    return (
        <>
            <h1 className='head text-success text-center fw-bolder mb-5'>Quiz App</h1>
            <Card style={{ width: '50rem' }} className='align-items-center p-5'>
                <Card.Title style={{fontSize:"50px"}} className='mb-5 fw-bolder'>{question}</Card.Title>
                <ul className='' style={{ listStyleType: "none" }}>
                    {options.map((option, index) => (
                        <li key={index}>
                            <label>
                                <input
                                    className='mb-4'
                                    type="radio"
                                    value={option}
                                    checked={selected === option}
                                    onChange={() => handleAnswer(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            </Card>
        </>
        );
        
}

export default Question;