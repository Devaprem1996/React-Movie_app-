import React, { useEffect, useState } from 'react'
import { Input } from '../Components/input'
import { Cards } from '../Components/cards';
import { Container } from '@mui/system';
import { Box, Grid } from '@mui/material';
import Axios from 'axios';

const Uploads = () => {
  
    const [inputData, setInputData] = useState([]);
    
    
    const additem = (input) => {  
        const insertData = {
            Title: input.Title,
            Type: input.Type,
            Poster: input.Poster
        }
        Axios.post("http://localhost:5000/createpost",insertData)
    }
    useEffect( () =>{
         Axios.get("http://localhost:5000/read").then((res) => {
            setInputData(res.data);
        })
    },[inputData])
    
    
    return (
        <Container >
            <Grid mt={5} container justifyContent="space-between" spacing={3} >
                <Grid item xs={12} md={6} lg={9}>
                    <Box >
                        <Grid container spacing={3}>
                    
                            {inputData.map((item, index) => {
                                return (
                                    <Cards key={index} card={item} />
                                )
                            })}
                   
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Box>
    
                        <Input additem={additem} />
                    </Box>
                </Grid>

            </Grid>
            
            

        </Container>
    );
}

export default Uploads