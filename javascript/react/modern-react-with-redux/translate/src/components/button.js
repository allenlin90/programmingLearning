import React from 'react';
import LanguageContext from '../contexts/language-context';
import ColorContext from '../contexts/color-context';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`} type='button'>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
