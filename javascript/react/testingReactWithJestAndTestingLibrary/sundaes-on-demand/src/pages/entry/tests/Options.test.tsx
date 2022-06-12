import { render, screen } from '../../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType='scoops' />);

  // find multiple images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate_scoop', 'Vanilla_scoop']);
});

test('displays image for each topping option from server', async () => {
  render(<Options optionType='toppings' />);

  // find multiple images
  const toppingImages = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

  // confirm alt text of images
  // @ts-ignore
  const altText = toppingImages.map((element) => element.alt);
  expect(altText).toEqual([
    'Cherries_topping',
    'M&Ms_topping',
    'Hot fudge_topping',
  ]);
});

test("dont' update total if scoops input is invalid", async () => {
  render(<Options optionType='scoops' />);

  // expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });

  await userEvent.clear(vanillaInput);
  await userEvent.type(vanillaInput, '-1');

  // make sure scoops subtotal hasn't updated
  const scoopsSubtotal = screen.getByText('Scoops total: $0.00');
  expect(scoopsSubtotal).toBeInTheDocument();
});
