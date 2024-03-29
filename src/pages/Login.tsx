import Button from '@mui/material/Button';
import spotifyService from '../services/spotify';

const Login = () => {
  return (
    <>
    <div className="container flex-column">
      <h1>Welcome to Spotify Daily News</h1>
      <p>Get the latest news on your favorite artists and songs</p>
      <Button variant="contained" color="secondary" href={ spotifyService.loginUrl }>Login with Spotify</Button>
    </div>
    </>
  )
}

export default Login