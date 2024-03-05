import { useEffect, useState } from 'react';
import axios from 'axios';

function CountriesStates() {
  const [currentCountry, setCurrentCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  // // Store the selected country in a new state
  // const [stateName, setStateName ] = useState('');

  useEffect(() => {
    axios
      .get('https://xc-countries-api.fly.dev/api/countries/')
      .then((response: any) => {
        response.data.sort((a: any, b: any) => {
          return a.name > b.name ? 1 : -1
        })
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    if (currentCountry === '') {
      setStates([]);
      return;
    }
    axios.get(`https://xc-countries-api.fly.dev/api/countries/${currentCountry}/states/`)
      .then((response: any) => {
        response.data.sort((a: any, b: any) => {
          return a.name > b.name ? 1 : -1
        })
        setStates(response.data);
      });
  }, [currentCountry]);


  const handleChange = (event: any) => {
    setCurrentCountry(event.target.value);
  };


  return (
    <div>
      <label>
        <h3> Where Do You Live? </h3>
      </label>
      <select
        onChange={handleChange}>
        {countries.map((country: any) => {
          return <option value={country.code}>{country.name}</option>;
        })}
      </select>
      <select>
        {states.map((state: any) => {
          return <option value={state.code}>{state.name}</option>;
        })}
      </select>
    </div>
  );
}

export default CountriesStates;