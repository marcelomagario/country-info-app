import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/countries/available`);
                console.log(response.data); 
                setCountries(response.data);
            } catch (err) {
                console.error("Error fetching countries:", err);
            }
        };
        fetchCountries();
    }, []);

    const handleCountryChange = (event) => {
        const selectedCountryCode = event.target.value;
        if (selectedCountryCode) {
            navigate(`/country/${selectedCountryCode}`); 
        }
    };

    return (
        <div>
            <h2>Available Countries</h2>
            {countries.length === 0 ? (
                <p>Loading countries...</p>
            ) : (
                <select onChange={handleCountryChange} defaultValue="">
                    <option value="" disabled>Select a country</option>
                    {countries.map(country => (
                        <option key={country.countryCode} value={country.countryCode}>
                            {country.name} {/* country name */}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default CountryList;
