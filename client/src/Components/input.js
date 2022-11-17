import React, { useState } from 'react'
import { TextField,Box, Button, FormControl, Typography } from '@mui/material/'
import { Stack } from '@mui/system'

import PhotoCamera from '@mui/icons-material/PhotoCamera';


export const Input = (props) => {
  
  const [input, setInput] = useState({
    Title: "",
    Type: "",
    Poster:""
  });
 

  
  const handleChange = (e) => {

  
    const { name, value } = e.target;
    setInput((val) => {
      return {...val,[name]:value}
      })
  }


  return (
    <Box>
      <Typography variant='h5'>
        Upload Movies
      </Typography>
      <FormControl>
      <Stack spacing={2}>
        <TextField onChange={handleChange} value={input.Title} name="Title" id="outlined-basic" label="title..." variant="outlined" />
        <TextField  onChange={handleChange}  value={input.Type} name="Type"id="outlined-basic" label="type..." variant="outlined" />
        <Stack direction="row" alignItems="center" spacing={2}>
        <TextField  onChange={handleChange}  value={input.Poster} name="Poster" hidden accept="image/*"id="outlined-basic" label="Poster..." variant="outlined" />
          
        
              
            <PhotoCamera />
          
        </Stack>
        <Button onClick={()=>{props.additem(input)}} variant="contained" >Add</Button>
      </Stack>

      </FormControl>
    </Box>
  );
}
