import React, {Component} from 'react';
import Question from './Question.jsx'

class QuestionList extends Component{
  render(){
    return(
      <div className="questions">
        {
          this.props.questions.map(question => {
            if(question.id == this.props.current)
              return(
                <Question
                  question={question}
                  key={question.id}
                  {...this.props}
                />
              )
          })
        }
      </div>
    )
  }
}

QuestionList.propTypes = {
  questions: React.PropTypes.array.isRequired,
  current: React.PropTypes.number.isRequired,
}

export default QuestionList
