//import logo from './logo.svg';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Infobox from './Infobox';
//import axios from 'axios';

function App() {


//http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe/*


//http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone=Europe/London

const axios = require('axios');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  useEffect(() => {
  
    const getCountriesData = async () => {
      
     
      let res = await axios.get('http://api.timezonedb.com/v2.1/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe/*');

  let data = res.data;
 // console.log(data);


  const countries = data.zones.map((item)=> ({

    names: item.zoneName
  }));
 
setCountries(countries);

      }
        getCountriesData();
  },[countries]);

  const onCountryChange = async(e) => {
        console.log(e);
    const countrySelect = e.target.value;
    setCountry(countrySelect);
    //console.log(countrySelect);
    
    const url = 'http://api.timezonedb.com/v2/get-time-zone?key=XWSLLPX5RMIZ&format=json&by=zone&zone='.concat(countrySelect);

  
    let res = await axios.get(url)
    let data = res.data;
 console.log(data);
      setCountryInfo(data);

  };

  

  //console.log(countries);
  return (
    <div className="App">
      <div className="appheader">
         <h1> Example1: Select Time Zone to Continue from Drop Down </h1> 
        <FormControl >
          <Select variant="outlined" onChange={onCountryChange} value={country}>
          <MenuItem value={country}> {country} </MenuItem>
            {
            countries.map((country) => (
              <MenuItem value={country.names}> {country.names} </MenuItem>
            ))
            }

          </Select>
        </FormControl>
        </div>
        <div className="appTime">
            <Infobox title="Current time for the selected time zone is below" time={countryInfo.formatted}/>
        </div>

    </div>
  );
}

export default App;
