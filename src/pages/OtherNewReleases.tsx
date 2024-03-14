import React, { useEffect } from 'react'
import spotifyService from '../services/spotify';
import AlbumCard from '../components/AlbumCard';
import Loading from '../components/Loading';
import { Grid, Typography } from '@mui/material';
import { Album } from '../types/Album';

const OtherNewReleases = () => {

  const [newReleases, setNewReleases] = React.useState<Album[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(true);
    const checkAccessToken = () => {
      if (!spotifyService.getAccessToken()) {
        console.log('No token');
        setTimeout(checkAccessToken, 1000); // Retry after 1 second
      } else {
        console.log('Getting new releases');
        spotifyService.getNewReleases()
          .then((data) => {
            console.log(data);
            setNewReleases(data.albums.items);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setNewReleases([]);
            setIsLoading(false);
          });
      }
    };
    checkAccessToken();
  }, []);

  const albums = newReleases.map((album) => 
    <Grid item key={album.id}>
      <AlbumCard album={album} />
    </Grid>
  );

  return (
    <>
      <Typography variant="h4" component="h2" gutterBottom align='center'>Other New Releases</Typography>
      {isLoading ? <Loading /> :
        <Grid container spacing={2}>
          { albums }
        </Grid>
      }
    </>
  )
}

export default OtherNewReleases