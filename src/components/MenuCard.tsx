import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    title: string;
    description: string;
    redirectURL: string;
}

const MenuCard: React.FC<Props> = ({title, description, redirectURL}) => {

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2">
                {description}
            </Typography>
          </CardContent>
          <CardActions sx={{float: 'right'}}>
            <Button color="secondary">Discover</Button>
          </CardActions>
        </React.Fragment>
      );

  return (
      <Card variant="outlined">{card}</Card>
  )
}

export default MenuCard
