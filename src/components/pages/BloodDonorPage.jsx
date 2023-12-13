import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import Navigation from './parts/Navigation';
import Footer from './parts/Footer';

import { BlockContent } from './parts/Layout';

const options = {
  requestUrl: 'https://dummyjson.com/users'
};

const BloodDonorPage = () => {
  const { id } = useParams();

  const [donor, setDonor] = useState(false);
  const [donorLoaded, setDonorLoaded] = useState(false);

  // Load on start
  useEffect(() => {
    axios
      .get(`${options.requestUrl}/${id}`)
      .then((response) => {
        console.log('Donors', response);

        setDonor(response.data);
        setDonorLoaded(true);
      })
      .catch((error) => {
        console.log('Error', error);

        setDonorLoaded(true);
      });
  }, []);

  return (
    <>
      <Navigation />

      <BlockContent>
        <h1>Donor information</h1>

        {!donorLoaded && (
          <>
            <h3>Loading...</h3>
          </>
        )}

        {donorLoaded && !donor && (
          <>
            <h3>User not found</h3>
          </>
        )}

        {donorLoaded && !!donor && <Profile donor={donor} />}
      </BlockContent>

      <Footer />
    </>
  );
};

export default BloodDonorPage;

const Profile = ({ donor }) => {
  const fieldToShow = ['gender', 'age', 'birthDate'];

  return (
    <>
      <br />
      <br />
      <h3>
        {donor.firstName} {donor.lastName}
      </h3>

      <div className="profile">
        <div className="profile__image">
          <img src={donor.image} alt="donor" />
        </div>
        <div className="profile__info">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Firstname</th>
                <td>{donor.firstName}</td>
              </tr>

              <tr>
                <th scope="row">Lastname</th>
                <td>{donor.lastName}</td>
              </tr>

              <tr>
                <th scope="row">MaidenName</th>
                <td>{donor.maidenName}</td>
              </tr>

              <tr>
                <th scope="row">Gender</th>
                <td>{donor.gender}</td>
              </tr>

              <tr>
                <th scope="row">Birth date and Age</th>
                <td>
                  {donor.birthDate} ({donor.age})
                </td>
              </tr>

              <tr>
                <th scope="row">Blood Group</th>
                <td>{donor.bloodGroup}</td>
              </tr>

              <tr>
                <th scope="row">Height</th>
                <td>{donor.height} Cm</td>
              </tr>

              <tr>
                <th scope="row">Weight</th>
                <td>{donor.weight} Kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <br />
      <br />

      <h3>Contacts</h3>
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Phone</th>
            <td>{donor.phone}</td>
          </tr>

          <tr>
            <th scope="row">Email</th>
            <td>{donor.email}</td>
          </tr>

          <tr>
            <th scope="row">Adress</th>
            <td>
              {donor.address.state}, {donor.address.city}, {donor.address.address}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

/*
Donor structure
{
  "id": 1,
  "firstName": "Terry",
  "lastName": "Medhurst",
  "maidenName": "Smitham",
  "age": 50,
  "gender": "male",
  "email": "atuny0@sohu.com",
  "phone": "+63 791 675 8914",
  "username": "atuny0",
  "password": "9uQFF1Lh",
  "birthDate": "2000-12-25",
  "image": "https://robohash.org/hicveldicta.png",
  "bloodGroup": "A−",
  "height": 189,
  "weight": 75.4,
  "eyeColor": "Green",
  "hair": {
      "color": "Black",
      "type": "Strands"
  },
  "domain": "slashdot.org",
  "ip": "117.29.86.254",
  "address": {
      "address": "1745 T Street Southeast",
      "city": "Washington",
      "coordinates": {
          "lat": 38.867033,
          "lng": -76.979235
      },
      "postalCode": "20020",
      "state": "DC"
  },
  "macAddress": "13:69:BA:56:A3:74",
  "university": "Capitol University",
  "bank": {
      "cardExpire": "06/22",
      "cardNumber": "50380955204220685",
      "cardType": "maestro",
      "currency": "Peso",
      "iban": "NO17 0695 2754 967"
  },
  "company": {
      "address": {
          "address": "629 Debbie Drive",
          "city": "Nashville",
          "coordinates": {
              "lat": 36.208114,
              "lng": -86.58621199999999
          },
          "postalCode": "37076",
          "state": "TN"
      },
      "department": "Marketing",
      "name": "Blanda-O'Keefe",
      "title": "Help Desk Operator"
  },
  "ein": "20-9487066",
  "ssn": "661-64-2976",
  "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"
}
*/
