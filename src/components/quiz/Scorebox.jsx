import React, {Component} from 'react'

class Scorebox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    /* 100% divided by total questions, multiplied by the questions answered */
    const {questions, current} = this.props;
    const quizPercent = (100 / questions.length) * (current - 1)

    return (
      <div className="well">
        <p>Pregunta { this.props.current } de { this.props.questions.length }</p>
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow={quizPercent} aria-valuemin="0" aria-valuemax="100" style={{width: quizPercent+"%"}}>
            <span className="sr-only">{quizPercent}% Completado</span>
          </div>
        </div>
      </div>
    );
  }
}

Scorebox.propTypes = {
  current: React.PropTypes.number.isRequired,
  questions: React.PropTypes.array.isRequired,
}

export default Scorebox
