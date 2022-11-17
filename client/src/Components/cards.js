import React from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';


export const Cards = ({ card }) => {
    return (
      
    <Grid item key={card.key} xs={6} sm={6} md={4}>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={ card.Poster !== "N/A" ? card.Poster :"https://via.placeholder.com/400" }
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {card.Title}
        </Typography>
        <Typography>
          {card.Type}
        </Typography>
      </CardContent>
      
    </Card>
  </Grid>
  )
}
