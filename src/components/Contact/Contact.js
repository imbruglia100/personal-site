import React, { useState } from 'react'
import { Button, getInitColorSchemeScript, Grid, TextField } from '@mui/material'
import './Contact.css'

export const Contact = () => {

    const [email, setEmail] = useState({})
    const [buttonText, setButtonText] = useState('Submit') 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...')




    }

    const styles = {
        
        '@media (max-width: 400px)': {
            margin: '0 20px',
            "& .MuiOutlinedInput-root":{
            
                "& > fieldset": {
                        border: '2px solid #000',
                        
                    },
               
            }
        },

        alignItems: 'center',
        '& .MuiInputLabel-root': {
            color: '#000',
            margin: '0 5px'
        },

        "& .MuiOutlinedInput-root":{
            
                "& > fieldset": {
                        border: '2px solid #000',
                        margin: '0 5px',
                        backgroundColor: '#fff'
                    },
                
                color: '#000'
            },
    
            "& .Mui-focused": {
                color: '#000'
        },
    }
    
  return (
    <section className='contact-section' id='contact'>
        <div className='contact-container'>
            <h1>Let's talk.</h1>
                <form>
                    <Grid container flexDirection='column' sx={styles}>
                        <Grid item >
                            <TextField
                            vairant='outlined'
                            label='First Name'
                            margin='normal'
                            id='firstName'
                            onChange={e => setEmail({firstName: e.target.value})}
                            />
                            <TextField 
                            vairant='outlined'
                            label='Last Name'
                            margin='normal'
                            id='lastName'
                            onChange={e => setEmail({lastName: e.target.value})}
                            />
                        </Grid>
                       
                            <TextField 
                            vairant='outlined'
                            label='Email'
                            margin='normal'
                            id='address'
                            fullWidth
                            onChange={e => setEmail({address: e.target.value})}
                            />

                            <TextField 
                            vairant='outlined'
                            label='Message'
                            margin='normal'
                            id='message'
                            multiline
                            fullWidth
                            onChange={e => setEmail({message: e.target.value})}
                            />
    
                        <Button variant='contained' onSubmit={handleSubmit}>{buttonText}</Button>
                    </Grid>
                </form>
        </div>
    </section>
  )
}
