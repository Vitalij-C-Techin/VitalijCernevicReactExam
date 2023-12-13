import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from '../../App';

const renderWithRouter = ({ chldren }) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>)
  };
};

test('Check if app works', () => {
  renderWithRouter(<App />);
});
