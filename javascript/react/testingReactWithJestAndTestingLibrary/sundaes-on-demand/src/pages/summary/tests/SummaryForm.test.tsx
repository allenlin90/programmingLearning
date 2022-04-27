import {
  render,
  screen,
  waitForElementToBeRemoved,
  // fireEvent
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('Initial conditions', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole('button', { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox disable button on first click and enables on second click', async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', { name: /confirm order/i });

  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test('popover respondsto hover', async () => {
  render(<SummaryForm />);
  const popoverRegex = new RegExp(/no ice cream will actually be delivered/i);

  // popover starts out hidden
  const nullPopover = screen.queryByText(popoverRegex);
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await userEvent.hover(termsAndConditions);
  const popover = screen.getByText(popoverRegex);
  expect(popover).toBeInTheDocument();

  // popover disappears when we moust out
  await userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() => screen.queryByText(popoverRegex));
});
