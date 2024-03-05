import { useState  } from "react";
import axios from "axios";

const AddCountry = () => {
  const [newCountryName, setNewCountryName] = useState('');
  const [newCountryCode, setNewCountryCode] = useState('');

  const addNewCountry = async () => {
    await axios.post('https://xc-countries-api.fly.dev/api/countries/', {
      code: newCountryCode,
      name: newCountryName
    });
    setNewCountryCode('');
    setNewCountryName('');
  };

  return (
    <div>
      <h1>Add New Country</h1>
      <div>
        <label>Enter Country Code </label>
        <input
          type="text"
          value={newCountryCode}
          onChange={(e) => setNewCountryCode(e.target.value)}
        />
        <br></br>
        <label>Enter Country Name</label>
        <input
          type="text"
          value={newCountryName}
          onChange={(e) => setNewCountryName(e.target.value)}
        />
      </div>
      <button onClick={addNewCountry}>Add New Country</button>
    </div>
  );
};

export default AddCountry;