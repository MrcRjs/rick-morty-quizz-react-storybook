import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx'
import Scorebox from './quiz/Scorebox.jsx'
import QuizResult from './quiz/QuizResult.jsx'

class App extends Component{
  constructor(props) {
    super(props);
    this.resetQuiz = this.resetQuiz.bind(this)
    this.setCurrent = this.setCurrent.bind(this)
    this.setScore = this.setScore.bind(this)
    this.state = {
      questions: [
        {
          id: 1,
          text: "¿Cuál es el apellido de Rick?",
          choices: [
            {
              id: 'a',
              text: 'Hernández',
            },
            {
              id: 'b',
              text: 'Rodriguez',
            },
            {
              id: 'c',
              text: 'Sánchez',
            },
          ],
          correct: 'c',
        },
        {
          id: 2,
          text: "¿Cuál es el nombre de las criaturas azules que salen de una caja para ayudarte?",
          choices: [
            {
              id: 'a',
              text: 'Mr. Meeseeks',
            },
            {
              id: 'b',
              text: 'Mr. Meesyks',
            },
            {
              id: 'c',
              text: 'Mr. Meeseex',
            },
          ],
          correct: 'a',
        },
        {
          id: 3,
          text: "¿Qué significa \"wubba lubba dub dub!\"?",
          choices: [
            {
              id: 'a',
              text: "Soy el rey del universo!",
            },
            {
              id: 'b',
              text: "Fuck the police!",
            },
            {
              id: 'c',
              text: "Estoy sufriendo mucho, ayuda por favor!",
            },
          ],
          correct: 'c',
        },
        {
          id: 4,
          text: "¿Cuál es el ingrediente principal de los plumbuses?",
          choices: [
            {
              id: 'a',
              text: "Fleebs",
            },
            {
              id: 'b',
              text: "Dinglebop",
            },
            {
              id: 'c',
              text: "Saliva de schlami",
            },
          ],
          correct: 'b',
        },
        {
          id: 5,
          text: "¿Cuál es el nombre de la mujer con la que Rick tuvo una relación amorosa?",
          choices: [
            {
              id: 'a',
              text: "Bungee",
            },
            {
              id: 'b',
              text: "Unity",
            },
            {
              id: 'c',
              text: "Epic",
            },
          ],
          correct: 'b',
        },
      ],
      score: 0,
      current: 1,
    };
  }
  resetQuiz(){
    this.setState({
      score: 0,
      current: 1,
    })
  }
  setCurrent(current){
    this.setState({current})
  }
  setScore(score){
    this.setState({score})
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <h1>Rick & Morty quiz</h1>
            <p className="lead">A simple quiz app written in React.js</p>
            <hr />
          </div>
        </div>
        <div className="row">
          {
            this.state.current <= this.state.questions.length ?
              /* Render questions one by one until last one */
              <div className="col-xs-12 col-md-8">
                <Scorebox {...this.state}/>
                <QuestionList {...this.state} setCurrent={this.setCurrent} setScore={this.setScore} />
              </div>:
              /* After last questions the quiz results will show */
              <div className="col-xm-12 col-md-8">
                <QuizResult score={this.state.score} resetQuiz={this.resetQuiz}/>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default App
