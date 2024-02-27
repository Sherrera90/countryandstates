import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [currentCountry, setCurrentCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  // // Store the selected country in a new state
  // const [stateName, setStateName ] = useState('');


  useEffect(() => {
    axios
      .get('https://xc-countries-api.fly.dev/api/countries/')
      .then((response: any) => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    if (currentCountry === '') {
      setStates([]);
      return;
    }
    console.log(`https://xc-countries-api.fly.dev/api/countries/${currentCountry}/states/`)
    axios.get(`https://xc-countries-api.fly.dev/api/countries/${currentCountry}/states/`)
      .then((response: any) => {
        setStates(response.data);
      });
  }, [currentCountry]);


  const handleChange = (event: any) => {
    console.log('stephanie', event, event.target.value);
    setCurrentCountry(event.target.value);
  };


  return (
    <div>
      <label>
        <h1> Where Do You Live? </h1>
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

      <div>
        {/* <p> I live in {states} </p> */}
        {/* <p> {currentCountry}</p> */}
      </div>
    </div>
  );
}

export default App;
