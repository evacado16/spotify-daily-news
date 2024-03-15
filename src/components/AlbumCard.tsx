import { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PauseCircle } from '@mui/icons-material';
import { Album } from '../types/Album';
import spotifyService from '../services/spotify';
import React from 'react';

const AlbumCard = ({ album }: { album: Album }) => {

  const [isPlaying, setIsPlaying] = React.useState(false);

  const playAlbum = () => {
    console.log(`Playing album: ${album.name}`);
    if (isPlaying) {
      spotifyService.pause().catch((error) => console.error(error));
    }
    else {
      spotifyService.play(album.id).then((data) => {
        console.log(data);
      }).catch((error) => console.error(error));
    }
  }

  useEffect(() => {
    const checkIfAlbumIsPlaying = setInterval(() => {
      spotifyService.getNowPlaying().then((data) => {
        if (data.is_playing && data.item.album.id === album.id) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      }).catch((e) => console.log(e))
    }, 1000); // Run the check every 1 second

    return () => {
      clearInterval(checkIfAlbumIsPlaying); // Clean up the interval when the component unmounts
    };
  }, [album.id]);

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { album.name }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            { album.artists.map((artist) => artist.name).join(', ') }
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause" onClick={playAlbum}>
            {isPlaying ? (
              <PauseCircle sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={ album.images[0].url }
        alt={ album.name }
      />
    </Card>
  )
}

export default AlbumCard