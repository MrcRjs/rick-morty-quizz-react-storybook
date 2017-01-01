import React, {Component} from 'react';
const resultsData = [
  {
    title:"Parásito alienígena",
    description:"Tan solo eres un parásito alienígena, no conoces nada de Rick & Morty, sólo incrustas recuerdos de la serie en la mente de otro para poder encajar. Mereces ser aniquilado. ",
    img: "alienParasites.gif"
  },
  {
    title:"Morty xxxxxx",
    description:"Eres un Morty cualquiera, has vivido algunas aventuras con Rick pero nada trascendete, deberás esforzarte mucho mas para poder ser el compañero del Rick auténtico.",
    img: "mortys.gif"
  },
  {
    title:"Morty Grial",
    description:"¿Morty, eres tú? Has estado estado con Rick haciendo cosas maravillosas, sólos tú y Rick, el mundo exterior es su enemigo, como si fueran los únicos amigos que tuvieran. Rick y Morty por siempre y para siempre, cien años Rick y Morty... W W W punto Las aventuras de Rick y Morty punto com...",
    img: "rick.gif"
  }
]
class QuizResult extends Component {
  constructor(props) {
    super(props);

    const {score} = this.props
    let result;
    if(score < 2 ){
      result = 0;
    }else if(score < 4){
      result = 1;
    }else if(score == 5){
      result = 2;
    }
    this.state = {
      result : resultsData[result]
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
        <img className="thumbnail" src={"img/" + this.state.result.img} style={{width : "100%"}} />
        <div className="caption">
          <h3>{this.state.result.title}</h3>
          <hr />
          <p className="lead">{ this.state.result.description }</p>
          <a onClick={this.props.resetQuiz} className="btn btn-primary">Jugar Nuevamente >></a>
        </div>
      </div>
      </div>
    );
  }
}

QuizResult.propTypes = {
  score: React.PropTypes.number.isRequired,
  resetQuiz: React.PropTypes.func.isRequired,
}

export default QuizResult
