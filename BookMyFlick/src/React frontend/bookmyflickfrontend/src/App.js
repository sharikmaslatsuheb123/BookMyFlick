import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import HomePage from './components/HomePage'; 
import Registration from './components/Registration';
import AdminRegistration from './components/AdminRegistration';
import Login from './components/Login';
import WelcomeAdmin from './components/WelcomeAdmin';
import WelcomeUser from './components/WelcomeUser';
import AddTheaterForm from './components/AddTheaterForm';
import AddMovieForm from './components/AddMovieForm';
import AddShowtimeForm from './components/AddShowtimeForm';
import AddBookingForm from './components/AddBookingForm';
import MovieSelection from './components/MovieSelection';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome-admin/:username" element={<WelcomeAdmin />} caseSensitive={false} />
          <Route path="/welcome-user/:username" element={<WelcomeUser />} caseSensitive={false} />
          <Route path="/theaters/add-theater" element={<AddTheaterForm />} />
          <Route path="/movies/add-movie" element={<AddMovieForm />} />
          <Route path="/showtimes/add-showtime" element={<AddShowtimeForm />} />
          <Route path="/bookings/add-booking" element={<AddBookingForm />} />
          <Route path="/select-movie/:username" element={<MovieSelection />} />
       
        </Routes>
		<nav>
          <ul>
            {/* Link to the homepage */}
            <li><Link to="/">Home</Link></li>
            {/* ... other navigation links ... */}
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
