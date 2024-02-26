import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [currentCountry, setCurrentCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios
      .get('https://xc-countries-api.fly.dev/api/countries/')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://xc-countries-api.fly.dev/api/countries/<country_code>/states/'
      )
      .then((response) => {
        setStates(response.data);
      });
  }, []);

  const handleChange = (event: any) => {
    console.log('stephanie', event, event.target.value);
    setCurrentCountry(event.target.value);
  };
  const changeState = (event) => {
    console.log('stephanie', event, event.target.value);
    setStates(event.target.value);
  };
  return (
    <div>
      <label>
        <h1> Where Do You Live? </h1>
      </label>
      <select onChange={handleChange}>
        {countries.map((country: any) => {
          return <option>{country.name}</option>;
        })}
      </select>

      <div>
        <p> I live in {currentCountry} </p>
      </div>
    </div>
  );
}

export default App;
