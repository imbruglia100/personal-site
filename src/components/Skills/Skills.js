import React from 'react';
import Carousel from 'react-multi-carousel';
import './Skills.css';
import 'react-multi-carousel/lib/styles.css';
import git from '../../assets/images/1.svg'
import javascript from '../../assets/images/2.svg'
import node from '../../assets/images/3.svg'
import react from '../../assets/images/4.svg'
import cssHtml from '../../assets/images/5.svg'
import design from '../../assets/images/6.svg'
import marketing from '../../assets/images/7.svg'

export const Skills = () => {
    const responsive = {
        largeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className='skill' id='skills'>
            <div className='skill-bx'>
                <h2>
                    Skills
                </h2>
                <p>The list of skills will continue to grow. Learning new tech is one of my top priorities.</p>
                <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                    <div className='item'>
                        <img src={javascript} alt='meter 90%'/>
                        <h5>Javascript</h5>
                    </div>
                    <div className='item'>
                        <img src={react} alt='meter 90%'/>
                        <h5>React.js</h5>
                    </div>
                    <div className='item'>
                        <img src={design} alt='meter 90%'/>
                        <h5>Web Design</h5>
                    </div>
                    <div className='item'>
                        <img src={cssHtml} alt='meter 90%'/>
                        <h5>CSS & HTML</h5>
                    </div>
                    <div className='item'>
                        <img src={git} alt='meter 90%'/>
                        <h5>Git</h5>
                    </div>
                    <div className='item'>
                        <img src={node} alt='meter 90%'/>
                        <h5>Node.js</h5>
                    </div>
                    <div className='item'>
                        <img src={marketing} alt='meter 90%'/>
                        <h5>Digital Marketing</h5>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}