import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Album } from '../types/Album';

const AlbumCard = ({ album }: { album: Album }) => {

  // const { album_type, total_tracks, href, id, images, name, release_date, release_date_precision, artists } = album;

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
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
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