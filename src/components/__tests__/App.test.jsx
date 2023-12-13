import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from '../../App';
import { Children } from 'react';

const renderWithRouter = ({ chldren }) => {
  return {
    ...render(<BrowserRouter>{Children}</BrowserRouter>)
  };
};

test('Check if app works', () => {
  renderWithRouter(<App />);
});
