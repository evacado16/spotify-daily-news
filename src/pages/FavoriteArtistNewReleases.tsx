import React, { useEffect } from 'react'
import spotifyService from '../services/spotify';

const FavoriteArtistNewReleases = () => {

  

  useEffect(() => {

    spotifyService.getFavoriteArtists().then((data) => {
      console.log(data);
    })

  }, []);
  
  return (
  <div>FavoriteArtistNewReleases</div>
  )
}

export default FavoriteArtistNewReleases