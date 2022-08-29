import React from 'react'
import IconButton from '@mui/material/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='social-icons'>
                <IconButton size="large" target="_blank" href='https://www.linkedin.com/in/frank-imbruglia-095581164/' color='primary' aria-label='LinkedIn'><LinkedInIcon/></IconButton>
                <IconButton size="large" target="_blank" href='https://github.com/imbruglia100' color='primary' aria-label='Github'><GitHubIcon/></IconButton>
                <IconButton size="large" target="_blank" href='https://www.instagram.com/imbruglia50/' color='primary' aria-label='Instagram'><InstagramIcon/></IconButton>
        </div>
    </div>
  )
}
