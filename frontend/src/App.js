import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryList from './CountryList';
import CountryInfo from './CountryInfo';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Country Info App</h1>
            <Routes>
                <Route path="/" element={<CountryList />} />
                <Route path="/country/:countryCode" element={<CountryInfo />} />
            </Routes>
        </div>
    );
}

export default App;
