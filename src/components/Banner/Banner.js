import { Button } from '@mui/material';
import './Banner.css';
import { useEffect, useState } from 'react';
import avatar from "../../assets/images/avatar.svg"
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

}

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Front End Engineer', 'UI/UX Designer', 'React Speciallist']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(100)
    const period = 2000;

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
            setDelta(prevDelta => prevDelta / 2)
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
        <div id='home'>
        <Background className='banner'>
            <div className='container' >
                <div className='hero'>
                    <span className='tagline'>Welcome</span>
                    <h1>Hi, I'm a <code style={{ color: '#FFC200'}}className='wrap'>{text}</code></h1>

                    <p>Driven Junior Web Developer looking for an organization where I can thrive in a team-oriented environment, develop a deeper understanding of new techniques and technologies, and deliver projects that exceed client expectations.</p>
                    <Button sx={buttonStyle} size='large' variant='contained' href="#contact">Let's connect</Button>
                </div>
                <div className='header-img'>
                    <img src={avatar} alt='header img' className='avatar'/>
                </div>
            </div>
        </Background>
        </div>
    );
}