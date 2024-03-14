import React, { useEffect } from 'react'
import spotifyService from '../services/spotify'

const OtherNewReleases = () => {

  useEffect(() => {

    spotifyService.getNewReleases().then((data) => {
      console.log(data);
    })

  }, []);

  return (
    <div>OtherNewReleases</div>
  )
}

export default OtherNewReleases