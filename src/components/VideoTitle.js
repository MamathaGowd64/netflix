import React from 'react'

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4  px-14  rounded-lg hover:bg-opacity-50'> Play</button>
        <button className='bg-gray-500 text-white p-4  px-14 bg-opacity-50 rounded-lg mx-3'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
