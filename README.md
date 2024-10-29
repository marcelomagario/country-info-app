# country-info-app
This project involves building two small applications to provide information about countries. 

# Country Info App

## Overview
This application provides information about countries, including available countries, border countries, and historical population data.

## Backend

### Technologies
- Node.js
- Express

### Endpoints
- **GET /api/countries/available**: Returns a list of available countries.
- **GET /api/countries/:countryCode**: Returns detailed information about a specific country.

### Environment Variables
- PORT: Port for the backend server (default: 5000).

### Setup
1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Create a `.env` file with the necessary environment variables.
4. Start the server: `node server.js`.

## Frontend

### Technologies
- React
- React Router
- Chart.js

### Components
- **CountryList**: Displays a list of countries.
- **CountryInfo**: Displays detailed information about the selected country.

### Environment Variables
- REACT_APP_BACKEND_URL: Base URL for the backend API.

### Setup
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Create a `.env` file with the necessary environment variables.
4. **Run the Application**: 
   - Start the development server: `npm start`.
   - Open your browser and go to `http://localhost:3000` to view the app.
