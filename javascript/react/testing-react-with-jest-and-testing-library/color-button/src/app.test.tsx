import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('Change button to grey color when disabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  // disable button
  expect(colorButton).toBeDisabled();
  // button is grey
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);
  // enable button
  expect(colorButton).toBeEnabled();
  // button is red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  // disable button
  expect(colorButton).toBeDisabled();
  // button is grey
  expect(colorButton).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letter', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightVioletRed')).toBe(
      'Midnight Violet Red'
    );
  });
});
