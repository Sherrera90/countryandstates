import CountriesStates from './components/CountriesStates.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddState from './components/AddState.tsx';
import AddCountry from './components/AddCountry';

function App() {
  return (
    <>
      <h1> Pick a Country and State</h1>
      <Router>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/AddState">
            <button>Add State</button>
          </Link>
          <Link to="/AddCountry">
            <button>Add Country</button>
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<CountriesStates />} />
          <Route
            path="/AddState"
            element={<AddState />} />
          <Route
            path="/AddCountry"
            element={<AddCountry />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;