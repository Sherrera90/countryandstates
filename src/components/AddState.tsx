import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

type Country = {
  id: number;
  name: string;
  code: string;
};

const AddState = () => {
  const [stateName, setStateName] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [countries, setCountries] = useState([] as Country[]);
  const [newCountryId, setNewCountryId] = useState('');


  useEffect(() => {
    axios
      .get<Country[]>('https://xc-countries-api.fly.dev/api/countries/')
      .then((response) => {
        response.data.sort((a, b) => {
          return a.name > b.name ? 1 : -1
        })
        setCountries(response.data);
      });
  }, []);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const countryId = event.target.value;
    setNewCountryId(countryId);
  };

  const addNewState = async () => {
    await axios.post('https://xc-countries-api.fly.dev/api/states/', {
      countryId: newCountryId,
      code: stateCode,
      name: stateName
    });
    setStateCode('');
    setStateName('');
  };

  return (
    <div>
      <h1>Add New State</h1>
      <select onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map(country => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>
      <div>
        <label>Enter State Code </label>
        <input
          type="text"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
        />
        <label>Enter State Name</label>
        <input
          type="text"
          value={stateName}
          onChange={(e) => setStateName(e.target.value)}
        />
      </div>
      <button onClick={addNewState}>Add New State</button>
    </div>
  );
};

export default AddState;