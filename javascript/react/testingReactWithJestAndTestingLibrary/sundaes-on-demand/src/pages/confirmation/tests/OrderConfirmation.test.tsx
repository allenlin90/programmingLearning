import { screen } from '@testing-library/react';
import { server } from 'src/mocks/server';
import { rest } from 'msw';
import OrderConfirmation from '../OrderConfirmation';
import { renderWithContext } from 'src/test-utils/testing-library-utils';

test('error response from server for submitting order', async () => {
  // orderride default msw response for options endpoint with error response
  server.resetHandlers(
    rest.post('http://localhost:3030/order', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  renderWithContext(<OrderConfirmation setOrderPhase={jest.fn()} />);

  const alert = await screen.findByRole('alert');
  expect(alert).toHaveTextContent(
    'An unexpected error occurred. Please try again later.'
  );
});
