import Navigation from './parts/Navigation';
import Footer from './parts/Footer';

import { BlockContent } from './parts/Layout';

const BloodDonorListPage = () => {
  return (
    <>
      <Navigation />

      <BlockContent>
        <h1>Donor List</h1>
      </BlockContent>

      <Footer />
    </>
  );
};

export default BloodDonorListPage;
