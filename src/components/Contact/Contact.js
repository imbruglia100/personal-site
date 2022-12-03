import React, { useState } from 'react'
import { Grid, TextField } from '@mui/material'
import './Contact.css'


export const Contact = () => {

    const [email, setEmail] = useState({})
    const [buttonText, setButtonText] = useState('Send') 

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

      const handleChange = (e) => {
        setEmail({[e.target.name]: e.target.value})
      }

    const handleSubmit = async (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({"form-name": 'contact', ...email})
          })
            .then(() => setButtonText('Sent!'))
            .catch(error => alert(error));
          
          setEmail({})
          e.preventDefault();
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
                        backgroundColor: '#fff',
                        zIndex: '-1'
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
            <h1>Let's talk</h1>
                <form name="contact" onSubmit={handleSubmit} method="POST">
                    <Grid container flexDirection='column' sx={styles}>
                        <Grid item >
                            <TextField
                            vairant='outlined'
                            label='First Name'
                            margin='normal'
                            name='firstName'
                            required
                            onChange={handleChange}
                            />
                            <TextField 
                            vairant='outlined'
                            label='Last Name'
                            margin='normal'
                            name='lastName'
                            onChange={handleChange}
                            />
                        </Grid>
                       
                            <TextField 
                            vairant='outlined'
                            label='Email'
                            type="email"
                            margin='normal'
                            name='address'
                            fullWidth
                            required
                            onChange={handleChange}
                            />

                            <TextField 
                            vairant='outlined'
                            label='Message'
                            margin='normal'
                            name='message'
                            multiline
                            fullWidth
                            onChange={handleChange}
                            />
    
                        <button id="submitButton" type="submit" onSubmit={handleSubmit}>{buttonText}</button>
                    </Grid>
                </form>
        </div>
    </section>
  )
}
