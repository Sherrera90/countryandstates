import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // const [currentCountry, setCurrentCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
 // Store the selected country in a new state
 const [selectedCountryCode, setSelectedCountryCode ] = useState('');
  useEffect(() => {
    axios
      .get('https://xc-countries-api.fly.dev/api/countries/')
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    if(selectedCountryCode===''){
    axios
      .get(
        'https://xc-countries-api.fly.dev/api/countries/${selectedCountryCode}/states/'
      )
      .then((response) => {
        setStates(response.data);
      });
  }}, [selectedCountryCode]);

  const handleChange = (event: any) => {
    console.log('stephanie', event, event.target.value);
    setSelectedCountryCode(event.target.value);
  };
  // const changeState = (event:any) => {
  //   console.log('stephanie', event, event.target.value);
  //   setStates(event.target.value);
  // };
  return (
    <div>
      <label>
        <h1> Where Do You Live? </h1>
      </label>
      <select 
        name = "countries"
        id = "countries"
        // placeholder ="Select Country"
        onChange={handleChange}>
        {countries.map((country: any) => {
          return <option>{country.name}</option>;
        })}
      </select>

      <div>
        <p> I live in {states} </p>
        {/* <p> {currentCountry}</p> */}
      </div>
    </div>
  );
}

export default App;
