import React, { useEffect, useState } from 'react'
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

function useFlightChecker(date, from, to) {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState({ message: '', state: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('/flights');
        const flightsData = response.data.filter(flight => flight.source.includes(from) && flight.destination.includes(to) && flight.takeOff === date);

        if (flightsData.length === 0) {
          setError({
            message: `No flights found on ${date} for this destination : ${from} -> ${to}`,
            state: 1
          });
          setFlights([]);
          // navigate('/Error');
        } else {
          setFlights(flightsData);
          setError({ message: '', state: 0 });
        }
      } catch (error) {
        setError({ message: 'Error fetching flight data', state: 1 });
        setFlights([]);
        // navigate('/Error');
      }
    };
    fetchFlights();
  }, [date, from, to, navigate]);

  return { flights, errorState: error.state, errorMessage: error.message };
}

export default useFlightChecker;
