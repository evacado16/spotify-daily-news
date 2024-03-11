import { Button } from '@mui/material'
import MenuCard from './MenuCard'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Main = () => {

    const logout = () => {
        window.localStorage.removeItem('token');
        window.location.reload();
    }

  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h2" gutterBottom align='center'>
                    Welcome to Spotify Daily News
                </Typography>
            </Grid>
            <Grid item xs={12} style={{textAlign: "center"}}>
                <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
            </Grid>
            <Grid item xs={6}>
                <MenuCard title="Fav Artist New Releases" description="test" redirectURL='/'/>
            </Grid>
            <Grid item xs={6}>
                <MenuCard title="Fav Genre New Releases" description="test" redirectURL='/'/>
            </Grid>
        </Grid>
    </>
  )
}

export default Main