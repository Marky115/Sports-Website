import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('cart drawer flow', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/#/product/miami-jersey');
  });

  test('opens the cart drawer when add to cart is clicked', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));

    expect(screen.getByText(/your cart/i)).toBeInTheDocument();
  });
});
