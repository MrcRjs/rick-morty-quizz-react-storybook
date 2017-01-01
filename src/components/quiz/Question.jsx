import React, {Component} from 'react';

class Question extends Component{
  constructor(props) {
    super(props);

    this.handleSelectAnswer = this.handleSelectAnswer.bind(this)
  }
  handleSelectAnswer(e){
    e.preventDefault();
    const {setCurrent, setScore, question} = this.props;

    let selected = e.target.value;

    if(selected==question.correct){
      setScore(this.props.score+1)
    }
    setCurrent(this.props.current+1)
  }
  render(){
    const {question} = this.props
    return(
      <div className="well">
        <h3>{question.id}.- {question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            question.choices.map(choice =>{
              return(
                <li className="list-group-item" key={choice.id}>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        onChange={this.handleSelectAnswer}
                        name={question.id}
                        value={choice.id}
                      />
                      {choice.text}
                    </label>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

Question.propTypes = {
  question: React.PropTypes.object.isRequired,
  score: React.PropTypes.number.isRequired,
  current: React.PropTypes.number.isRequired,
  setScore: React.PropTypes.func.isRequired,
  setCurrent: React.PropTypes.func.isRequired,
}

export default Question
