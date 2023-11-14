import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  /*render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
  const checkText = jest.fn();
  render (<BookForm onSubmit={checkText}/>)

  const checkLabel = screen.getByLabelText(/Name/);
  expect(checkLabel).toBeInTheDocument();
  })
