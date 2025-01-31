import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountryInfo } from './api';

const CountryInfo = () => {
    const { countryCode } = useParams();
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        const getCountryInfo = async () => {
            const data = await fetchCountryInfo(countryCode);
            setCountryInfo(data);
        };
        getCountryInfo();
    }, [countryCode]);

    return (
        <div>
            <h2>Country Info for {countryCode}</h2>
            {countryInfo && (
                <div>
                    {/* Render borders */}
                    <p>Borders: {countryInfo.borders.map(border => border.commonName).join(', ')}</p>
                    {/* Render population */}
                    <p>Population: {countryInfo.population}</p>
                    {/* Render flag */}
                    <img src={countryInfo.flag} alt={`${countryCode} flag`} />
                </div>
            )}
        </div>
    );
};

export default CountryInfo;
