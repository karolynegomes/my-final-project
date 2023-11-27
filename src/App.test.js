import { render, screen } from '@testing-library/react';
import BookForm from './components/BookForm.js';

test('Check if the label Date exists', () => {
  const checkText = jest.fn();
  render (<BookForm onSubmit={checkText}/>)

  const checkLabel = screen.getByLabelText(/Date/);
  expect(checkLabel).toBeInTheDocument();
  })
