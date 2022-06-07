import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { OrderDetailsProvider } from 'src/contexts/OrderDetails';

export const renderWithContext = (
  ui: ReactElement,
  options?: RenderOptions
) => {
  return render(ui, { wrapper: OrderDetailsProvider, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
