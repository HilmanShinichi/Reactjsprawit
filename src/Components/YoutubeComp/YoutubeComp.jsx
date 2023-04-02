import React from 'react'
import './YoutubeComp.css'

function YoutubeComp(props) {
  return (
    <div className='youtube-wrapper'>
        <div className='img-thumb'>
            <img src="https://i.ytimg.com/an_webp/mi-40VbUwhU/mqdefault_6s.webp?du=3000&sqp=CPTWpKEG&rs=AOn4CLDkALT_2zMDYFNykbEpwPGkQuuO7g" alt="" />
            <p className='time'>{props.time}</p>
        </div>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>
    </div>
  )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Title Here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YoutubeComp