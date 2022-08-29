import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import Logo from '../../assets/images/FJI.svg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import './Navbar.css';

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
    <Navbar expand="lg" className={scrolled ? 'scrolled' : 'unscrolled'}>
      <Container>
        <div className='navbar-logo-nav'>
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
            <div className='social-icons'>
                <IconButton size="large" target="_blank" href='https://www.linkedin.com/in/frank-imbruglia-095581164/' color='primary' aria-label='LinkedIn'><LinkedInIcon/></IconButton>
                <IconButton size="large" target="_blank" href='https://github.com/imbruglia100' color='primary' aria-label='Github'><GitHubIcon/></IconButton>
                <IconButton size="large" target="_blank" href='https://www.instagram.com/imbruglia50/' color='primary' aria-label='Instagram'><InstagramIcon/></IconButton>
            </div>
            <button className='contact' onClick={() => console.log('connect')}><span>Let's connect</span></button>
          </span>
        
      </Container>
    </Navbar>
  );
}