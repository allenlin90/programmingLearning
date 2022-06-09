import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';
import OrderEntry from '../OrderEntry';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType='scoops' />);
  // make sure total starts out $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false });
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // update vanilla scoops to 1 and check the subtotal
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  // update chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  await userEvent.clear(chocolateInput);
  await userEvent.type(chocolateInput, '2');
  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test('update toppings subtotal when toppings changes', async () => {
  render(<Options optionType='toppings' />);
  const toppingsSubtotal = screen.getByText('Toppings total: $', {
    exact: false,
  });
  expect(toppingsSubtotal).toHaveTextContent('0.00');

  // update cherries toppings and check subtotal
  const cherryiesInput = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });

  // update m&ms toppings and check subtotal
  expect(cherryiesInput).not.toBeChecked();
  await userEvent.click(cherryiesInput);
  expect(cherryiesInput).toBeChecked();
  expect(toppingsSubtotal).toHaveTextContent('1.50');

  const mnms = await screen.findByRole('checkbox', {
    name: 'M&Ms',
  });

  expect(mnms).not.toBeChecked();
  await userEvent.click(mnms);
  expect(mnms).toBeChecked();
  expect(toppingsSubtotal).toHaveTextContent('3.00');

  await userEvent.click(mnms);
  expect(mnms).not.toBeChecked();
  expect(toppingsSubtotal).toHaveTextContent('1.50');
});

describe('grand total', () => {
  test('grand total starts at $0.00', async () => {
    render(<OrderEntry setOrderPhase={jest.fn()} />);
    const grandTotal = screen.getByRole('heading', {
      name: /grand total: \$/i,
    });

    expect(grandTotal).toHaveTextContent('0.00');
  });

  test('grand total updates properly if scoop is added first', async () => {
    render(<OrderEntry setOrderPhase={jest.fn()} />);
    const grandTotal = screen.getByRole('heading', {
      name: /grand total: \$/i,
    });

    // update vanilla scoops to 2 and check grand total
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });

    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('4.00');

    // add cherries and check grand total
    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    });
    await userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total updates properly if topping is added first', async () => {
    render(<OrderEntry setOrderPhase={jest.fn()} />);
    const grandTotal = screen.getByRole('heading', {
      name: /grand total: \$/i,
    });

    // add cherries and check grand total
    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    });
    await userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('1.50');

    // update vanilla scoops to 2 and check grand total
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total updates properly if item is removed', async () => {
    render(<OrderEntry setOrderPhase={jest.fn()} />);

    // add Cherries
    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    });
    await userEvent.click(cherriesCheckbox);
    // grand total $1.50

    // update vanilla scoops to 2; grand total should be $5.50
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });

    // remove 1 scoop of vanilla and check grand total
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, '2');

    // remove 1 scoop of vanilla and check grand total
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, '1');

    // check grand total
    const grandTotal = screen.getByRole('heading', {
      name: /grand total: \$/i,
    });
    expect(grandTotal).toHaveTextContent('3.50');

    // remove cherries and check grand total
    await userEvent.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('2.00');
  });
});
