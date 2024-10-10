import { Button } from '@mui/material';
import './Banner.css';
import { useEffect, useState } from 'react';
import proPic from "../../assets/images/proPic.jpg"
import {Background} from './Background'


const buttonStyle = {
    '&:hover':{
        backgroundColor:'#dda800'
    },
    backgroundColor:'#FFC200',
    color:'#000',
    fontWeight:'600',
    textTransform: 'none',
    familyFont: ["Segoe UI", 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    fontSize: '1.2em'

}

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Engineer.', 'Jiu Jitsu Black Belt.', 'V3 Rock Climber.', 'Cat Dad.', 'Gamer.']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(100)
    const period = 1400;

    useEffect( () => {
        let ticker = setInterval( () => {
            tick()
        }, delta)
        return () => clearInterval(ticker)
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 3)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(200)
        }
    }
    return (

        <Background id="home"className='banner'>
            <div className='container' >
                <div className='hero'>
                    <span className='tagline'>Hi,</span>
                    <h1>My name is <span style={{ color: '#FFC200'}}>Frank Imbruglia.</span></h1>

                    <h2>I am a <code style={{ color: '#FFC200'}}className='wrap'>{text}</code></h2>

                    <p>Driven Web Developer looking for an organization where I can thrive in a team-oriented environment, develop a deeper understanding of new techniques and technologies, and deliver projects that exceed client expectations.</p>
                    <Button sx={buttonStyle} size='large' variant='contained' href="#contact">Let's connect</Button>
                </div>
                <div className='header-img'>
                    <img src={proPic} alt='header img' className='avatar'/>
                </div>
            </div>
        </Background>

    );
}
