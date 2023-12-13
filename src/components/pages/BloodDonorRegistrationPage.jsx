import Navigation from './parts/Navigation';
import Footer from './parts/Footer';

import { BlockContent } from './parts/Layout';
import { useState } from 'react';

const BloodDonorRegistrationPage = () => {
  const [formFirstname, setFormFirstname] = useState('');
  const [formLastname, setFormLastname] = useState('');
  const [formAge, setFormAge] = useState('');
  const [formGender, setFormGender] = useState('');
  const [formBloodGroup, setFormBloodGroup] = useState('');

  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /* --- */
  /* --- */
  /* --- */

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleFirstName = (e) => {
    setFormFirstname(e.target.value);
  };

  const handleLastName = (e) => {
    setFormLastname(e.target.value);
  };

  const handleAge = (e) => {
    //setFormAge(parseInt(e.target.value));

    console.log('age', parseInt(e.target.value));

    setFormAge(e.target.value);
  };

  const handleGender = (e) => {
    setFormGender(e.target.value);
  };

  const handleBloodGroup = (e) => {
    setFormBloodGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('Submit', error);
    //First name

    if (formFirstname.lenght == 0) {
      setError('First name is too short');
      return;
    }

    if (formFirstname.lenght > 50) {
      setError('First name is too long');
      return;
    }

    //Last name

    if (formLastname.lenght == 0) {
      setError('Last name is too short');
      return;
    }

    if (formLastname.lenght > 50) {
      setError('Last name is too long');
      return;
    }

    //Age
  };

  /* --- */
  /* --- */
  /* --- */

  const createDonor = (donor) => {
    axios
      .post('https://dummyjson.com/users/add', {})
      .then((response) => {
        //console.log('Donors', response);
        //
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  return (
    <>
      <Navigation />

      <BlockContent>
        <h1>Registration form</h1>
        <br />
        <br />
        <h4>Register a decision to donate</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus enim vel
          tincidunt vestibulum. In volutpat tincidunt neque nec facilisis. Morbi aliquam mollis
          nisl. Aliquam erat volutpat. Mauris gravida, nisl eget aliquet rhoncus, risus risus
          placerat nisi, ut tincidunt est tortor eu leo. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Aenean nec est erat. Mauris felis
          purus, accumsan ac volutpat vel, pharetra ac ligula.
        </p>
        firstName, lastName, age, gender (geriausia dropdown arba radio button, jei nepavyksta –
        input), bloodGroup. (Nepamirškite, pateikiant naujai užregistruoto donoro formą išsiųsti
        post requestą.)
        <div className="registration-form">
          <form onSubmit={handleForm}>
            <h3>Register</h3>

            <div className="mb-3">
              <label className="form-label">First name *</label>
              <input
                type="text"
                className="form-control"
                value={formFirstname}
                onChange={handleFirstName}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Last name *</label>
              <input
                type="text"
                className="form-control"
                value={formLastname}
                onChange={handleLastName}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age *</label>
              <input
                type="number"
                className="form-control"
                min="10"
                max="100"
                value={formAge}
                onChange={handleAge}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender *</label>
              <select className="form-select" value={formGender} onChange={handleGender}>
                <option value=""></option>
                <option value="blood-1">Blood 1</option>
                <option value="blood-2">Blood 2</option>
                <option value="blood-3">Blood 3</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Blood group *</label>
              <input
                type="text"
                className="form-control"
                value={formBloodGroup}
                onChange={handleBloodGroup}
              />
            </div>

            {error && (
              <>
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              </>
            )}

            <div>
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </BlockContent>

      <Footer />
    </>
  );
};

export default BloodDonorRegistrationPage;
