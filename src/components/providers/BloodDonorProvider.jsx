import { useState, createContext, useContext } from 'react';

const BloodDonorContext = createContext();

export const useBloodDonorData = () => {
  return useContext(BloodDonorContext);
};

export const BloodDonorProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const set = (list) => {
    setList(list);
  };

  const add = (donor) => {
    setList([...list, donor]);
  };

  const bloodDonorData = {
    list,
    set,
    add
  };

  return <BloodDonorContext.Provider value={bloodDonorData}>{children}</BloodDonorContext.Provider>;
};
