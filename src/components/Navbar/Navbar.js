import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import Logo from '../../assets/images/FJI.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import './Navbar.css';

const buttonStyles = {
  
  position:'fixed',
  top: '20px',
  right: '6vw',
  color: '#fff',
  backgroundColor: '#003DFF',
  fontSize: '20px',
  transition: 'all .2s ease-in-out',
  opacity: '0',
  textShadow:'0px 1px 0px #e1e2ed',
  '@media (max-width: 500px)': {
    '&.scroll': {
      opacity: '1',
      color: '#fff',
      backgroundColor: '#003DFF',
      fontSize: '20px',
      transition: 'all .2s ease-in-out',
      textShadow:'0px 1px 0px #e1e2ed'
      }
  }
}

const socialStyles = {
    color: '#003DFF'
}

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    
    useEffect( () => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0 ? true : false)
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (name) => {
        setActiveLink(name)
    }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container id='home'>
      <IconButton className={scrolled ? 'scroll' : ''} sx={buttonStyles} href='#home' aria-label='LinkedIn'><KeyboardDoubleArrowUpRoundedIcon/></IconButton>
        <div className='navbar-logo-nav' >
            <Navbar.Brand href="#home">
                <img src={Logo} alt='logo'/>
            </Navbar.Brand>
            
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
        </div>
          <span className='navbar-text'>
            <div className='social-icons' >
                <IconButton size="large" sx={socialStyles} target="_blank" href='https://www.linkedin.com/in/frank-imbruglia-095581164/' aria-label='LinkedIn'><LinkedInIcon/></IconButton>
                <IconButton size="large" sx={socialStyles} target="_blank" href='https://github.com/imbruglia100' aria-label='Github'><GitHubIcon/></IconButton>
                <IconButton size="large" sx={socialStyles} target="_blank" href='https://www.instagram.com/imbruglia50/' aria-label='Instagram'><InstagramIcon/></IconButton>
            </div>
            <button className='contact' href='#contact'><span>Let's connect</span></button>
          </span>
        
      </Container>
    </Navbar>
  );
}