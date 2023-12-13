import { useState } from 'react';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Navigation from './parts/Navigation';
import Footer from './parts/Footer';

import { BlockContent } from './parts/Layout';

const options = {
  requestUrl: 'https://dummyjson.com/users'
};

const BloodDonorListPage = () => {
  const [donorList, setDonorList] = useState([]);
  const [donorLoaded, setDonorLoaded] = useState(false);

  // On Remove
  const removeDonor = (donor) => {
    axios
      .delete(`${options.requestUrl}/${donor.id}`, {})
      .then((response) => {
        //console.log('Donors', response);

        const result = donorList.filter((donorFilter) => {
          return donorFilter.id !== donor.id;
        });

        setDonorList(result);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  /* --- */

  // Load on start
  useEffect(() => {
    axios
      .get(options.requestUrl, {})
      .then((response) => {
        //console.log('Donors', response);

        setDonorList(response.data.users);
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
        <h1>Donor List</h1>

        {!donorLoaded && (
          <>
            <h3>Loading...</h3>
          </>
        )}

        {!!donorLoaded && !donorList.length && (
          <>
            <h3>List empty</h3>
          </>
        )}

        {!!donorLoaded && !!donorList.length && (
          <>
            <BloodDonorList donors={donorList} removeDonor={removeDonor} />
          </>
        )}
      </BlockContent>

      <Footer />
    </>
  );
};

const BloodDonorList = ({ donors, removeDonor }) => {
  return (
    <>
      <ul className="list-group">
        {!!donors.length &&
          donors.map((donor) => {
            return (
              <BloodDonorListSingle
                key={crypto.randomUUID()}
                donor={donor}
                removeDonor={removeDonor}
              />
            );
          })}
      </ul>
    </>
  );
};

const BloodDonorListSingle = ({ donor, removeDonor }) => {
  const navigate = useNavigate();

  const handleEdit = (donor) => {
    navigate(`/donor/${donor.id}`);
  };

  const handleRemove = (donor) => {
    if (confirm('Are you sure you want to remove this donor?')) {
      removeDonor(donor);
    }
  };

  return (
    <>
      <li className="list-group-item">
        <div>
          <h4 className="fw-bold">
            {donor.firstName} {donor.lastName}
          </h4>
          <span>
            Gender: {donor.gender}, Birth date: {donor.birthDate}
          </span>
        </div>
        <div className="cv-alignt-text-right">
          <button type="button" className="btn btn-success" onClick={() => handleEdit(donor)}>
            View
          </button>
          <button type="button" className="btn btn-danger" onClick={() => handleRemove(donor)}>
            Remove
          </button>
        </div>
      </li>
    </>
  );
};

export default BloodDonorListPage;

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
