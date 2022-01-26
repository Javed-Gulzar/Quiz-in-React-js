import React from 'react'
import Answer from './Answer';


function AnswerList(props) {
    
    const options = [];
    for (let index = 0; index < props.dataSet.options.length; index++) {
        options.push(<Answer choice={index} handleClick={props.handleClick} answer={props.dataSet.options[index] }/>)
    }
    return (
        <div>
           {options}
        </div>
    )
}

export default AnswerList;
