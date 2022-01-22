import './App.css';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AddressList from './components/AddressList';

function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState("");
  const [isFlag, setIsFlag] = useState(false);
  const [value, setValue] = useState(10);

  const getData = useCallback(function() {
    setFlag("");
    axios
      .get(`https://random-data-api.com/api/address/random_address?size=${value}`)
      .then(res => setData(prev => [...prev, ...res.data]));
  }, [value]);

  useEffect(() => {
    getData();
  },[]);

  function handleClick(event) {
    event.preventDefault();
    getData(value);
    console.log('clicked');
  
  }

  function showFlag(countryFlag){
    setIsFlag(true);
    setFlag(countryFlag.toLowerCase());
  }

  return (
    <div className="App">
      <h1>Random Address App</h1>
      <span id="flagLabel"> Selected Flag: </span>
      {flag === "" ||!isFlag ? <span>No Flag Selected</span> : <img src={`https://flagcdn.com/48x36/${flag}.png`} alt="flag" /> 
      }
      <AddressList addresses={data} showFlag={showFlag} />
        <label>
          Number of Addresses:
          <input type='number' value={value} onChange={event => setValue(event.target.value)}/>
        </label>
      <button type="button" onClick={handleClick}>Refetch</button>
    </div>
  );
}

export default App;
