import React from 'react'
import Slide from './Slide'

function SlideShow({websites}) {
  const sites = websites.websites

  console.log(sites)
  return (
    <div>
        {
          sites.map(ele => <Slide name={ele.name} url={ele.url}></Slide>)
        }
    </div>
  )
}

export default SlideShow