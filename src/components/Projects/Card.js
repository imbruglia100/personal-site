import React from 'react'
import './Card.css'

export const Card = ({title, img, url}) => {
  return (
    <div className='card'>
        <a href={url} target='_blank' rel='noreferrer' className='img-container'>
            <img src={img} alt={title}/>
        </a>
        <h2>{title}</h2>
    </div>
  )
}
