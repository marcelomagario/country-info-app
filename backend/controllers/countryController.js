const axios = require('axios');

const getAvailableCountries = async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching countries' });
    }
};

const getCountryInfo = async (req, res) => {
    const { countryCode } = req.params;
    try {
        const bordersResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        const populationResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/population`);
        const flagResponse = await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`);
        const borders = bordersResponse.data.borders || [];

        const populationData = populationResponse.data.data.find(country => country.code === countryCode);

        let population = null;
        if (populationData) {
            const latestPopulationData = populationData.populationCounts[populationData.populationCounts.length - 1];
            population = latestPopulationData ? latestPopulationData.value : null;
        }

        const flag = flagResponse.data?.data 
        ? flagResponse.data.data.find(c => c.iso2 === countryCode)?.flag || '' 
        : '';

        const data = {
            borders,
            population,
            flag,
        };
        
        res.json(data);
    } catch (error) {
        console.error('Error fetching country info:', error); 
        res.status(500).json({ error: 'Error fetching country info' });
    }
};


module.exports = { getAvailableCountries, getCountryInfo };
