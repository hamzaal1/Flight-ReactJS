import React from 'react'
import {useNavigate} from 'react-router-dom'
import useFlightChecker from '../Hooks/FlightChecker';

function Flights() {
  const {flights,errorMessage,errorState} = useFlightChecker("2023-05-24","Tanger","Amsterdam Nethrlands");
  // const navigate = useNavigate()
  console.log(flights);

 
  return (
    <div>
     
    </div>
  )
}

export default Flights