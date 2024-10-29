import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const fetchCountries = async () => {
    const response = await axios.get(`${API_URL}/api/countries/available`);
    return response.data;
};

export const fetchCountryInfo = async (countryCode) => {
    const response = await axios.get(`${API_URL}/api/countries/${countryCode}`);
    return response.data;
};
