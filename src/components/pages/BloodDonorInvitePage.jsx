import { Link } from 'react-router-dom';

import Navigation from './parts/Navigation';
import Footer from './parts/Footer';

import { BlockContent, BlockColumns } from './parts/Layout';

import Image from '../../../public/invite-image.png';

const BloodDonorInvitePage = () => {
  return (
    <>
      <Navigation />

      <BlockContent>
        <h1>Invite page</h1>

        <BlockColumns className="cv-padding-tb-30">
          <div className="cv-vertical-align-center cv-padding-tb-30 cv-horizontal-align-right">
            <img src={Image} alt="invite page" className="cv-fit-size" />
          </div>
          <div className="cv-vertical-align-center cv-padding-tb-30">
            <div>
              <h2>Become a blood donor</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat feugiat
                ullamcorper. Aliquam eu congue velit. Nulla sagittis mauris nulla, nec tempus odio
                vulputate et. Aliquam non est ac mi fermentum molestie sit amet sed dolor.
              </p>
              <Link to="/donor-registration" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </BlockColumns>
      </BlockContent>

      <Footer />
    </>
  );
};

export default BloodDonorInvitePage;
