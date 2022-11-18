import React, { useEffect, useState } from 'react'
import { Input } from '../Components/input'
import { Cards } from '../Components/cards';
import { Container } from '@mui/system';
import { Box, Grid,Button, FormGroup, FormControl } from '@mui/material';
import Modal from '@mui/material/Modal';
import Axios from 'axios';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
const Uploads = () => {
  
    const [inputData, setInputData] = useState([]);
    const[updatepost, setUpdatePost] = useState({});
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    //insert data to database
    const additem = (input) => {  
        const insertData = {
            Title: input.Title,
            Type: input.Type,
            Poster: input.Poster
        }
        Axios.post("http://localhost:5000/createpost",insertData)
    }

    // updateData from database
    const updateData = (post) => {
        handleOpen();
        setUpdatePost(post)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatePost((prev) => {
            return {
                ...prev, [name]: value
            }
        }); 
    }

    const saveUpdatedPost = () => {
        axios.put(`http://localhost:5000/update/${updatepost._id}`, updatepost)
            .then((res) => { console.log(res); })
            .catch((err) => { console.log(err); })
        
        handleClose();
        window.location.reload();
    }

        //DeleteData from database
        const deleteData = (item) => {
            Axios.delete(`http://localhost:5000/delete/${item._id}`)
                .then((res) => { console.log(res) })
                .catch((err)=>{console.log(err);})
        }
    



    //read data from database
    useEffect( () =>{
        Axios.get("http://localhost:5000/read")
            .then((res) => { setInputData(res.data) })
            .catch((err) => { console.log(err) });
    },[inputData])
    

    
    return (
        <Container >
            <Grid mt={5} container justifyContent="space-between" spacing={3} >
                <Grid item xs={12} md={6} lg={9}>
                    <Box >
                        <Grid container spacing={3}>
                    
                            {inputData.map((item, index) => {
                                return (
                                    <Cards
                                        key={index}
                                        Poster={item.Poster}
                                        Title={item.Title}
                                        Type={item.Type}
                                        updateData={() => { updateData(item) }}
                                        deleteData={()=>{deleteData(item)}}
                                    />
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
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
        
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h1>Update post</h1>
                    <form>
                   <input onChange={handleChange} type= "text" placeholder='title..' name="Title" value={updatepost.Title ? updatepost.Title : ""} />
                   <input onChange={handleChange} type= "text" placeholder='Type..' name="Type" value={updatepost.Type ? updatepost.Type : ""}/>
                   <input onChange={handleChange} type= "text" placeholder='Poster..' name="Poster" value={updatepost.Poster ? updatepost.Poster : ""} />
                  </form>
                    <Button onClick={handleClose}>Close</Button>
                    <Button  onClick={saveUpdatedPost}>Save post</Button>
                  
                </Box>
            </Modal>
        </Container>
    );
}

export default Uploads

