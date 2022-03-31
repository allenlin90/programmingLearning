import { ChangeEvent, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

enum ButtonColor {
  red = 'red',
  blue = 'blue',
  MediumVioletRed = 'MediumVioletRed',
  MidnightBlue = 'MidnightBlue',
}

export const replaceCamelWithSpaces = (colorName: string) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState<ButtonColor>(
    'MediumVioletRed' as ButtonColor
  );

  const [disabled, setDisabled] = useState<boolean>(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'grey' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor as ButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <label htmlFor='enable-button-checkbox'>
        Disable button
        <input
          type='checkbox'
          id='enable-button-checkbox'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setDisabled(event.target.checked)
          }
          aria-checked={disabled}
          defaultChecked={disabled}
        />
      </label>
    </div>
  );
}

export default App;
