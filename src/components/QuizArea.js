import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';
import UserFailedMsg from './UserFailedMsg';

function QuizArea(props) {
    if(props.isFinished) {
        return props.correct >= 2?<UserGreeting/>:<UserFailedMsg/>
     }
    return (
        <div>
            <h2>QuizArea</h2>
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/>
        </div>
    )
}

export default QuizArea;
