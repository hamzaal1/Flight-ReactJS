import { Route, Routes } from 'react-router-dom';
import './App.css';
import Flights from './Components/Flights';
import Header from './Components/Header';
import Home from './Components/Home';
import NoFlights from './Components/NoFlights';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='flights' element={<Flights />} />
          <Route path='Error' element={<NoFlights />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
