import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


export const Cards = (props) => {
  
 
  
    
  return (
      
    <Grid item xs={6} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={props.Poster !== "N/A" ? props.Poster : "https://via.placeholder.com/400"}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Title}
          </Typography>
          <Typography>
            {props.Type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => { props.updateData(props.post) }} size="small">Edit</Button>
          <Button onClick={() => { props.deleteData(props.id) }}size="small">del</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
