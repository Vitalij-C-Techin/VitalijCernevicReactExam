import Navigation from './parts/Navigation';
import Footer from './parts/Footer';

import { BlockContent } from './parts/Layout';

const ErrorPage = () => {
  return (
    <>
      <Navigation />

      <BlockContent>
        <h1>Error</h1>
      </BlockContent>

      <Footer />
    </>
  );
};

export default ErrorPage;
