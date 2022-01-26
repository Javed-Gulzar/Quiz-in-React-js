import React from 'react'
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';


function ScoreArea(props) {
    return (
        <div className="scorestyle">

            <div className="scoreArea">

                <h4 className="correct-scoreArea">
                    <TotalCorrect correct={props.correct} />
                </h4>
                <h4 className="incorrect-scoreArea">
                    <TotalIncorrect incorrect={props.incorrect} />
                </h4>
            </div>
        </div>

    )
}

export default ScoreArea;
