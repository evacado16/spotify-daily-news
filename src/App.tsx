import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Main from './pages/Main';
import OtherNewReleases from './pages/OtherNewReleases';
import FavoriteArtistNewReleases from './pages/FavoriteArtistNewReleases';
import { Box } from '@mui/material';
import spotifyService from './services/spotify';

const App = () => {

  const [spotifyToken, setSpotifyToken] = useState("");

  useEffect(() => {

    const hash = spotifyService.getTokenFromUrl();
    window.location.hash = "";
    
    const _token = hash.access_token || window.localStorage.getItem('token');

    if (_token) {
      window.localStorage.setItem('token', _token);
      setSpotifyToken(_token);
      spotifyService.setAccessToken(_token);
      spotifyService.getMe()
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
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
          <Route path="/artist-new-releases" element={<FavoriteArtistNewReleases />} />
          <Route path="/other-new-releases" element={<OtherNewReleases />} />
        </Routes>
      </Router>
    </Box>
    </>
  );
}

export default App
