import { Container, Row, Col } from 'react-bootstrap'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'
import { Button } from '@mui/material';
import './Banner.css';
import avatar from "../../assets/images/avatar.svg"

export const Banner = () => {
    
    return (
        <div className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome</span>
                        <h1>Hi I'm a bootcamp <span className='wrap'>web developer</span></h1>
                        <p>Lorem Ipsum</p>
                        <Button onClick={() => console.log('connect')}>Let's connect <ArrowCircleRightRoundedIcon fontSize='large' inheritViewBox sx={{color: '#C7A338'}}/></Button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={avatar} alt='header img' className='avatar'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}