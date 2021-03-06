import React, { Component } from 'react';
import BtnChangePage from './BtnChangePage.js';
class Question extends Component {
  state = {
    chapter: 'Resultat'
  };

  componentWillMount = () => {
    this.props.changeChapter(this.state.chapter);
  };

  render() {
    return (
      <div>
        <h1>Nedstämdhet</h1>
        <p>
          Avser en sänkning av det emotionella grundläget (till skillnad från
          situationsutlösta affekter). Omfattar dysterhet, tungsinne och
          nedstämdhet, som manifesterar sig i mimik, kroppshållning och
          rörelsemönster. Bedömningen baseras på utpräglingsgrad och
          avledbarhet. Förhöjd grundstämning.
        </p>
        <BtnChangePage />
      </div>
    );
  }
}

export default Question;
