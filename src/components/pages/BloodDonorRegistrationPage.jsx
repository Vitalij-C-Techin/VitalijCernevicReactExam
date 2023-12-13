import axios from 'axios';

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
    setFormAge(parseInt(e.target.value));
  };

  const handleGender = (e) => {
    setFormGender(e.target.value);
  };

  const handleBloodGroup = (e) => {
    setFormBloodGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    //First name

    if (formFirstname.length < 3) {
      setError('First name is too short');
      return;
    }

    if (formFirstname.length > 50) {
      setError('First name is too long');
      return;
    }

    //Last name

    if (formLastname.length == 0) {
      setError('Last name is too short');
      return;
    }

    if (formLastname.length > 50) {
      setError('Last name is too long');
      return;
    }

    //Age

    if (!formAge) {
      setError('Fill your age');
      return;
    }

    if (formAge < 18) {
      setError('You are too young');
      return;
    }

    if (formAge > 100) {
      setError('You are too old');
      return;
    }

    //Gender

    if (formGender.length < 1) {
      setError('Select gender');
      return;
    }

    //BloodGroup

    if (formBloodGroup.length < 2) {
      setError('Fill your blood group');
      return;
    }

    console.log(formBloodGroup);

    if (formBloodGroup.length > 10) {
      setError('Incorect blood group');
      return;
    }

    setError(false);

    createDonor();
  };

  /* --- */
  /* --- */
  /* --- */

  const createDonor = (donor) => {
    axios
      .post('https://dummyjson.com/users/add', {
        firstName: formFirstname,
        lastName: formLastname,
        age: formAge,
        gender: formGender,
        bloodGroup: formBloodGroup
      })
      .then((response) => {
        //console.log('On Donor Create: ', response);

        setError(false);
        setIsSuccess(true);

        setFormFirstname('');
        setFormLastname('');
        setFormAge('');
        setFormGender('');
        setFormBloodGroup('');
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
              <input type="number" className="form-control" value={formAge} onChange={handleAge} />
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
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              </>
            )}

            {isSuccess && (
              <>
                <div className="alert alert-success" role="alert">
                  Form sent successfuly! :)
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
