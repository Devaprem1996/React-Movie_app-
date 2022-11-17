import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {Cards} from '../Components/cards'

const API_URL = `http://www.omdbapi.com/?apikey=a678b09a`
const Home = () => {
    const [data, setdata] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading]=useState(false);
  
  
  const searchMoives = async (title) => {
    
    const res = await axios.get(`${API_URL}&s=${title}`);
    
    if (res) {
      setdata(res.data.Search)
      setIsLoading(true)
    } else {
      setIsLoading(false);
    }

    setSearch("");

   } 
   

const theme = createTheme();


return (
<ThemeProvider theme={theme}>
  <CssBaseline />
  
  <main>
    {/* Hero unit */}
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Moives 
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Explore your favourite moives and see the details and posters
        </Typography>
      <div className='search'>
            <input
              type="text"
              value={search}
              placeholder='search for movies'
              onChange={(e) => {
                  setSearch(e.target.value)
              }}  
            />
            <button 
              
              type='button'
              alt="searchicon"
              onClick={(e) => {searchMoives(search)}}
           ><SearchIcon/></button>
        </div>
            
              
              
      </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {isLoading ? data.map((card,index) => (
          <Cards key={index} card={card} />
        )):<CircularProgress justifyContent="center" align="center"/> }
      </Grid>
    </Container>
  </main>
  {/* Footer */}
  <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Top Movies
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="text.secondary"
      component="p"
    >
      more 
    </Typography>
    <Copyright />
  </Box>
  {/* End footer */}
</ThemeProvider>
);
}

export default Home

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          moives app
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }