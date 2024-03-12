import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Main from './pages/Main';
import { getTokenFromUrl } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { Box } from '@mui/material';

const spotify = new SpotifyWebApi();

const App = () => {

  const [spotifyToken, setSpotifyToken] = useState("");

  useEffect(() => {

    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token || window.localStorage.getItem('token');

    if (_token) {
      window.localStorage.setItem('token', _token);
      setSpotifyToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      });
    }
  }, []);

  return (
    <>
    <Header />
    <Box sx={{mx: '70px'}}>
      <Router>
        <Routes>
          <Route path="/" element={!spotifyToken ? <Login /> : <Main />}/>
        </Routes>
      </Router>
    </Box>
    </>
  );
}

export default App
