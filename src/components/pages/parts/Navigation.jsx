import { Link, NavLink } from 'react-router-dom';

import Logo from '../../../../public/logo.png';

const options = {
  links: [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Donors',
      url: '/donors'
    },
    {
      text: 'Donor registration',
      url: '/donor-registration'
    }
  ]
};

const Navigation = () => {
  return (
    <>
      <nav id="navigation">
        <div>
          <div className="navigation__logo-section">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="navigation__button-section">
            <ul>
              {options.links.map((link) => {
                return (
                  <li key={crypto.randomUUID()}>
                    <NavLink to={link.url}>{link.text}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
